import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDestinoService {

  private destinos: any[] = [];

  agregarDestino(destino: { destinoImagen: any; name: string; country: string; imagen: string }) {
    this.destinos.push(destino);
  }

  obtenerDestinos() {
    return this.destinos;
  }
}