import { Injectable } from '@angular/core';
import { resultWS, destinodetailWS, destino } from '../data/rutaWS';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class openTripMapService {

  apiKey  = "5ae2e3f221c38a28845f05b6a22818bcce733ac3c9eff8d021f4120e"
  baseUrl = "https://api.opentripmap.com/0.1/en/" 

  private destinosAgregados: destino[] = []
  private destinoModificadoSource = new BehaviorSubject<any>(null);
  destinoModificado$ = this.destinoModificadoSource.asObservable();

  constructor() { }

  async buscarDestino(termino: string): Promise<resultWS> { 
      const url = `${this.baseUrl}/places/autosuggest?name=${termino}&radius=12742000&lon=-73.0336522&lat=-36.9248235&rate=3&limit=5&apikey=${this.apiKey}`;
      const resultado = await fetch(url);
      const data = await resultado.json();
      return data;

  }

  setDestinoModificado(destino:any){    
    this.destinoModificadoSource.next(destino);}
  
  async buscarImagen(source: string): Promise<destinodetailWS> {    
      const url = `${this.baseUrl}/places/xid/${source}?&apikey=${this.apiKey}`;
      const resultado = await fetch(url);
      const data = await resultado.json();
      return data;
     }
  }
  