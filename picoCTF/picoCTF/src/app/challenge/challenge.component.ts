import { Component, OnInit } from '@angular/core';
import { ChallengeService} from '../service/challengeService';
import { Challenge } from '../domain/challenge';

/* tslint:disable */

interface Category {
  name: string;
}

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})

export class ChallengeComponent implements OnInit {

  display = false;

  categories: Category[];
  selectedCategory: Category;

  text: string;

  values: string[];

  checked = false;

  cols: any[];
  challenges: Challenge;

  constructor(private challengeService: ChallengeService) {

    this.categories = [
      { name: 'Reverse' },
      { name: 'Cryptography' },
      { name: 'Misc' },
      { name: 'Web' }
    ];
}

ngOnInit() {
  this.challengeService.getChallenges().then(challenges => this.challenges = challenges);

  this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'category', header: 'Category' }
  ];
}


  showDialog() {
    this.display = true;
  }

  valid() {
    console.log('Validated');
    this.display = false;
  }

  cancel() {
    console.log('Canceled');
    this.display = false;
  }


}
