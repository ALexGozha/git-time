
function time(){

let now = new Date()

let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)




let untilTomorrow = (tomorrow - now)/1000

let time = Math.round(untilTomorrow)




hours = Math.floor(time / 3600);
time %= 3600;
minutes = Math.floor(time / 60);
seconds = time % 60;


let result = hours+':'+minutes+':'+seconds
console.log(result)
}


setInterval(time,1000)