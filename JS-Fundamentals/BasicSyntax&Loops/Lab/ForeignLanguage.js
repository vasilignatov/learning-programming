function language(arg){
    let language = '';
    switch (arg){
       case 'England':
       case 'USA':
          language = 'English';
          break;
       case 'Mexico':
       case 'Argentina':
       case 'Spain':
          language = 'Spanish';
          break;
       default: 
          language = 'unknown';
          break;
    }
    console.log(language);
 }