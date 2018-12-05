var Amitabh={name:"Amitabh",surname:"Bacchan",age:76,skills:"acting",address:{city:"Mumbai",pincode:111111},
DOB:new Date('1942-08-21'),MARRIED:true,PROFESSION:"Actor"};
var Abhishek=Object.create(Amitabh);
Abhishek.name="Abhishek";
Abhishek.DOB=1976-02-05 ;
Abhishek.age=(42);
var Aaradhya=Object.create(Abhishek);
Aaradhya.name="Abhishek";
Aaradhya.DOB=2011-02-05 ;
Aaradhya.age=(7);
console.log(Aaradhya.address.city);
