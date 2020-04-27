import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { TokenizerPipe } from './part2/tokenizer.pipe';
import {ListService} from './part1/list.service';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    TokenizerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
