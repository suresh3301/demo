import { Component, Input } from "@angular/core";

@Component({
  selector: "devon-results-section",
  templateUrl: "./results-section.component.html",
  styleUrls: ["./results-section.component.css"]
})
export class ResultsSectionComponent {
  @Input() results;
}
