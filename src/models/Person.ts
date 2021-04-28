export default class Person {
    private _height: number = 0.0;
    private _weight: number = 0.0;
    private _imc: number = 0.0;
    private _imcDescription: string = "";

    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;
    }

    toObject(): any {
        return {
            height: this._height,
            weight: this._weight,
            imc: this._imc,
            imcDescription: this._imcDescription,
        };
    }

    copy(data: Person): Person {
        return Object.assign(Object.create({}), this, data);
    }

    get height() {
        return this._height;
    }

    set height(theHeight: number) {
        this._height = theHeight;
    }

    get weight() {
        return this._weight;
    }

    set weight(theWeight: number) {
        this._weight = theWeight;
    }

    get imc() {
        return this._imc;
    }

    set imc(theImc: number) {
        this._imc = theImc;
    }

    public get imcDescription() {
        return this._imcDescription;
    }

    public set imcDescription(value: string) {
        this._imcDescription = value;
    }
}
