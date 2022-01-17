
 class Product
{
  constructor(name,id,model,price,yearomanf,country,image)
  {
    this.name = name;
    this.id= id;
    this.model = model;
    this.price = price;
    this.yom= yearomanf;
    this.cou=country;
    this.image=image;
  }
} 


var p1 = new Product("Laptop", "0012","Lenovo", 75000, 2019, "China","./laptop.jpg");
var p2 = new Product ("TV","0123","Sony",70000,2020,"Taiwan","tv.jpg");
var p3 = new Product ("Mobile","0223","Samsung",55000,2021,"India","mobile.jpg");
var p4 = new Product ("Headphones","0322"," Boat",1000,2017,"Korea","headphones.jpg");
var p5 = new Product ("Oven","0435","Glenn",45000,2018,"Germany","oven.jpg");
