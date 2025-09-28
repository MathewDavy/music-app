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
  ngOnInit(): void {}
}
