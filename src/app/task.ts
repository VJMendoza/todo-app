import { ENETDOWN } from "constants";

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate?: Date;
  isCompleted?: boolean;
}

export class TaskImplem implements Task {
  private _id: number;
  private _name: string;
  private _description: string;
  private _dueDate? : Date;
  IsCompleted? : Boolean;

  constructor(
    id: number,
    name: string,
    description: string,
  ){
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 32 ){
      this._name = value.substring(0, 31);
    } else {
      this._name = value;
    }
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    if (value.length > 255) {
      this._description = value.substring(0, 254);
    } else {
      this._description = value;
    }
  }

  get dueDate(): Date | undefined{
    return this._dueDate;
  }

  set dueDate(value: Date | undefined) {
    var now = new Date();
    now.setHours(0, 0, 0, 0);

    if (value === undefined || value < now ){
      this._dueDate = undefined;
    } else if ( value > now) {
      this._dueDate = value;
    }
  }


}