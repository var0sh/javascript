function Question(hobby){

    switch(hobby){

        case 'car':
            return function(name){
                console.log(name + ' araban var mı?');
            }
            break;
        
        case 'book':
            return function(name){
                console.log(name + ' favori kitabın nedir?');
            }
            break;
        
        case 'software':
            return function(name, type){
                console.log(name + ' ' + type +' ile ilgileniyor musun?');
            }
            break;

        default:
            return function(name){
                console.log(name + ' nasılsın?');
            }
    }
}

var carQuestion = Question('car');
carQuestion('Furkan');

var softwareQuestion = Question('software');
softwareQuestion('Furkan', 'C#');

var bookQuestion = Question('book');
bookQuestion('Furkan');