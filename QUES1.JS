
function Person(FNAME,LNAME,AGE,SKILLS,ADDRESS,DOB,MARRIED,PROFESSION)
{
     this.FNAME=FNAME;
     this.LNAME=LNAME;
     this.AGE=AGE;
     this.SKILLS=SKILLS;
     this.ADDRESS=ADDRESS;
     this.DOB=DOB;
     this.MARRIED=MARRIED;
     this.PROFESSION=PROFESSION;
     this.print=function()
     {
         console.log(this.FNAME, this.ADDRESS, this.DOB);
     }
    }
    var person1= new Person("Amitabh","Bacchan",60,["Acting","Dancing"],{city:"Mumbai",pincode: 111111} ,new Date('1996-08-21'),
    true,"Actor");

    person1.print();

