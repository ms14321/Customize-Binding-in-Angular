import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('total') all:number = 0;
  @Input() free:number = 0;
  @Input() premium:number = 0;

  selectRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);
    // console.log(this.selectRadioButtonValue);
  }



}
