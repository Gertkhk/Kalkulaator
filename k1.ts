export class Isikukood{
    constructor(protected kood:string){}
    sugu(){
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    }
}