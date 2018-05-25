import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
  @Input()
  orders;
  
  constructor() { }

  ngOnInit() {
    this.orders = [
      {
        "customerID": 1056,
        "orderDate": new Date(),
        "orderID": 10999,
        "shipAddress": "Mehrheimerstr. 369",
        "shipCity": "Köln",
        "shipCountry": "Germany",
        "shipName": "Ottilies Käseladen",
        "shipPostalCode": 50739,
        "shipRegion": "",
        "shipVia": 2,
        "tax": 0,
        "shipping": 10,
        "lines": [
          {
            "productID": 41,
            "unitPrice": 9.65,
            "quantity": 20
          },
          {
            "productID": 51,
            "unitPrice": 53,
            "quantity": 15
          },
          {
            "productID": 77,
            "unitPrice": 13,
            "quantity": 21
          }
        ],
        "status": 1
      },
      {
        "customerID": 1065,
        "orderDate": new Date(),
        "orderID": 11000,
        "shipAddress": "2817 Milton Dr.",
        "shipCity": "Albuquerque",
        "shipCountry": "USA",
        "shipName": "Rattlesnake Canyon Grocery",
        "shipPostalCode": 87110,
        "shipRegion": "NM",
        "shipVia": 3,
        "tax": 0,
        "shipping": 10,
        "lines": [
          {
            "productID": 4,
            "unitPrice": 22,
            "quantity": 25
          },
          {
            "productID": 24,
            "unitPrice": 4.5,
            "quantity": 30
          },
          {
            "productID": 77,
            "unitPrice": 13,
            "quantity": 30
          }
        ],
        "status": 1
      },
      {
        "customerID": 1024,
        "orderDate": new Date(),
        "orderID": 11001,
        "shipAddress": "Åkergatan 24",
        "shipCity": "Bräcke",
        "shipCountry": "Sweden",
        "shipName": "Folk och fä HB",
        "shipPostalCode": "S-844 67",
        "shipRegion": "",
        "shipVia": 2,
        "tax": 0,
        "shipping": 10,
        "lines": [
          {
            "productID": 7,
            "unitPrice": 30,
            "quantity": 60
          },
          {
            "productID": 22,
            "unitPrice": 21,
            "quantity": 25
          },
          {
            "productID": 46,
            "unitPrice": 12,
            "quantity": 25
          },
          {
            "productID": 55,
            "unitPrice": 24,
            "quantity": 6
          }
        ],
        "status": 1
      },
      {
        "customerID": 1071,
        "orderDate": new Date(),
        "orderID": 11002,
        "shipAddress": "187 Suffolk Ln.",
        "shipCity": "Boise",
        "shipCountry": "USA",
        "shipName": "Save-a-lot Markets",
        "shipPostalCode": 83720,
        "shipRegion": "ID",
        "shipVia": 1,
        "tax": 0,
        "shipping": 10,
        "lines": [
          {
            "productID": 13,
            "unitPrice": 6,
            "quantity": 56
          },
          {
            "productID": 35,
            "unitPrice": 18,
            "quantity": 15
          },
          {
            "productID": 42,
            "unitPrice": 14,
            "quantity": 24
          },
          {
            "productID": 55,
            "unitPrice": 24,
            "quantity": 40
          }
        ],
        "status": 1
      }
    
    ]
    }

}
