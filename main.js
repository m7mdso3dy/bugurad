
/*
header animation
*/
const headerAnimationField = document.querySelector('.header-animation-field');
const headertxt = 'Always One-Step Ahead!';
const headerSpeed = 65;
let headerExcuted = false;
let headeri = 0;
const headerTypewriter = () => {
    if (headeri < headertxt.length) {
    headerAnimationField.innerHTML += headertxt.charAt(headeri);
    headeri++;
    setTimeout(headerTypewriter, headerSpeed);
  }
}
window.addEventListener('load', () => {
    if (window.scrollY - headerAnimationField.offsetTop >= -500) {
         if (!headerExcuted) {
             headerExcuted = true;
             headerTypewriter();
         }
     }
 document.addEventListener('scroll', () => {
     if (window.scrollY - headerAnimationField.offsetTop >= -500) {
         if (!headerExcuted) {
             headerExcuted = true;
             headerTypewriter();
         }
     }  
 });
})
// ///*about us animation*/
// //let i = 0;
// const txt = ['Trusted Security Vendor!','this second paragraph','this fourth paragraph']; /* The text */
// const speed = 1000   ; /* The speed/duration of the effect in milliseconds */
// const animationField = document.querySelector(".text-animation");
// let excuted = false;
// let once = false;
// /* type writer animation*/
// const texts = ['Trusted Security Vendor!', 'this second paragraph', 'this fourth paragraph']; /* The text */
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';
// const typetimeout = function () {
//     setTimeout(typeWriter, 150);
// }
// function deleteWritingHandler(elment) {
//     if (elment.textContent.length == 0) {
//         return;
//     }
//     clearTimeout(typetimeout);
//     elment.textContent = elment.textContent.slice(0, -1);
//     setTimeout(deleteWritingHandler(elment));
// }
// function typeWriter() {
//     if (count == texts.length) {
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);
//     animationField.textContent = letter;
//     if (letter.length === currentText.length) {
//         count++;
//         index = 0;
//     }
//     typetimeout();
// }
// List of sentences
var _CONTENT = ['Your Trusted Security Partner!','Your Next Security Vendor!','A Vendor You Can Trust!','Your Partner in Success.'];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector(".text-animation");

// Cursor element 
//var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		//_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			//_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

//Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
// if (window.scrollY - animationField.offsetTop >= -500) {
//          if (!once) {
//              once = true;
//              typeWriter();
//          }
//      }
//  document.addEventListener('scroll', () => {
//      if (window.scrollY - animationField.offsetTop >= -500) {
//          if (!once) {
//              once = true;
//              typeWriter();
//          }
//      }  
//  });
/*
window.pageYOffset >= statics.offsetTop - 200
why chosse us animation*/
const whyChooseUs = document.querySelector('.whychooseus')
const medals = document.querySelectorAll('.whychooseus > .container > .row > .card');
const animate = () => {
    medals[0].classList.add('medals-1-3-animate');
    medals[2].classList.add('medals-1-3-animate');
    medals[1].classList.add('medals-2-animate');

}
if (window.pageYOffset >= whyChooseUs.offsetTop - 300) {
        animate();
    }
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= whyChooseUs.offsetTop - 300) {
        animate();
    }
    
})