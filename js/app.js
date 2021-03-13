'use strict';

let score = 0;

// Ask User About His Name By Prompt
let yourName;
function userName() {
  yourName = prompt( 'Whats ur name?' ).toUpperCase();
  alert( 'Hello ' + yourName + ' ♥..' );
}
userName();


// Ask User Yes Or No Questions

let q1;
function myAge() {
  q1 = prompt( 'my age is 22?' ).toUpperCase().toLowerCase();
  while ( q1 !== 'yes' && q1 !== 'no'
  && q1 !== 'y' && q1 !== 'n' ) {
    q1 = prompt( 'my age is 22?' ).toUpperCase().toLowerCase();}

  if ( q1 === 'yes' || q1 === 'y') {
    alert( 'right' );
    score++;
  }

  else if ( q1 === 'no' || q1 === 'n' ) {
    alert( 'wrong' );
  }

}
myAge();

let q2;
function favFood() {
  q2 = prompt( 'my fav food is pizza?' ).toUpperCase().toLowerCase();
  while ( q2 !== 'yes' &&
            q2 !== 'no' &&
            q2 !== 'y' &&
            q2 !== 'n' ) {
    q2 = prompt( 'my fav food is pizza?' ).toUpperCase().toLowerCase();

  }

  if ( q2 === 'yes' || q2 === 'y' ){
    alert( 'right' );
    score++;
  }

  else if ( q2 === 'no' || q2 === 'n' ){
    alert( 'wrong' );
  }

}

favFood();

let q3;
function favCity() {
  q3 = prompt( 'Do I love Tokyo?' ).toUpperCase().toLowerCase();
  while ( q3 !== 'yes' &&
            q3 !== 'no' &&
            q3 !== 'y' &&
            q3 !== 'n' ) {
    q3 = prompt( 'Do I love Tokyo?' ).toUpperCase().toLowerCase();

  }

  if ( q3 === 'yes' || q3 === 'y' ){
    alert( 'right' );
    score++;
  }

  else if ( q3 === 'no' || q3 === 'n' ){
    alert( 'wrong' );
  }

}

favCity();


// Guess My Number

let q4;
function myNum() {
  for ( let i = 0 ; i < 4 ; i++ ) {
    q4 = prompt ( 'guess my num' );
    if ( Number( q4 ) === 7 ) { alert ( 'right' ); score++; break;
    }
    else if ( q4 < 7 ) { alert( 'too low' );
    }
    else if ( q4 > 7 ) { alert( 'too high' );
    }
    else {alert( 'enter a num' );
    }
  }
}

myNum();



// Guess My Character
let q5;
let myArr = ['a', 'b', 'c', 'd'];
console.log( myArr );
function myChar() {
  for ( let i=0; i < 4 ; i++ ){
    q5 = prompt( 'Guess my Char' ).toUpperCase().toLowerCase();
    if ( q5 === myArr[0] ||
       q5 === myArr[1] ||
       q5 === myArr[2] ||
       q5 === myArr[3] ) {
      alert ( 'right' );
      console.log( q5 );
      score++;
      break;
    }

    else{alert( 'try again' );}
  }

}
myChar();



alert ( 'you got ' + score + ' marks.' );

