import { Component, OnInit } from '@angular/core';
import { List } from './list';
import { ListService } from './list.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  homeWorkNo = 'HW4 - Part1';
  lists: List[];
  total = 0;
  index: number;
  removeBook: (idx) => void;
  addBook: () => void;
  getTotal: () => number;
  save: () => void;
  private storageList = [];

  constructor(private listService: ListService) {
    this.listService = listService;
  }

  ngOnInit(): void {
    const cart = JSON.parse(window.localStorage.getItem('lastName_cart'));
    if (cart != null) {
      for (const item of cart) {
        const getItem = {
          title: item.title,
          qty: item.qty,
          price: item.price
        };
        this.storageList.push(getItem);
      }
      this.lists = this.storageList;
    } else {
      this.lists = this.listService.getList();
    }

    this.removeBook = (idx) => {
      this.lists.splice(idx, 1);
      console.log('Removing index:', idx);
    };

    this.addBook = () => {
      const newBook = {
        title: 'New Book',
        qty: 1,
        price: 10.99
      };
      this.lists.push(newBook);
    };

    this.getTotal = () => {
      this.total = 0;
      for (const list in this.lists) {
        if (this.lists.hasOwnProperty(list)) {
          this.total += this.lists[list].price * this.lists[list].qty;
        }
      }
      return this.total;
    };

    this.save = () => {
      window.localStorage.setItem('lastName_cart', JSON.stringify(this.lists));
    };

  }
}
