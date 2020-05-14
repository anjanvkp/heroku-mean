import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService} from '../data.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemList: Item[]=[];

  constructor(private dataService: DataService) { }

  getItems(){
    this.dataService.getShoppingItems()
    .subscribe((items: any[]) => {
      this.shoppingItemList = items;
      console.log("data from dataservice: " + this.shoppingItemList[0].itemName);
    })
  }

  ngOnInit(): void {
    this.getItems();
  }

}
