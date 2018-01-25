'use strict';
///////// get and parse Json file
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://wolf-mac.local:1111");   //warning change to "http://localhost:1111"

xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    let responseJson = JSON.parse(xhr.responseText);
    all.addEventListener('click', () => {
      createUi(responseJson);
    })


    // populateDatabase(responseJson);

  }
}
xhr.send();

function createUi(arrUsers) {
  let parentDiv = document.getElementById('emp_wr');

  arrUsers.forEach((el, i) => {
    let currentDiv = document.createElement('div');
    currentDiv.classList.add("row");

    let name = document.createElement('div');
    name.classList.add("name");
    name.innerHTML = ` ${el.firstName}  ${el.lastName} `;


    

    let avatar = document.createElement('div');
    avatar.classList.add("avatar");

    let img = document.createElement("IMG");
    img.src = el.avatar;

    let showD = document.createElement('div');
    showD.classList.add('showD');
    let detail = document.createElement('button');
    detail.classList.add('btn');
    detail.innerHTML = 'Detail';


    currentDiv.appendChild(name);
    currentDiv.appendChild(avatar);
    avatar.appendChild(img);



    detail.addEventListener('click', det);

    function det() {
      let hideD = document.createElement('button');
      hideD.classList.add('btn');
      hideD.innerHTML = 'hide';

      currentDiv.appendChild(hideD);
      let inform = document.createElement('div');
      inform.classList.add('inform');
      inform.innerHTML = `UserName:${el.userName} <br> Email:${el.email} <br>  BirthDate:${el.birthDate}`;
      currentDiv.appendChild(inform);
      detail.style = 'display:none';

    }
    showD.appendChild(detail);
    currentDiv.appendChild(showD);
    parentDiv.appendChild(currentDiv);
    currentDiv.id = i;
  });

  parentDiv.addEventListener('click', () => {
    boss_id(arrUsers);
  });
}
//////////// output slaves to html
function boss_id(arrUsers) {
  event.target.value = arrUsers[event.target.id];
  let user = event.target.value;
  let slaves = arrUsers.filter(el => el.bossid > user.bossid);

  let div_slave = document.getElementById("slaves_list");
  div_slave.innerHTML = user.firstName + " " + user.lastName + ' - slaves:';
  let ol_list = document.createElement('ol');
  if (slaves.length == 0) {
    ol_list.innerHTML = "No one slave (";
  }
  div_slave.appendChild(ol_list);
  ol_list.type = "I";
  ol_list.style.border = "solid 0.1px silver";
  slaves.forEach(el => {
    let current_slave = document.createElement('li');
    current_slave.classList.add = ('sl_row')
    current_slave.innerHTML = el.firstName + ' ' + el.lastName;
    ol_list.appendChild(current_slave);

  });
}