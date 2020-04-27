

import { Injectable } from '@angular/core';
import { List } from './list';
import { LISTS } from './mock-lists';

@Injectable()
export class ListService {
  getList(): List[] {
    return LISTS;
  }
}
