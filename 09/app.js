// const user = {
//     email: 'sa@es.me'
// };


// try {
//     // fct();
    
//     if (!user.name) {
//         throw new SyntaxError('user has no name');

//     }
    
// } catch(error) {
//     console.log(error);
// } finally {
//     console.log('finally');
// }

// console.log('continue...');


// Regex

let regex = /Hello/;
regex = /Hello/i;
// regex = /Hello/g;

// console.log(regex);
// console.log(regex.source);

// const result = regex.exec('Hello World');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// const result = regex.test('hello World');
// console.log(result);


// const str = 'Hello World';
// const result = str.match(regex);
// console.log(result);

// const str = 'Brad Hello World';
// const result = str.search(regex);
// console.log(result);

regex = /^h/i;
regex = /world$/i;
regex = /^world$/i;
regex = /^w.rld$/i;
regex = /w*rld/i;
regex = /w+rld/i;
regex = /gra?e?y\?/i;

regex = /gr[ae]y/i;
regex = /[^GF]ray/i;
regex = /[A-Z]ray/;
regex = /[a-z]ray/;
regex = /[A-Za-z]ray/;
regex = /[0-9]ray/;
regex = /[0-9][0-9]ray/;

regex = /Hel{1,}o/i;

regex = /^([0-9]x){3}$/i;

regex = /\w/;
regex = /\w+/;
regex = /\W/;
regex = /\d/;
regex = /\D/;
regex = /\s/;
regex = /\S/;
regex = /Hell\b/i;


regex = /x(?=y)/i;
regex = /x(?!y)/i;


const str = 'lksdfklsdnfsdxc';

const result = regex.exec(str);
console.log(result);

function regexTest(regex, str) {
    if(regex.test(str)) {
        console.log(`${str} matches ${regex.source}`);
    } else {
        console.log(`${str} does not match ${regex.source}`);
    }
}


regexTest(regex, str);