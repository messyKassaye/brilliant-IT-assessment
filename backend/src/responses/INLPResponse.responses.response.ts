import { INLPResult } from "../models/INLPResult.model";

export interface INLPResponse {
  fileName: string;
  filePath: string;
  result: INLPResult;
}
