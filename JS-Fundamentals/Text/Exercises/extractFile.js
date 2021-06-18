function solve(path){
    path = path.split('\\')
    let file = path.pop();   
    let extension = file.split('.');
    let fileExts = extension.pop();
    console.log(`File name: ${extension.join('.')}\nFile extension: ${fileExts}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')


function solve2(path){
    let index = path.lastIndexOf('.');
    let extension = path.substring(index + 1);
    let file = path.slice(path.lastIndexOf('\\') + 1, index);
    console.log(`File name: ${file}\nFile extension: ${extension}`);
}
solve2('C:\\Internal\\training-internal\\Template.pptx')