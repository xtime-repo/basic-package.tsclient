
export class Div implements IHtmlLibElement{
    el: HTMLDivElement;
    children = {
        _lenghGet: () => {
            return this.el.children.length;
        },
        get length(): number {
            return this._lenghGet();;
        },
        Add: (elenew: IHtmlLibElement) => {
            this.el.appendChild(elenew.el);
        },
        AddRange: (elenew: IHtmlLibElement[]) => {
            elenew.forEach(c => this.el.appendChild(c.el))
        }
    }
    public set text(v: string) {
        this.el.textContent = v;
    }
    constructor(text: string = "") {
        this.el = document.createElement("div");
        if (text.length > 0) this.el.textContent = text;
    }
}