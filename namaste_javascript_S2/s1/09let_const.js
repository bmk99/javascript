
// let a;
// console.log(a)
// a = 23 // reassigned
// console.log(a)


// var b = 40
// let d =70
// console.log(this.b) 
// console.log(this.d) // undefined..//through this we can access only global .. not loacl,block,script..


// //check1
// console.log(e) //// error referece error : cannot access e before intilization
// let e = 23 


// // check 2
// console.log('redeclaration...')
// let f = 34
// console.log(f) 
// let f =99 // error SyntaxError: Identifier 'f' has already been declared (a
// console.log(f)


// -------const........usage rules......
// const j = 34
// console.log(j)


// console.log(c)
// const c; //error SyntaxError: Missing initializer in const declaration 

// check
// const s = 32
// console.log(s)
// s =23 //error TypeError: Assignment to constant variable
// console.log(s)


// // check 
// console.log('redeclaring const')
// const k= 23
// console.log(k)
// const k =2323 // error SyntaxError: Identifier 'f' has already been declared 
// console.log(k)


// ------------

// --defining the block scope and lexical scope

// // true for single statements ...
// if(true) console.log('single statement ');

// if(true) {console.log("multiple 1"); console.log('multiple 2')}
// // block scope is combining multiple statements {..statements }
// if we have more than one statments and we insisted to use that all combined statements.. at tha ttime it will be useful.

// {
//     var a1 = 77
//     let a2= 88
//     const a3 = 99 
//     console.log(a1)
//     console.log(a2)
//     console.log(a3)

// }
// console.log(a1);
// console.log(a2); // it will stop the programming here ... a2 was not in global... not defined. // error : ReferenceError: a2 is not defined
// console.log(a3)


// ----shadowing 
// //  shadowing giving the same identifier name in with same key word in block and normal 
// // --  shadowing with var ... 

// var ab1 = 80
// console.log({ab1})
// {
//     var ab1 =90
//     let ab2 = 100
//     const ab3 = 200
//     console.group('inside block')
//     console.log({ab1})
//     console.log({ab2})
//     console.log({ab3})
//     console.groupEnd()
// }
// console.log({ab1})


// --  shadowing with let and const
// // shadowing with let and const 
// let ac1 = 100 
// const ac2 = 200
// console.group('before block')
// console.log({ac1})
// console.log({ac2})
// console.groupEnd()
// {
//     let ac1 = 150
//     const ac2 =  250
//     var ac3 = 350
//     console.group("inside block")
//     console.log({ac1})
//     console.log({ac2})
//     console.log({ac3})
//     console.groupEnd()
// }
// console.group('after block')
// console.log({ac1})
// console.log({ac2})
// console.log({ac3})
// console.groupEnd()

//  --illegal shadowing.. 
// // error SyntaxError: Identifier 'a' has already been declared 
// let a = 40 
// {
//     var a =80
// }

//  --legal shadwoing 
// let ad1 = 300
// console.log({ad1})
// {
//     var ad3 =900
// }
// function greet() {
//     var ad1 = 500  
//     var ad2 =6000
//     console.log({ad4})
//     console.log({ad1})
//     console.log({ad2})
//     console.log({ad3})
//     {
//         var ad4 = 8000
//         {
//             var ad5 =90000
//         }
//     }
//     console.log({ad5})
//     console.log({ad4})
// }
// greet()

// console.log({ad1})
// // console.log({ad2}) //error ReferenceError: ad2 is not defined
// console.log(this.ad1)
// console.log(this.ad2)
// console.log({ad3})
// console.log({ad4})//error ReferenceError: ad4 is not defined


// --legal shadowing 
// let ae1 = 100
// let ae2 =200
// let ae3 = 300
// {
//     let ae1 = 200
//     {
//         let ae1= 300
//         console.log({ae1})
//         console.log({ae2})
//     }
//     console.log({ae1})
//     console.log({ae3})

// }
// console.log({ae1})



//  -- global ,var error ,confuse of var

// function a(){
//     var af1 = 3000
// }
// console.log({af1}) // error ReferenceError: af1 is not defined

// const a=() =>{
//     var af2 = 45
//     let af3 =7888
    
// }
// a()
// console.log((af2)) //error  ReferenceError: af1 is not defined



let ag6 =9883  // allocating in the script
{
    let ag1 =345 // allocating in the block
    var ag4 = 9923 // allocating in the global
}
function afun(){
    var ag2 =8999 // allocating in the local -afun
    let ag3 = 9232 // allocating in the local -afun
    console.log('hell')
    {
        let ag18 =2323 // allocating in the block - afun
    }
    function cfun(){
        let ag20 = 23 // allocating in this  local - afun - cfun
        if(true){
            let a21 =322 // allocatign in this block  -a fun - cfun 
        }
    }
    cfun()
}
afun() // allocating in the global
const bfun= ()=> {
    let ag7 = 2332   // allocating in local - bfun 
    const ag8 = 2232  // allocating in loal - bfun 
    var ag9 = 23221 // allocating in local  - bfun
    {
        var ag10 = 989823 // allocating in local  -  bfun
        let ag11 = 23423 // allocating in block - bfun 
        {
            var ag12 = 23423 // allocatin in local - bfun 
        }
    }
}
bfun()
if(true){
    var a19 =234 // allocatin in global 
    let ag13 =325 // allocating in block
}
for(let ag14 =0;ag14<3;ag14++){ // ag14 allocating in  block .
    console.log({ag14}) // .
}
// console.log({ag14})

for(var ag22=0;ag22<3;ag22++){  // ag22 allocating in global
    console.log({ag22})
    if(true){
        var ag23 =2323  // allocating in global
        if(true){
            let a27 =23423 // allocating in block 
            var ag24 =543 // alocating in global
            for(var ag25 =0;ag25<3;ag25++){
                console.log({ag25})
            }
            function kk(){ // kk function is in block 
                var ag26 =23423 // allocating in local - kk
            }
            kk()
        }
    }
}
console.log({ag22})
console.log({ag23})
console.log({ag25})
// console.log({ag26}) // error  regerence not defined..

// at the starting 
// for loop,while loop , do while , if and else if , else ,{}-> all are formed with block scope only 
// fucntions , arrow function -> all are in functions that represents local ...

// if var present in block it will go to the nearest global... 
// if function present in block it will be in block 
// if var present inside the function of a block then it is local 
// if var present in nested block inside the block then it will be global ...
//  block scope only active when it enters. 
// local scope only active when it enters.
// if let and const present inside the block then they stays in the block scope they would'nt go any where
