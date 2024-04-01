import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './views/templates/main-template/main-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) }
    ],
  },
  { path: 'customers',
    component: MainTemplateComponent,
    children: [
      { path: '', loadChildren: () => import('./views/pages/customers/customers.module').then(m => m.CustomersModule) }
    ]
  },
  { path: 'orders',
    component: MainTemplateComponent,
    children: [
      { path: '', loadChildren: () => import('./views/pages/orders/orders.module').then(m => m.OrdersModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
