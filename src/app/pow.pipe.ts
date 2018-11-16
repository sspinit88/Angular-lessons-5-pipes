import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appPow'
})

export class PowPipe implements PipeTransform {
    // метод всегда называется transform, принимает значение
    // Должен всегда делать возврат
    // Заносим в
    //  @NgModule({
    //         declarations: [
    transform(value: any, powNum: number = 1, symb: string) {
        return symb + Math.pow(value, powNum);

    }
}