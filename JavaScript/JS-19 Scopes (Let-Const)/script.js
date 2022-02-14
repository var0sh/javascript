// Global Scopes > global olarak tanımlanan değişkenlerin her yerde(döngüler, fonksiyonlar vb.) kullanılabilir olmasıdır
var name = 'Furkan';
function logName() {
      console.log(name);
}

if (true) {
      console.log(name);
}
logName();
console.log(name);

// Fonksiyonlar kendi scop'larını oluşturur ve biz bu değişkenleri fonksiyon dışında kullanamayız.
// Blocklar(if-else, while, for vb.) kendi scopelarını oluşturmaz ve biz blocklar içerisinde var kullanarak oluşturduğumuz değişkenleri block dışarısında da kullanabiliriz. Fakat blocklar içerisinde let ve const ile oluşturduğumuz değişkenler kendilerine scope oluşturur ve biz bu değişkenleri oluşturduğumuz block dışında başka bir yerde kullanamayız.


// Local Scopes