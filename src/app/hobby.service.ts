import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Match } from './match.model';

@Injectable()
export class HobbyService {
  constructor(private http: HttpClient) {}

  getData() {
    const url = 'https://hltv-api.vercel.app/api/results.json';
    return this.http.get(url).pipe(
      map((data: any) => {
        let matches = data;

        return matches.map(function (match: any): Match {
          return new Match(
            match.event,
            match.team1.name,
            match.team2.name,
            match.team1.crest,
            match.team2.crest,
            match.maps,
            match.matchId,
            match.team1.result,
            match.team2.result,
            match.time
          );
        });
      })
    );
  }
}
