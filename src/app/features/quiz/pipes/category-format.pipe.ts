import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFormat'
})
export class CategoryFormatPipe implements PipeTransform {

  transform(value: string): string {
    
    if (value.includes("_")) {
      const array = value.split("_");
      array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
      value = array.join(" ");
    } else {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value;
  }

}
