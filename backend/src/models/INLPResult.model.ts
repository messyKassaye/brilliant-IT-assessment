import { IEntity } from "./IEntity.model";
import { ISentiment } from "./ISentiment.modle";

export interface INLPResult {
  tokens: string[];
  sentiment: ISentiment;
  entities: IEntity;
  text: string;
}
