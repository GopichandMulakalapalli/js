// How to add or store data in the Promise object using Reject()

var promiseObject=new Promise(function(resolve,reject) {
            reject("Something went wrong");
});

console.log(promiseObject);