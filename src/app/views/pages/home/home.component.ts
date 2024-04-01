import { Component, OnInit } from '@angular/core';
import { PageTemplate } from './../../../shared/utils/page-template.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends PageTemplate implements OnInit {

  ngOnInit() {
    super.setTitle('Página Home')
         .setDescription('Esta é uma página de teste')
         .setMetas([
            { name: 'keywords', content: 'home, home page, página inicial' },
          ])
         .make()
  }
}
