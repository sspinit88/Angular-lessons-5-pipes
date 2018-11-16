import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'carFilter',
    pure: true
})
// pure: false - увеличивает количество вызовов пайпа, позволяет динамически обновлять зависимый список. По умолчанию true.


export class CarFilterPipe implements PipeTransform {
    // пайп применяем к массиву -> *ngFor='let car of cars | carFilter:searchCar; let i = index'>
    transform(carList, searchStr: string, searchItem: string) {
        console.log('Filter pipe started!');

        if (carList.length === 0 || searchStr === '') {
            return carList;
        }

        // поиск по полному совпадению
        // return carList.filter((car) => car.name === searchStr);

        // поиск по символьному совпадению
        // return carList.filter((car) => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);

        // кастомизация
        return carList.filter((car) => car[searchItem].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }

}
