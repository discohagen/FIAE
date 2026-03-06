class HKalkulator {
    constructor(containerId, rows, { mode = "forward" } = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        this.rows = rows;
        this.mode = mode;
        this._render();
        this._bind();
        this._recalc();
    }

    _render() {
        this.container.classList.add("hkalkulator");

        const table = document.createElement("table");

        const thead = document.createElement("thead");
        const tr = document.createElement("tr");

        [("Schritt", "Op.", "Prozentsatz [%]", "Betrag [€]")].forEach(
            (text) => {
                const th = document.createElement("th");
                th.textContent = text;
                tr.appendChild(th);
            },
        );

        thead.appendChild(tr);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        this.rows.forEach((row, i) => {
            const tr = document.createElement("tr");
            const isResult = !row.input;
            if (isResult) tr.classList.add("result-row");
            if (i === 0) tr.classList.add("start-row");
            if (i === this.rows.length - 1) tr.classList.add("end-row");

            const tdLabel = document.createElement("td");
            tdLabel.textContent = row.label;
            tr.appendChild(tdLabel);

            const tdOp = document.createElement("td");
            tdOp.classList.add("op-cell");
            tdOp.textContent = row.op;
            tr.appendChild(tdOp);

            const tdPct = document.createElement("td");
            if (row.input === "percent" || row.input === "both") {
                const inp = document.createElement("input");
                inp.type = "number";
                inp.id = `${this.container.id}__${row.id}__pct`;
                inp.min = 0;
                inp.max = 100;
                inp.step = "any";
                inp.placeholder = "%";
                if (row.fixed !== undefined) {
                    inp.value = row.fixed;
                    inp.readOnly = true;
                }
                tdPct.appendChild(inp);
            }
            tr.appendChild(tdPct);

            const tdAmt = document.createElement("td");
            if (isResult || i === 0) {
                if (i === 0 && row.input) {
                    const inp = document.createElement("input");
                    inp.type = "number";
                    inp.id = `${this.container.id}__${row.id}__abs`;
                    inp.min = 0;
                    inp.step = "any";
                    inp.placeholder = "€";
                    if (row.fixed !== undefined) inp.value = row.fixed;
                    tdAmt.appendChild(inp);
                } else {
                    const span = document.createElement("span");
                    span.id = `${this.container.id}__${row.id}__abs`;
                    span.textContent = "-";
                    tdAmt.appendChild(span);
                }
            } else if (row.input === "absolute" || row.input === "both") {
                const inp = document.createElement("input");
                inp.type = "number";
                inp.id = `${this.container.id}__${row.id}__abs`;
                inp.min = 0;
                inp.step = "any";
                inp.placeholder = "€";
                if (row.fixed !== undefined) inp.value = row.fixed;
                tdAmt.appendChild(inp);
            } else if (!isResult) {
                const span = document.createElement("span");
                span.id = `${this.container.id}__${row.id}__abs`;
                span.textContent = "-";
                tdAmt.appendChild(span);
            }
            tr.appendChild(tdAmt);

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        this.container.appendChild(table);
    }

    _el(rowId, suffix) {
        return document.getElementById(
            `${this.container.id}__${rowId}__${suffix}`,
        );
    }

    _val(rowId, suffix) {
        const el = this._el(rowId, suffix);
        if (!el) return 0;
        return parseFloat(el.value) || 0;
    }

    _set(rowId, suffix, value) {
        const el = this._el(rowId, suffix);
        if (!el) return;
        const rounded = Math.round(value * 100) / 100;
        if (el.tagName === "SPAN") {
            el.textContent =
                rounded.toLocaleString("de-DE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }) + " €";
        } else {
            el.value = rounded.toFixed(2);
        }
    }

    _bind() {
        this.rows.forEach((row, i) => {
            const pctEl = this._el(row.id, "pct");
            const absEl = this._el(row.id, "abs");

            if (pctEl)
                pctEl.addEventListener("input", (e) => {
                    if (row.input === "both") {
                        const base = this._getBase(i);
                        if (base !== null) {
                            const pct = parseFloat(pctEl.value) || 0;
                            const absEl2 = this._el(row.id, "abs");
                            if (absEl2 && absEl2.tagName === "INPUT") {
                                absEl2.value = ((base * pct) / 100).toFixed(2);
                            }
                        }
                    }
                    this._recalc();
                });

            if (absEl && absEl.tagName === "INPUT") {
                absEl.addEventListener("input", (e) => {
                    if (row.input === "both") {
                        const base = this._getBase(i);
                        if (base !== null && base !== 0) {
                            const abs = parseFloat(absEl.value) || 0;
                            const pctEl2 = this._el(row.id, "pct");
                            if (pctEl2)
                                pctEl2.value = ((100 * abs) / base).toFixed(2);
                        }
                    }
                    this._recalc();
                });
            }
        });
    }

    _getBase(i) {
        for (let j = i - 1; j >= 0; j--) {
            if (!this.rows[j].input) {
                const el = this._el(this.rows[j].id, "abs");
                if (el)
                    return (
                        parseFloat(
                            el.textContent
                                .replace(/[^\d.,-]/g, "")
                                .replace(",", "."),
                        ) || 0
                    );
            }
            if (j === 0) {
                const el = this._el(this.rows[0].id, "abs");
                if (el) return parseFloat(el.value) || 0;
            }
        }
        return null;
    }

    _recalc() {
        let running = this._val(this.rows[0].id, "abs");

        for (let i = 1; i < this.rows.length; i++) {
            const row = this.rows[i];

            if (!row.input) {
                this._set(row.id, "abs", running);
                continue;
            }

            const pct = this._val(row.id, "pct");
            const abs = this._val(row.id, "abs");

            if (row.special === "skonto" || row.special === "rabatt") {
                if (pct > 0) {
                    abs = (running * (pct / 100)) / (1 - pct / 100);
                    this._set(row.id, "abs", abs);
                }
            } else if (row.special === "gewinn-rueck") {
                if (pct > 0) {
                    abs = (running * (pct / 100)) / (1 - pct / 100);
                    this._set(row.id, "abs", abs);
                }
            } else if (row.special === "hk-rueck") {
                if (pct > 0) {
                    abs = (running * (pct / 100)) / (1 + pct / 100);
                    this._set(row.id, "abs", abs);
                }
            } else if (
                row.special === "skonto-rueck" ||
                row.special === "rabatt-rueck"
            ) {
                if (pct > 0) {
                    abs = running * (pct / 100);
                    this._set(row.id, "abs", abs);
                }
            } else if (
                row.special === "lieferskonto-rueck" ||
                row.special === "lieferrabatt-rueck"
            ) {
                if (pct > 0) {
                    abs = (running * (pct / 100)) / (1 - pct / 100);
                    this._set(row.id, "abs", abs);
                }
            } else {
                if (row.input === "percent" && pct > 0) {
                    abs = (running * pct) / 100;
                    this._set(row.id, "abs", abs);
                } else if (row.input === "both" && pct > 0 && abs === 0) {
                    abs = (running * pct) / 100;
                    this._set(row.id, "abs", abs);
                }
            }

            if (row.op === "-") running -= abs;
            else if (row.op === "+") running += abs;
        }
    }
}
