import { Component, OnInit } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { IColumn } from "src/app/models/IColumn";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
  imports: [MatToolbarModule],
})
export class ToolbarComponent implements OnInit {
  constructor(private apiService: ApiService) {
    const gridData: IColumn[] = [
      {
        duration: { column: 1, duration: "quarterNote" },
        chord: { notes: ['A4', 'C4', 'E4'] },
      },
      {
        duration: { column: 3, duration: "quarterNote" },
        chord: { notes: ['C4', 'E4', 'G4'] },
      },
    ];
    this.apiService.saveGrid(gridData).subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
