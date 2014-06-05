function findFirstEvenNumber(e){

if(e % 15 == 0){
return "fizzbuzz"
}else if(e % 5 == 0){
return "buzz"
}else if(e % 3 == 0){
return "fizz"
}else{
return e
}
}
