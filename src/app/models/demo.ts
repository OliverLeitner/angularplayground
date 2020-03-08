export class demo {
    public string1: string;
    public string2: string;
    public title: string;
    public enumName: string; // the entry name
    constructor(
        public number1?: number,
        public number2?: number,
        public enumVal?: number // the entry val
    ) {
        // do stuff
    }
    /*copy(obj: demo) {
        this.number1 = obj.number1;
        this.number2 = obj.number2;
        this.enumVal = obj.enumVal;
        return obj;
    }*/
}
