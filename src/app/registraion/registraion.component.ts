import { Component, OnInit } from '@angular/core';
import { AllProducts } from '../allProducts';
import {Products} from '../products'

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.scss']
})
export class RegistraionComponent implements OnInit {

  registration = AllProducts;
  selectedProduct : Products;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(products: Products):void{
    this.selectedProduct = products;
  }

}
