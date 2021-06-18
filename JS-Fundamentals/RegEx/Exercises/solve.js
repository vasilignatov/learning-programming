/*let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

let pattern = /(?<word>is) simply/g;

let regex2 = new RegExp('\\d{4}-\\d{2}-\\d{2}', 'g')


let matched = pattern.exec(text);

while (matched != null) {
    console.log(matched);
    matched = pattern.exec(text);
}*/

let text = 'Peter: 123 Mark: 123 Peter: 123 Mark: 123 Peter: 123 Mark: 123';
let pattern = /\d{3}/g
let result = text.replace(pattern, '999');


let regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const arr = [...str.matchAll(regexp)];
console.log(arr[0]);


let regex = /[A-Z][a-z]+ [A-Z][a-z]+/g;