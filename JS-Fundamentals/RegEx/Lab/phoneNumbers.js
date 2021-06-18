function solve([str]){
    let code = 359;
    let pattern = /\+359[ \-]\d-\d{3}-\d{4}\b/g;
    let pattern2 = new RegExp('\+359[ \-]\d-\d{3}-\d{4}\b', 'g');
     
    console.log(str.match(pattern));
}
solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ])