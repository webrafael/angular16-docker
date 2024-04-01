import { Component, OnInit } from '@angular/core';
import { PageTemplate } from 'src/app/shared/utils/page-template.util';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent extends PageTemplate implements OnInit {

  ngOnInit() {
    super.setTitle('Página Customers')
         .setDescription('Esta é uma página de teste')
         .setMetas([
            { name: 'keywords', content: 'home, home page, página inicial' },
          ])
         .make()
  }
}
