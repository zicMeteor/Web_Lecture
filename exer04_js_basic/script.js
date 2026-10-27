// let funNOname = function(){
//     alert('함수01')
//     alert('함수02')
// }

// // funNOname();

// alert(typeof(funNOname) + ' : ' + funNOname);

// function funName(){
//     alert('함수_01')
//     alert('함수_02')
// };

// alert(typeof(funName) + ' : ' + funName);

// function f(x) {
//     return x * x;
// };

// alert(f(3));


// let fun = function(){
//     alert('함수호출')
// }

// function callTenTimes(callback_func){
    
//     for(let i=0; i<10; i++){
//         callback_func()
//     }
// }

// callTenTimes(fun);

let person = {
    name : '유성준',
    eat : function (food){
        alert(this.name + '이 ' + food + '을/를 먹습니다')
    }
}

person.eat('밥')
