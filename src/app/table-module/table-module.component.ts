import { SenacCoin } from './../model/senacCoin';
import { Component, OnInit } from '@angular/core';
import { SenacCoinService } from '../services/senac-coin.service';

@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.scss'],
})
export class TableModuleComponent implements OnInit {
  senacCoinsMock: SenacCoin[] = [];

  senacCoins: SenacCoin[] = [];

  constructor(private _senacCoinService: SenacCoinService) {}

  ngOnInit(): void {
    //mock
    this.senacCoinsMock = [
      {
        id: 1,
        data: '12/02/2021',
        destino: 'banco de dados',
        valor: '20',
      },
      {
        id: 2,
        data: '12/02/2021',
        destino: 'frontend',
        valor: '10',
      },
      {
        id: 3,
        data: '12/02/2021',
        destino: 'backend',
        valor: '50',
      },
      {
        id: 4,
        data: '12/02/2021',
        destino: 'banco de dados',
        valor: '80',
      },
    ];

    //api
    this._senacCoinService.getAllSenacCoin().subscribe({
      next: (value) => {
        this.senacCoins = value;
      },
    });
  }
}
