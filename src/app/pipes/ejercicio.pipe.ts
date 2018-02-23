import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ejercicio'
})
export class EjercicioPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    if(activar == true){
      console.log("true");
      return value;
    }else{
      var r = "";
      for(var n=0; n<value.length; n++){
        r=r+"*";
      }
      return r;
    }
  }

}
