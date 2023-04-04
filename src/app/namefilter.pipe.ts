import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(books: {title:string}[],title1:string): any {
    return (title1 && title1!=='all')
    ?books.filter(_=>_.title === title1)
    :books;
  }

}
