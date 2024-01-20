export interface destinoInform{
    xid: string
    name: string    
}

export interface destinosWS{
    type:string
    id:string
    properties: destinoInform
}

export interface resultWS{   
    type: String
    features: destinosWS[]
}

export interface DestinodireccionWS{
    city: string
    state:string
    country: string
}

export interface destinoImagenWS{
    source: string
}

export interface destinodetailWS{
    xid:string
    name: string
    address: DestinodireccionWS
    preview: destinoImagenWS
}
export interface destino{
    xid: number;
    nombre: string;
    pais: string;
    imagen: string;
    montoVuelo: number;
 }