import { Component, OnInit } from '@angular/core';
import { PageTemplate } from 'src/app/shared/utils/page-template.util';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent extends PageTemplate implements OnInit {

  ngOnInit() {
    super.setTitle('Página Orders')
         .setDescription('Esta é uma página de teste')
         .setMetas([
            { name: 'keywords', content: 'home, home page, página inicial' },
            { name: 'og:title', content: this.title }
          ])
         .make()
  }
}
