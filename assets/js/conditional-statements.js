const number = 0;
if(number> 0){
    console.log('The number is greater than 0')
}else if(number <0){
    console.log('The number is not greater than 0')
}else{
    console.log('The number is 0')
}

const day = 7;
let dayName;

switch(day){
    case 1:
        dayName= 'Monday';
        break;
        case 2:
        dayName= 'Tuesday';
        break;
        case 3:
        dayName= 'Wednesday';
        break;
        case 4:
        dayName= 'Thursday';
        break;
        case 5:
        dayName= 'Friday';
        break;
        case 6:
        dayName= 'Saturday';
        break;
        case 7:
        dayName= 'Sunday';
        break;
}
console.log('The day is:', dayName)

const numbers =[1,2,3,4,5,6,7,8,9];
let sum =0;

for(let i= 0;i < numbers.length; i++){
    console.log(i);
    sum += numbers[i];
}
console.log('Sum of the array elements:',sum);
