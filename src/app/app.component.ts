import {Component} from '@angular/core';

// работа с пайпами


@Component({
    selector: 'app-root',
    template: `
        <div class="coll-xs-8  coll-xs-offset-2" style="padding: 20px">
            <h2>Пайпы. Работа со строкой</h2>
            <p>
                {{name}}
            </p>
            // lowercase - нижний регистр, применяется только к строковым
            <p>
                {{name | lowercase}}
            </p>
            // uppercase - верхний регистр, применяется только к строковым
            <p>
                {{name | uppercase}}
            </p>
            // обрезает строку
            // пайпы можно использовать последовательно
            <p>
                {{name | slice:0:3 | lowercase}}
            </p>
            <hr>
            <h2>Пайпы. Работа с числом</h2>
            // number - если не передавать параметры, то обрезает дробную часть до 3-го знака
            <p>
                {{pi | number}}
            </p>
            // в number параметры передаются после ':', параметры - это строка. 1-й парам - кол цифр перед запятой, 2-й - кол знаков после
            запятой в диапазоне
            <p>
                {{pi | number: '1.2-5'}}
            </p>
            <p>
                {{pi | number: '2.2-5'}}
            </p>
            // currency - переводит число в денежную валюту,
            <p>
                {{money | currency: 'EUR' : false}}
            </p>
            <hr>
            <h2>Пайпы. Рaбота с датой</h2>
            <p>
                {{date}}
            </p>
            // date
            <p>
                {{date | date}}
            </p>
            // date:'fullDate'
            <p>
                {{date | date:'fullDate'}}
            </p>
            // date:'shortDate'
            <p>
                {{date | date:'shortDate'}}
            </p>
            // date:'shortTime'
            <p>
                {{date | date:'shortTime'}}
            </p>
            <hr>
            <h2>Преобразование в %</h2>
            <p>
                {{amount}}
            </p>
            // percent - работает по аналогии с number
            <p>
                {{amount | percent}}
            </p>
            <hr>
            <h2>Работа с Объектом</h2>
            <p>
                {{object}}
            </p>
            // json - приводит объект к строке
            <pre>
                {{object | json}}
            </pre>
            <hr>
            <h2>Свой пайп, работающий с числом</h2>
            <p>
                {{num}}
            </p>
            <p>
                {{num | appPow: 5: '='}}
            </p>
            <hr>
            <h2>
                Cоздание динамического фильтра
            </h2>
            <input type="text"
                   [(ngModel)]="inputText"
                   class="form-control"
                   style="margin-bottom: 20px">
            <p>Введите название автомобиля:</p>
            <input type="text"
                   [(ngModel)]="nameCar"
                   class="form-control"
                   style="margin-bottom: 20px">
            <p>Введите год выпуска автомобиля:</p>
            <input type="text"
                   [(ngModel)]="yearCar"
                   class="form-control"
                   style="margin-bottom: 20px">
            <button class="btn btn-primary" (click)="addCar(nameCar, yearCar)">Добавить!</button>
            <hr>
            <span>Введено:</span>
            <p>{{inputText}}</p>
            <hr>
            <ul class="list-group">
                <li class="list-group-item"
                    *ngFor="let car of cars | carFilter:inputText:'name'; let i = index">
                    {{i + 1}} - <b>{{car.name}}</b> - <i>Модель {{car.year}} года выпуска</i>
                </li>
            </ul>
            <hr>
        </div>
    `
})
export class AppComponent {
    num = 2;
    name = 'WebDev';
    pi = Math.PI;
    money = 350;
    date = new Date();
    amount = 0.45;
    object = {
        foo: 'bar',
        baz: 'qux',
        nested:
            {
                xyz: 3,
                numbers: [1, 2, 3]
            }
    };
    // создание динамического фильтра
    inputText = '';
    cars = [
        {name: 'Ford', year: '1970'},
        {name: 'Mazda', year: '1980'},
        {name: 'Audi', year: '1965'},
        {name: 'BMW', year: '1937'},
        {name: 'Mercedes', year: '1970'},
        {name: 'ZAZ', year: '1957'},
    ];

    nameCar = '';
    yearCar = '';

    addCar(newCarname: HTMLInputElement, newCarYear: HTMLInputElement) {
        console.log(typeof newCarname + ' ' + newCarname);

        if (newCarname === '' || newCarYear === '') {
            return null;
        }

        this.cars.push(
            {name: newCarname, year: newCarYear}
        );
        this.nameCar = '';
        this.yearCar = '';
    }


}
