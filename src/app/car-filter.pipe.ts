import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {
    // пайп применяем к массиву -> *ngFor='let car of cars | carFilter:searchCar; let i = index'>
    transform(carList, searchStr: string) {
        if (carList.length === 0 || searchStr === '') {
            return carList;
        }

        return carList.filter((car) => car.name === searchStr);

    }

}
