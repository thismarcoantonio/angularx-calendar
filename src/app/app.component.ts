import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <ngx-calendar [removeAfterDrop]="true" [eventList]="eventList" [months]="months" [days]="days"></ngx-calendar>
  `,
  styles: []
})
export class AppComponent {
  eventList = {
    123: 'Luisa',
    1234: 'Lucas',
    12345: 'Gilmar'
  }

  months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  days = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sáb'
  ]
}
