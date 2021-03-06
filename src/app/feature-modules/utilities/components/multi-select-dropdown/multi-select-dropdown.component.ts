import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";

@Component({
  selector: "devon-multi-select-dropdown",
  templateUrl: "./multi-select-dropdown.component.html",
  styleUrls: ["./multi-select-dropdown.component.css"]
})
export class MultiSelectDropdownComponent implements OnChanges {
  @Input() options: any;
  @Input() title: string;
  @Input() clear: boolean;
  @Output() changeObj: EventEmitter<any> = new EventEmitter<any>();
  selectedCheckBoxes = [];
  displayBox: string = "none";
  selection: string = "";

  ngOnChanges() {
    if (this.clear) {
      let clist = document.getElementsByTagName("input");
      for (var i = 0; i < clist.length; ++i) {
        clist[i].checked = false;
      }
      this.selectedCheckBoxes = [];
      this.selection = "";
    }
  }

  onChangeSelection(option, checked) {
    if (this.selectedCheckBoxes.indexOf(option.key) === -1 && checked) {
      this.selectedCheckBoxes.push(option.key);
    }
    if (this.selectedCheckBoxes.indexOf(option.key) !== -1 && !checked) {
      this.selectedCheckBoxes.splice(
        this.selectedCheckBoxes.indexOf(option.key),
        1
      );
    }
    this.selection = this.selectedCheckBoxes.toString();
    this.changeObj.emit(this.selectedCheckBoxes);
  }

  openfor3secs() {
    setTimeout(() => {
      this.displayBox = "none";
    }, 2000);
  }
}
