function paperRequirements(noOfCopy1, noOfCopy2, noOfCopy3){

   book1 = noOfCopy1*100;
   book2 = noOfCopy2*200;
   book3 = noOfCopy3*300;

   totalPage=book1+book2+book3;

   return("Total page: "+ totalPage);
}

console.log(paperRequirements(2,3,4));
