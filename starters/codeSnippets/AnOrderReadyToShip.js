this.order.id = 1;
this.order.orderDate = new Date();
this.order.shipVia = 1;
this.order.shipping = 10;
this.order.shipName = "Ororo Monroe";
this.order.shipAddress = "777 Placeholder Pl";
this.order.shipCity = "Birnin Zana";
this.order.shipRegion = "RG";
this.order.shipCountry = "Wakanda";
this.order.shipPostalCode = "5T4N-L33";
this.order.status = 0;
this.order.lines = [];
this.order.lines.push({});
this.order.lines[0].locationID = "02B1C";
this.order.lines[0].price = 30.00;
this.order.lines[0].productID = 55;
this.order.lines[0].quantity = 2;
this.order.lines[0].picked = true;
this.order.lines[0].product = {
  id: 1,
  name: "Oreos",
  imageUrl: "/assets/images/productImages/34.jpg",
};
this.order.lines.push({});
this.order.lines[1].locationID = "05A3A";
this.order.lines[1].price = 30.00;
this.order.lines[1].productID = 45;
this.order.lines[1].quantity = 7;
this.order.lines[1].picked = false;
this.order.lines[1].product = {
  id: 2,
  name: "Peanuts",
  imageUrl: "/assets/images/productImages/67.jpg",
}