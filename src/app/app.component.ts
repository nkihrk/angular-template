import { Component } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss", "./_reset.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "angular-template";
}
