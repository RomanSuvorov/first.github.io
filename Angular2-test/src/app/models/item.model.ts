import { uuid } from "../shared/uuid.generator";

export interface ItemModel {
  title: string;
  id?: string;
}

export class Item {
  title: string;
  id?: string;

  constructor(obj?: ItemModel) {
    this.title = obj && obj.title ? obj.title : null;
    this.id = obj && obj.id ? obj.id : uuid();
  }
}
