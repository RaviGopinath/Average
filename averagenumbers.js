let x , n ,  sum;

n = 6789;
sum = 0;

while(n>0){
    x = n % 10;
    sum = sum + x;
    n = n- x;
    n = n/10;
}
console.log(sum/4);