import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { openTripMapService } from '../servicios/openTripMap.service';
import { IonModal} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-1',
  templateUrl: './modal-1.page.html',
  styleUrls: ['./modal-1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Modal1Page implements OnInit{
  @ViewChild(IonModal) modal!:IonModal;

  valor: number[] = [];
  nuevoValor: number | undefined;
  formatoMoneda:string ="";
  mensaje:string="";  
  destino: any;
  dismiss: any;
  destinoId: any; 

  constructor(
    private modalCtrl: ModalController,
    private servicio: openTripMapService,
    private route: ActivatedRoute


    ) { }

 
  agregarValor(): void {
    if (!isNaN(parseFloat(this.nuevoValor as any)) && isFinite(this.nuevoValor as any)) {
      this.valor.push(parseFloat(this.nuevoValor as any));
      this.nuevoValor = undefined;
      } else {
        alert('Ingresa un valor numérico válido.');
      }
    }

  confirmar() {
    this.destino.valor = this.valor;
    this.destino.formato = this.formatoMoneda;
    this.servicio.setDestinoModificado(this.destino);
    this.modalCtrl.dismiss();
  }

  onWillDismiss(event: Event){
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    console.dir({ev})
    if( ev.detail.role === 'confirmar'){
      this.mensaje = `se guardo el destino`
    }
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const destinoId = params.get('id');
      
    });
  }

  cerrarModal(destino: any) {
    this.modalCtrl.dismiss({
      data: destino,
    });
  }
}


