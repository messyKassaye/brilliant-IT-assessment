import { IEntity } from "./IEntity.model";
import { ISentiment } from "./ISentiment.modle";

export interface IAnswer {
  tokens?: string[];
  sentiment?: ISentiment[];
  entities?: IEntity[];
  text?: string;
  answer?: string;
}
