export class Player {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly nationality: string;

  constructor(firstName: string, lastName: string, nationality: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
  }

  public fullName() {
    return this.firstName + " " + this.lastName;
  }

  public isAForeignPlayer() {
    return this.nationality !== "Finland";
  }

  public isAFinnishPlayer() {
    return this.nationality === "Finland";
  }

  public isAnAmericanPlayer() {
    return this.nationality === "USA";
  }
}
