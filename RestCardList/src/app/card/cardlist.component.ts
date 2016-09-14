import {Component,OnInit, Input, Output} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { CardService }       from './card.service';
import { CardComponent }       from './card.component';


@Component({
  selector: 'my-friends',
  templateUrl: './cardlist.component.html',
	providers: [CardService]
})

export class CardListComponent implements OnInit {
  errorMessage: string;
 @Input() friends;
 

  constructor (private _cardService: CardService) {}

  ngOnInit() { this.getCards(); }

  getCards() {
    this._cardService.getCards()
                     .subscribe(
                       res => this.friends = res.results,
                       error =>  this.errorMessage = error);
  }


}

