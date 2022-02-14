// ReferenceError
// TypeError
// SyntaxError
// URIError

// Bu error objelerinin temeli yani prototype'ları Error'dur.
var user = {
    name: 'Furkan Akçatepe'
}

try {
    // console.log(myFunction());
    console.log(user.name);
    if (!user.email) {
        throw new SyntaxError('User has no email.')
    }
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
    console.log(error instanceof TypeError);
} finally{
    console.log('finally block');
}