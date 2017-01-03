import { Component, NgModule } from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { ProductMainComponent } from '../product/children/product-main/product-main.component';
import { SportifyComponent } from '../product/children/sportify/sportify.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToProduct(id:string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: ProductMainComponent },
  /*{ path: ':id', component: ByIdComponent },
  { path: 'interest', component: InterestComponent },*/
  { path: 'sportify', component: SportifyComponent },
];

@NgModule({
  declarations: [
    ProductMainComponent,
    SportifyComponent,
/*    InterestComponent,
    ByIdComponent*/
  ],
  exports: [
    ProductMainComponent,
    SportifyComponent,
    /*InterestComponent,
    ByIdComponent*/
  ],
  imports: [ RouterModule ]
})
export class ProductComponentModule {}
