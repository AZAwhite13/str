let a = 'A';
console.log(a);

let b = 'A';
console.log(String.fromCharCode(b.charCodeAt(0) + 1));

let c = 'B';
console.log(c.charCodeAt(0));

let d = 'HELLO';
console.log(d.toLowerCase());

let e = 'hello';
console.log(e.toUpperCase());

let s1 = 'Hello World';
console.log(s1);

let s2 = 'JavaScript';
console.log(s2.length);

let s3 = 'Robokontest';
console.log(s3[0]);

let s4 = 'Robokontest';
console.log(s4[s4.length - 1]);

let s5 = 'hello';
console.log(s5.split('').reverse().join(''));

let s6 = 'hello world js';
let count6 = 0;

for (let i = 0; i < s6.length; i++) {
    if (s6[i] === ' ') {
        count6++;
    }
}

console.log(count6);

let s7 = 'javascript';
let count7 = 0;

for (let i = 0; i < s7.length; i++) {
    if ('aeiou'.includes(s7[i])) {
        count7++;
    }
}

console.log(count7);

let s8 = 'HeLLo JS';
let count8 = 0;

for (let i = 0; i < s8.length; i++) {
    if (s8[i] >= 'A' && s8[i] <= 'Z') {
        count8++;
    }
}

console.log(count8);

let s9 = 'Hello JS';
let count9 = 0;

for (let i = 0; i < s9.length; i++) {
    if (s9[i] >= 'a' && s9[i] <= 'z') {
        count9++;
    }
}

console.log(count9);

let s10 = 'abc12345';
let count10 = 0;

for (let i = 0; i < s10.length; i++) {
    if (s10[i] >= '0' && s10[i] <= '9') {
        count10++;
    }
}

console.log(count10);

let s11 = 'I love JavaScript';
console.log(s11.trim().split(/\s+/).length);

let s12 = 'level';

if (s12 === s12.split('').reverse().join('')) {
    console.log('YES');
} else {
    console.log('NO');
}