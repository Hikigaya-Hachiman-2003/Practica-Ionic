import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface GFNCindividual {
  ejemplo: Ejemplo;
}

export interface Ejemplo {
  _id:       string;
  Imagen:    string;
  Nombre:    string;
  Clase:     string;
  Rareza:    string;
  Stats_max: StatsM;
  Stats_min: StatsM;
  Skills:    Skill[];
  __v:       number;
}

export interface Skill {
  Nombre:      string;
  Descripcion: string;
  _id:         string;
}

export interface StatsM {
  HP:                    string;
  ATK:                   string;
  ATK_Speed:             string;
  Power:                 string;
  DEF:                   string;
  DEF_Penetration:       string;
  Crit_Rate:             string;
  Crit_Damage:           string;
  After_Battle_Recovery: string;
  _id:                   string;
}

export interface Gfnc {
  gfnc: GfncElement[];
}

export interface GfncElement {
  _id:       string;
  Imagen:    string;
  Nombre:    string;
  Clase:     string;
  Rareza:    string;
  Stats_max: StatsM;
  Stats_min: StatsM;
  Skills:    Skill[];
}

export interface Skill {
  Nombre:      string;
  Descripcion: string;
  _id:         string;
}

export interface StatsM {
  HP:                    string;
  ATK:                   string;
  ATK_Speed:             string;
  Power:                 string;
  DEF:                   string;
  DEF_Penetration:       string;
  Crit_Rate:             string;
  Crit_Damage:           string;
  After_Battle_Recovery: string;
  _id:                   string;
}

type ApiResponse = { ejemplo: Ejemplo, gfnc: GfncElement[] }


@Injectable({
  providedIn: 'root'
})
export class GfncService {

  httpClient = inject(HttpClient);

  getAll(): Promise<ApiResponse> {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>('http://localhost:3000/api/gfnc')
    )

  }

  getById(id: string): Promise<GFNCindividual> {
    return firstValueFrom(
      this.httpClient.get<GFNCindividual>(`http://localhost:3000/api/gfnc/${id}`)
    );
  }
  
}
