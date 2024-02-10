displayAfter2s = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('hello after 2 s');
            resolve(); // Resolve the Promise after setTimeout completes
        }, 2000);
    });
};

displayAfter5s = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('hello after 5 s');
            resolve(); // Resolve the Promise after setTimeout completes
        }, 5000);
    });
};

async function funMain() {
    try{
        await displayAfter5s();
        await displayAfter2s();
    }catch{
        console.log('error')
    }
    
}

funMain();
