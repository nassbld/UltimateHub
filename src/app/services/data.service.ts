import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Player} from '../models/player';
import {environment} from 'src/environments/environment';
import {WorkRate} from '../models/work-rate';
import {Stats} from '../models/stats';
import {DomSanitizer} from '@angular/platform-browser';
import {AdvancedStats} from "../models/advanced-stats";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {
  }

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': this.apiKey
    });
  }

  private convertToPlayer(item: any): Player {
    return {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      name: item.name,
      height: item.height,
      weight: item.weight,
      gender: item.gender,
      birthDate: new Date(item.birthDate),
      age: item.age,
      position: item.position,
      foot: item.foot,
      weakFoot: item.weakFoot,
      skillMoves: item.skillMoves,
      rating: item.rating,
      color: item.color,
      workRate: {attack: item.attackWorkRate, defense: item.defenseWorkRate} as WorkRate,
      stats: {
        pace: item.pace,
        shooting: item.shooting,
        passing: item.passing,
        dribbling: item.dribbling,
        defending: item.defending,
        physicality: item.physicality
      } as Stats,
      advancedStats: {} as AdvancedStats,
      idNationality: item.nation,
      idClub: item.club
    };
  }

  private convertToPlayerWithAdvancedStats(item: any): Player {
    return {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      name: item.name,
      height: item.height,
      weight: item.weight,
      gender: item.gender,
      birthDate: new Date(item.birthDate),
      age: item.age,
      position: item.position,
      foot: item.foot,
      weakFoot: item.weakFoot,
      skillMoves: item.skillMoves,
      rating: item.rating,
      color: item.color,
      workRate: {
        attack: item.attackWorkRate,
        defense: item.defenseWorkRate } as WorkRate,
      stats: {
        pace: item.pace,
        shooting: item.shooting,
        passing: item.passing,
        dribbling: item.dribbling,
        defending: item.defending,
        physicality: item.physicality
      } as Stats,
      advancedStats: {
        paceAttributes: {
          acceleration: item.acceleration,
          sprintSpeed: item.sprintSpeed
        },
        shootingAttributes: {
          positioning: item.positioning,
          finishing: item.finishing,
          shotPower: item.shotPower,
          longShots: item.longShots,
          volleys: item.volleys,
          penalties: item.penalties
        },
        passingAttributes: {
          vision: item.vision,
          crossing: item.crossing,
          freeKickAccuracy: item.freeKickAccuracy,
          shortPassing: item.shortPassing,
          longPassing: item.longPassing,
          curve: item.curve
        },
        dribblingAttributes: {
          agility: item.agility,
          balance: item.balance,
          reactions: item.reactions,
          ballControl: item.ballControl,
          dribbling: item.dribbling,
          composure: item.composure
        },
        defendingAttributes: {
          interceptions: item.interceptions,
          headingAccuracy: item.headingAccuracy,
          standingTackle: item.standingTackle,
          slidingTackle: item.slidingTackle,
          defenseAwareness: item.defenseAwareness
        },
        physicalityAttributes: {
          jumping: item.jumping,
          stamina: item.stamina,
          strength: item.strength,
          aggression: item.aggression
        },
        goalkeeperAttributes: {
          diving: item.diving,
          handling: item.handling,
          kicking: item.kicking,
          positioning: item.positioning,
          reflexes: item.reflexes
        }
      } as AdvancedStats,
      idNationality: item.nation,
      idClub: item.club
    };
  }

  getPlayers(page: number = 1): Observable<{ players: Player[], pagination: any }> {
    const url = `${this.apiUrl}/players`;
    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers, params: { page: page.toString() } }).pipe(
      map((response) => {
        const players = response.items ? response.items.map((item: any) => this.convertToPlayer(item)) : [];
        const pagination = response.pagination || {};

        return { players, pagination };
      })
    );
  }

  getImagePlayerById(playerId: number): Observable<string> {
    const url = `${this.apiUrl}/players/${playerId}/image`;
    const headers = this.getHeaders();
    const options = {headers, responseType: 'blob' as 'blob'};

    return this.http.get(url, options).pipe(
      map((imageBlob: Blob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
      })
    );
  }

  getPlayerWithAdvancedStatsById(playerId: number): Observable<Player> {
    const url = `${this.apiUrl}/players/${playerId}`;
    const headers = this.getHeaders();
  
    return this.http.get<any>(url, {headers}).pipe(
      map((response) => {
        return this.convertToPlayerWithAdvancedStats(response.player);
      })
    );
  }

getImageNationalityById(nationalityId: number): Observable<string> {
    const url = `${this.apiUrl}/nations/${nationalityId}/image`;
    const headers = this.getHeaders();
    const options = {headers, responseType: 'blob' as 'blob'};

    return this.http.get(url, options).pipe(
      map((imageBlob: Blob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
      })
    );
  }

  getImageClubById(clubId: number): Observable<string> {
    const url = `${this.apiUrl}/clubs/${clubId}/image`;
    const headers = this.getHeaders();
    const options = {headers, responseType: 'blob' as 'blob'};

    return this.http.get(url, options).pipe(
      map((imageBlob: Blob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
      })
    );
  } 

}
