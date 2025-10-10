var data = [10,20,30,40,50,60];

var newArray = data.map(function(element,index){
    var result = element + 10;

    return result;
});

console.log(newArray);