'use strict'

const ourWords = 'We are frugal.We value our money, time & resources and ensure they are deployed in the most productive way.';

function impose(owner) {
    console.log('We are the OWNERS');
    for (let i = 1; i <= 100; i++) {
        console.log(owner);
    }
}
impose(ourWords);
