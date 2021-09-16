import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListItem } from '../../models';
import { CharacterService } from '../../services';

@Component({
  selector: 'lotr-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters$!: Observable<CharacterListItem[]>;
  constructor(private characterservice: CharacterService) { }

  ngOnInit(): void {
    this.characters$ = this.characterservice.getCharacters();
  }
}