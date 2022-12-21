let year = parseInt(prompt("Nhập vào một năm bất kỳ"))
// if (year % 4==0){
//     if (year %100 ==0){
//         if(year % 400== 0){
//         console.log("Đây là năm nhuận")
//             }
//         else{
//         console.log("Đây là năm không nhuận")
//             }
// }
// else{
//     console.log("Đây là năm nhuận")

// }
// }
// else{
//     console.log("Đây là năm không nhuận")
// }

let isLeapYear = false;
let isDivisibleBy4 = year % 4==0;
if(isDivisibleBy4){
    let isDivisibleBy100 = year % 100 ==0;
    let isDivisibleBy400 = year % 400 ==0;
    if(isDivisibleBy100){
        if(isDivisibleBy400){
            isLeapYear = true;
        } 
    }
    else { isLeapYear= true;
    }
}
if(isLeapYear){
    alert(year+ "is a leap year");
}else{
    alert(year+ "is NOT a leap year");
}