function solve(input){
    let favouriteBook = input[0];
    let index = 1;
    let checkedBooks = 0;
    let command = input[index++];

    while (index <= input.length) {
        checkedBooks++;

        if (command === favouriteBook){
            checkedBooks--;
            console.log(`You checked ${checkedBooks} books and found it.`);
        } else if (command === 'No More Books'){
            --checkedBooks;
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBooks} books.`);
        }

        command = input[index++]; 
    }
}
solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

