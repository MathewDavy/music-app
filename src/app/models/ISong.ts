import { IGrid } from "./IGrid";

export interface ISong {
  melodyGrid: IGrid;
  chordGrid: IGrid;
  name: string;
  id?: number;
  
}
