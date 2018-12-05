//* /prototype function
//function Person(id,name)
//{
 //   this.id=id;
  //  this.name=name;
//}
//var person1= new Person(101, "Amit");
//var person2= new Person(101, "Abhi");

//Person.prototype.surname="Bacchan";
//console.log(Person.person1.surname);
//console.log(person2.surname);

// */

function Person(id,name)
{
     this.id=id;
     this.name=name;
     Person.prototype.print=function()
     {
         console.log(this.id,this.name,this.surname)
     }
    }
    var person1= new Person(101, "Amit");
    var person2= new Person(101, "Abhi");
    Person.prototype.surname="Bacchan";
    person1.print();