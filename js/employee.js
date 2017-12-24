'use strict';
///////// get and parse Json file
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://wolf-mac.local:1111");   //warning change to "http://localhost:1111"

xhr.onreadystatechange = () =>{
 if(xhr.status === 200 && xhr.readyState === 4) {
  let responseJson = JSON.parse(xhr.responseText);
createUi(responseJson);
 }
}
xhr.send();
  //////////// output empoloyee to html
function createUi(arrUsers){
 let parentDiv = document.getElementById('emp_wr');
 
arrUsers.forEach((el,i) => {
  let currentDiv = document.createElement('div');
  currentDiv.classList.add("row");
  currentDiv.innerHTML =  el.firstName +' '+ el.lastName;
  currentDiv.id = i;
  parentDiv.appendChild(currentDiv);
 });
 
 parentDiv.addEventListener('click', function() {
 boss_id(arrUsers);
});
}
  //////////// output slaves to html
function boss_id(arrUsers) {
	event.target.value = arrUsers[event.target.id];
	let user = event.target.value;
let slaves =  arrUsers.filter(el => el.bossid > user.bossid);  
 
 let div_slave = document.getElementById("slaves_list");
div_slave.innerHTML = user.firstName +" " + user.lastName + ' - slaves:';
 let ol_list = document.createElement('ol');
if (slaves.length == 0){
	ol_list.innerHTML = "No one slave (";
}
div_slave.appendChild(ol_list);
ol_list.type = "I";
ol_list.style.border = "solid 0.1px silver";
slaves.forEach(el => {
let current_slave = document.createElement('li');
current_slave.classList.add =('sl_row')
  current_slave.innerHTML = el.firstName +' '+ el.lastName;
  	ol_list.appendChild(current_slave);
});
}