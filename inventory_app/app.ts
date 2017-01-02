import {Component, EventEmitter, NgModule} from "@angular/core";
import {NgModel} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
/**
 * Created by rocky on 2016/12/29.
 */
class Product {
  constructor(
    public sku:string,
    public name:string,
    public imageUrl:string,
    public department:string[],
    public price:number
  ){}
}

@Component({
  selector:'inventory-app',
  template:`
   <div class="inventory-app">
    <products-list
    [productList] = "products"
    (onProductSelected)="productWasSelected($event)">
    </products-list>
</div>  
  `
})



class InventoryApp {
  products:Product[];
  constructor(){
    this.products = [
      new Product(
      'MYSHOES',
      'Black running shoes',
      '/resurce/images/products/black-shoes.jpg',
      ['Men','Shoes','Running shoes'],
      2999.99),
      new Product(
        'Neatojacket',
        'blue jacket',
        '/resurce/images/products/black-jacket.jpg',
        ['Men','Accessories','Jacks & Vests'],
        299.99),
      new Product(
        'NICEHAT',
        'A NICE Black hat',
        '/resurce/images/products/black-hat.jpg',
        ['Men','Accessories','Hats'],
        29.99),


  ]


  }

  productWasSelected(product:Product):void{
    console.log("product clicked:",product);
  }



}

@Component({
  selector:'product-list',
  inputs:['productList'],
  outputs:['onProductSelected'],
  template:`
    <div class="ui items">
      <product-row
      *ngFor="let myProduct of productList"
      [product] = "myProduct"
      (click) = 'clicked(myProduct)'
      [class.selected] = "isSelected(myProduct)"
       ></product-row>
    </div>
  `
})

class ProductList{
  productList:Product[];

  onProductSelected:EventEmitter<Product>;

  currentProduct:Product;

  constructor(){
    this.onProductSelected = new EventEmitter();
  }

  clicked(product:Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku == this.currentProduct.sku;
  }
}

@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  template: `
  <product-image [product]="product"></product-image>
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <product-department [product]="product"></product-department>
    </div>
  </div>
  <price-display [price]="product.price"></price-display>
  `
})

class ProductRow {
  product: Product;
}

@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
class ProductImage {
  product: Product;
}


@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
class ProductDepartment {
  product: Product;
}

@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
class PriceDisplay {
  price: number;
}

@NgModule({
  declarations:[
    InventoryApp,
    ProductImage,
    ProductDepartment,
    PriceDisplay,
    ProductRow,
    ProductList
  ],
  imports:[BrowserModule],
  bootstrap:[InventoryApp]
})

class InventoryAppModule{}

