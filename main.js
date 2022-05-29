

function productObject(n,c,p,i,g,s){
    this.name = n;
    this.cat = c;
    this.price = p;
    this.image = i;
    this.gender = g;
    this.sold = s;
}

function storeProduct(event){
    event.preventDefault();

    let product = document.getElementById("showdata");

    let name = product.name.value;
    let cat = product.Category.value
    let price = product.price.value;
    let image = product.image.value;
    let gender = product.gender.value;
    let sold = product.sold.value;

    console.log(name,cat,price,image,gender,sold)

     

    let p1 = new productObject(name,cat,price,image,gender,sold);

    

    var data = JSON.parse(localStorage.getItem("product")) || [];

    

    data.push(p1);
  
    

    localStorage.setItem("product",JSON.stringify(data));

    console.log(data);

    
}