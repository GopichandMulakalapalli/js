// How to add or store data in the Promise object using Resolve()

var promiseObject=new Promise(function(resolve,reject) {
            resolve({
                name:'gopi',
                gender:"male",
            });
});

console.log(promiseObject);