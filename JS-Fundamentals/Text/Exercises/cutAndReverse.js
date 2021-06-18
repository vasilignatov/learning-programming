// function solve(str) {
//     let half = (str) => Math.floor(str.length / 2);
//     let left = str.slice(half(str), str.length)
//     let right = str.slice(0, half(str))

//     function reverse(str){
//         reversed = '';
//         for(let i = str.length - 1; i >= 0; i--){
//             reversed += str.charAt(i);
//         }
//         return reversed;
//     }
//     console.log(reverse(right));
//     console.log(reverse(left));
// }
// solve('tluciffiDsIsihTgnizamAoSsIsihT')
// solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')



function solve2(str){
    let right = str.slice(parseInt(str.length / 2), str.length).split('').reverse().join('')
    let left = str.slice(0, parseInt(str.length / 2)).split('').reverse().join('')
    console.log(`${left}\n${right}`);
}
solve2('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')