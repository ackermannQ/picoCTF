import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Challenge } from "../domain/challenge";


@Injectable()
export class ChallengeService {

    constructor(private http: HttpClient) { }

    getChallenges() {
        // return this.http.get<any>('assets/challenges.json')
        // .toPromise()
    }


}