export class Car {
    constructor(
    private _id: string,
    private _year:number,
    private _make: string,
    private _model: string,
    private _article: string,
    private _imgUrl : string,
    ){}
    
    public get id() : string {
    return this._id;
    }
    public get year() : number {
    return this._year;
    }
    public get make() : string {
    return this._make;
    }
    public get model() : string {
    return this._model;
    }
    public get article() : string {
    return this._article;
    }
    public get imgUrl() : string {
        return this._imgUrl;
        }
    }
