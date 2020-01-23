import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ScoreboardItem} from './models/scoreboard-item.model';
import {GameModule} from '../game.module';

@Injectable()
export class ScoreboardService {

  constructor(private http: HttpClient) {
  }

  getScoreboard() {
    return this.http.get<ScoreboardItem[]>(`${environment.baseUrl}`);
  }

  saveScoreboard(scoreboardItem: ScoreboardItem) {
    return this.http.post<any>(`${environment.baseUrl}`, scoreboardItem);
  }

  resetScoreBoard() {
    return this.http.get<any>(`${environment.baseUrl}/reset`);
  }
}
