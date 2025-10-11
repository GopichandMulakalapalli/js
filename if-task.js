var arr = [
    {
        name:"S1",
        gender:"Male",
    },
    {
        name:"S2",
        gender:"Female",
    },
    {
        name:"S3",
        gender:"Male",
    },
    {
        name:"S4",
        gender:"Male",
    },
];


function printMaleUsers() {
arr.forEach(function(user){
     if(user.gender=="Male"){
        console.log(user);
     }
});
}

printMaleUsers();