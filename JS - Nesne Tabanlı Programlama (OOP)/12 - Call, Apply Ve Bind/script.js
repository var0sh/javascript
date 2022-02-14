// **Call, Apply, Bind

var welcome = function(a, b){
    console.log(`Welcome ` + this.name + '. Are you interested in ' + a + ' and ' + b + '.');
}

var furkan = {
    name: 'Furkan'
}
var taha = {
    name: 'Taha'
}

welcome.call(furkan, 'JS', 'C#');
welcome.call(taha, 'JS', 'C#');

welcome.apply(furkan, ['JS', 'C#']);
welcome.apply(taha, ['JS', 'C#']);

welcomeFurkan = welcome.bind(furkan);
welcomeFurkan('JS', 'C#')