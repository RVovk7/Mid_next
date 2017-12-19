'use strict';
String.prototype.encode = function (ind) {
	let str = '';
	for (let i=0; i< this.length; i++){	
	str += String.fromCharCode(this.charCodeAt(i)+ ind) ;
	}
	return str;
}
String.prototype.decode = function (ind) {
	let str = '';
	for (let i=0; i< this.length; i++){	
	str += String.fromCharCode(this.charCodeAt(i)- ind) ;
	}
	return str;
}
var encodedStr = "Hello world!".encode(6);
console.log(encodedStr); // "Nkrru&}uxrj'"
var decodedStr1 = encodedStr.decode(3);
console.log(decodedStr1); // "Khoor#zruog$"
var decodedStr2 = encodedStr.decode(6);
console.log(decodedStr2); // "Hello world!"