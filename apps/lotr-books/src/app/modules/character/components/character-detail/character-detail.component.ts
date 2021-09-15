import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterListItem } from '../../models';
import { CharacterService } from '../../services';

@Component({
  selector: 'lotr-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character$!: Observable<CharacterListItem>;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.character$ = this.characterService.getCharacter(id);
    }
  }
}
