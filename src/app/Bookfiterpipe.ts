import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'titlefilter'
})
export class TitleFilterPipe implements PipeTransform {
    transform(books: {title:string}[], title:string): any {

        return (title && title !== 'all')
            ? books.filter(_ => _.title === title)
            : books;
    }
}