var data = [{
    brand:"Apple",
    model:"Iphone16",
    price:50000,
    rating:4.2,
},
{
    brand:"Apple",
    model:"Iphone14",
    price:60000,
    rating:4.5,
},
{
    brand:"Samsung",
    model:"samsung A32",
    price:40000,
    rating:4.6,
},
{
    brand:"Vivo",
    model:"Vivi Pro",
    price:35000,
    rating:4.1,
},
];

var newdata = data.filter(function(element,index){
      var isApple = element.brand =="Apple" || element.brand =="Vivo";
      return isApple;
});

console.log(newdata);