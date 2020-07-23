import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if(value.length > 10 ){ value = value.substring(0,limit) + "...";
  }
    return value;
  }

}
