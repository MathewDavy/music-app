import { IColumn } from "./IColumn";

export interface IGrids {
  melodyGrid: IColumn[];
  chordGrid: IColumn[];
  name: string;
  id?: number;
  
}
