import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() name: string = ""; // <-- aggiunta la proprietà name
  constructor() { 
  }
  ngOnInit() {
  }
}
