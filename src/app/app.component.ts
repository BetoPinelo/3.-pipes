import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = "Humberto";

  nombre2:string = "huMBERto piNElo rivERa";

  arreglo = [0,1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  po = 0.234;

  salario = 2399.5;

  heroe = {
    nombre:"Logan",
    alias:"Wolwerine",
    edad:499,
    direccion:{
      numero:1407,
      colonia: "raymalkin Lane en Salem Center",
      cuidad: "Salem"
    }
  };

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Llego la Info!'), 3500);
  });

  fecha = new Date();

  video = "qatmJtIJAPw";

  activar:boolean= true;

  ejercicio(){
    if(this.activar==true){
      this.activar=false;
    }else{
      this.activar=true;
    }
  }

}
