first = () => {
    setTimeout(() => {
        console.log(`first`);
    }, 1000)
    second();
}

second = () => {
    console.log(`second`);
    third();
}

third = () => {
    console.log(`third`);
}

first();