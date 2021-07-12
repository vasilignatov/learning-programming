function asyncDemo() {
    console.log('First');

    setTimeout(() => {
        console.log('incide 1');
    }, 100)

    setTimeout(() => {
        console.log('incide 2');
    }, 0)



    console.log('Last');
}
asyncDemo();