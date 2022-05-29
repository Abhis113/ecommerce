// retrieve data from local storage 





function showProduct (){
    
    var data = JSON.parse(localStorage.getItem("product")) || [];
    console.log(data);
     data.forEach(function(el){
         let main_div = document.getElementById("my_div");
        //show  image 
   
         let img = document.createElement("img");
         img.src = el.image;
   
         let name = document.createElement("h4");
         name.innerHTML = el.name;
         
         
         let price= document.createElement("h4");
         price.innerHTML = el.price;
   
         let cat = document.createElement("h4");
         cat.innerHTML = el.cat;
         
         let gender = document.createElement("h4");
         gender.innerHTML = el.gender;
         
         let sold = document.createElement("h4");
         sold.innerText = el.sold
   
         main_div.append(img,name,price,cat,gender,sold);
   
     })
   }
   
   showProduct();
   
   