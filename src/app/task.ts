interface ITask {
  id: number;
  name: string;
  description: string;
  dueDate?: Date;
  isCompleted?: boolean;
}

export class Task implements ITask {
  private _id: number;
  private _name: string;
  private _description: string;
  private _dueDate? : Date;
  IsCompleted? : Boolean;

  constructor(
    Task?: ITask
  ){
    this._id = Task?.id ?? 0;
    this._name = Task?.name ?? "";
    this._description = Task?.description ?? "";
    this.dueDate = Task?.dueDate;
    this.IsCompleted = Task?.isCompleted;
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