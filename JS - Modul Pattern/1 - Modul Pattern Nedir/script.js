// Birinci problem isimlendirme çakışması;

// // script.js'den gelen olabilir
// var name = 'furkan';

// // app.js'den gelen olabilir
// var name = 'taha'


// console.log(name);

//---------------------------------------------------------------------

// İkinci problem encapsulation(kapsülleme) problemi => Objeye(Counter) özel elemanları obje içerisine hapsedip dışarıdan ulaşılamamasını sağlamasına encapsulation olayı denir;

// var Counter = {
//     number : 0,
//     increment/*artış*/ : function(){
//         return ++this.number;
//     },
//     decrement/*azalma*/ : function(){
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10; // Counter objesinin içerisin de ki herhangi bir değere(number örneğin) dışarıdan ulaşılmamasını isteriz. O değişkene sadece içerisin de ki fonksiyonların etki etmesini isteriz bunu önlememiz lazım.
// console.log(Counter.decrement());

//---------------------------------------------------------------------

// IIFE (Immediately Invoked Function Expressions)
// İlk tanımladığımız immediately function içerisin de ki değeri sonradan tanımladığımız immediately function içerisin de ki değer  ezemez. Yani IIFE içerisin de tanımlanan elemanlar o fonksiyona özel ve parantezler dışarısın da ki başka bir değer bunu ezemez.

// (function(){
//     var name = 'Furkan';
//     console.log(name);
// })();

// (function(){
//     var name = 'Taha';
//     console.log(name);
// })();

//---------------------------------------------------------------------

// Private ve Public eleman tanımlama;
// Bu function'ın(IIFE) farklı bir module'den(farklı bir js dosyası) geldiğini var sayıyoruz. Ve bu module'e dışarıdan ulaşabilmek(dışarıya yani başka module'lere açmak için) için şu şekil de tanımlıyoruz;
// var Module = (function(){
//     // Private(özel) members => Yani biz IIFE parantezleri dışarısın da private elemanlara ulaşamayız fakat public elemanlara ulaşabilir. 

//     let number = 0;

//     let increment = function(){
//         return ++number;
//     }

//     return {
//         // Public(halka açık) members

//         increment

//     }
// })()

// // console.log(number); // Hata alırız çünkü IIFE içerisin de tanımlanmış olan number bir private elemandır.
// // console.log(increment()); // Gene ulaşamayız çünkü private bir eleman.
// console.log(Module.increment()); // Module'ü dışarıya açmamıza rağmen gene erişemedik çünkü private bir  eleman. Bu elemana ulaşabilmemiz için public elemanların içerisine almamız gerekiyor. Return'ün içerisine increment private elemanını atıyoruz ve tekrar ekrana yazdığımız da hata almıyoruz. Çünkü artık bir public eleman.

//---------------------------------------------------------------------

// Farklı kullanımı;

var Module = function(){
    var privateMethod = function(){

    }

    return {
        publicMethod1 : function(){

        },
        
        publicMethod2 : function(){

        }
    }
}();

Module.publicMethod1();
Module.publicMethod2(); // Module üzerinden de bu şekil de public elemanlara ulaşabiliriz.