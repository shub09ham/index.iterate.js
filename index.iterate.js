// Iterate from 1 to 100(using for loop and if else statrement)

let num = prompt('enter number :');
for(let i=1; i<=100; i++)
{
    if(i%3==o){
        console.log('divisible by 3')
    }
    else if(i%5==o && i!=num){
        console.log('divisible by 5')
    }
    else if(i == num){
        console.log(num + ': is your input number')
    }
    else{
        console.log(i);
    }
}
