'use strict';
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:1111");
xhr.onreadystatechange = function(){
 if(xhr.status === 200 && xhr.readyState === 4) {
  let responseJson = JSON.parse(xhr.responseText);
createUi(responseJson);
console.log(responseJson);
 }
}
xhr.send();
function createUi(arrUsers){
 let parentDiv = document.getElementById('emp_wr');
for (let i = 0; i < arrUsers.length; i++) {
  let currentDiv = document.createElement('div');
  currentDiv.classList.add("row");
 
  currentDiv.innerHTML = ">> " + arrUsers[i].firstName;
 currentDiv.id = i;
  parentDiv.appendChild(currentDiv);
 }
 parentDiv.addEventListener('click', function() {
 boss_id(arrUsers);
}, false);
}
function boss_id(arrUsers) {
	event.target.value = arrUsers[event.target.id];
	let user = event.target.value;
let slaves =  arrUsers.filter(function(el){
	return el.bossid > user.bossid;
});
console.log(slaves[0]);
}

