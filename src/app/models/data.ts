export class Data {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
  ) {}
  /*copy(obj: Data): Data {
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
    return this;
  }*/
}
