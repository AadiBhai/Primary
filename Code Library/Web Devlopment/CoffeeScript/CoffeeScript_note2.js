/* There are three ways to declare a variable in javascript
   keywords:
       var
       let
       const*/

       var a = 1  // var is globally scoped means it will give same value throughout the code and 'a' is a variable here
       {
           var a = 2
           console.log(a)
       }
       console.log(a)
       
       let b = 4 // let is block specified and we cannot assign same variable again using let unlike var
       // let b = 3 this is not allowed now as 'b' is already declared
       {
           let b = 3
           console.log(b)
       }
       console.log(b)
       
       const c = 6 // const cannot be change or assign again throughout the code but it is block specified that means we can assign same variable in different blocks using const
       {
           const c = 5
           console.log(c)
       }
       console.log(c)
       
       b = 7 // This is how we change the value of already assigned variable
       console.log(b)
       
       // Datatypes in js
       d = null         // object contains nothing
       e = 9.2          // Number represent any number
       f = "String"     // string
       g = Symbol("sym")// symbol an immutable and unique type
       h = true         // boolan
       i = BigInt(1646) // BigInt is for larger intiger numbers
       j = undefined    // undefined means variable is yet to define it may be define later
       k = //undefined can also be defined as this
       
           console.log(typeof d)
       console.log(typeof e)
       console.log(typeof f)
       console.log(typeof g)
       console.log(typeof h)
       console.log(typeof i)
       console.log(typeof j)
       console.log(typeof k)
