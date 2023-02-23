import { Component,OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productosList:any[]=[];
  constructor(private productosService:ProductosService){}

  
  ngOnInit(): void {
    this.productosService.getProductos()
    .subscribe((response:any[])=> this.productosList=response);
    
  }

}
