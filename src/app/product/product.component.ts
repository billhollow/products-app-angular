import { Component } from '@angular/core';
import { Product } from './entities/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  displayedColumns: string[] = ['id','handle','title','description','sku','grams','stock','price','comparePrice','barcode'];

  products: Product[] = [
    {
      "id": 70,
      "handle": "cola-glitter-23-grs",
      "title": "COLA GLITTER 23 GRS",
      "description": "<p><strong>Características:</strong></p>\r\n<ul>\r\n<li>Para hacer pegaduras, contornos, decorar y pintar sobre papel, papel cartón y cartulina.</li>\r\n<li>Posee un brillo intenso con glitter.</li>\r\n<li>Lavable (no mancha las ropas).</li>\r\n</ul>",
      "sku": "60870131001",
      "grams": 100,
      "stock": 1013,
      "price": 1161,
      "comparePrice": 1290,
      "barcode": "7891153003689"
    },
    {
      "id": 71,
      "handle": "masa-de-modelar-soft-150-grs",
      "title": "MASA DE MODELAR SOFT 150 GRS",
      "description": "<p><strong>Características:</strong></p>\r\n<ul>\r\n<li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li>\r\n<li>Para uso escolar o entretenimiento.</li>\r\n<li>No se pega a las manos.</li>\r\n</ul>",
      "sku": "60870120101",
      "grams": 100,
      "stock": 359,
      "price": 1611,
      "comparePrice": 1790,
      "barcode": "7891153073002"
    }
  ]

}
