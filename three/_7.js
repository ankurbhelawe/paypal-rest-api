//closure

// function print(){
//     return function(a){
//         console.log('Hello '+a);
//     }
// }

// var fn= print()
// fn("Ankur");


//__________________________________________


function init(config){
    return{
        print: function(data){
            console.log(config+"-"+data)

        }
    }
}

var app = init("*");
app.print("Mark");