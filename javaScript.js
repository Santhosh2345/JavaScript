console.log("Hello New World");
function add(num){
    var temp = num;
    var sum =0;
    while(temp>0){
        var a = temp%10;
        sum += (a*a*a);
        temp=temp/10;  
        temp = Math.floor(temp);
    }
    if(sum===num){
    console.log("Given Number is a Amstrong");
    }
    if(sum!==num){
        console.log("Given Number is a Not an Amstrong");
        }
}

add(150)