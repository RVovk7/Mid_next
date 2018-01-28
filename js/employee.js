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

    detail.id = i;

    detail.addEventListener('click', det);


    function det() {
      let inform = document.createElement('div');
      let delSlave = document.querySelectorAll('.inform');
      delSlave.id = event.target.id;
      let j = 0;
      if (detail.innerHTML == 'Detail' && delSlave.length <=0) {


        detail.innerHTML = 'Hide';
        inform.classList.add('inform');
        inform.innerHTML = `UserName: ${el.userName} <br> Email: ${el.email} <br>  BirthDate: ${el.birthDate}`;
        currentDiv.appendChild(inform);
        boss_id(arrUsers);


      }
      else 
      if(detail.innerHTML == 'Hide'){
      
        detail.innerHTML = 'Detail';

         delSlave[0].remove();





      }
    }

    ////structure create
    currentDiv.appendChild(name);
    currentDiv.appendChild(avatar);
    avatar.appendChild(img);
    showD.appendChild(detail);
    currentDiv.appendChild(showD);
    parentDiv.appendChild(currentDiv);
  });

}
//////////// output slaves list
function boss_id(arrUsers) {

  let user = arrUsers[event.target.id];
  let slaves = arrUsers.filter(el => el.bossid > user.bossid);

  let slave = document.getElementsByClassName('inform');
  let divSlave = document.createElement('div');
  divSlave.classList.add('slaves');


  slave = document.getElementsByClassName('inform');
  divSlave.innerHTML = `Slaves list:`;
  let ol_list = document.createElement('ol');

  if (slaves.length == 0) {
    ol_list.innerHTML = "No one slave (";
  }

  divSlave.appendChild(ol_list);
  slave[slave.length - 1].appendChild(divSlave);
  ol_list.type = "I";
  slaves.forEach(el => {
    let current_slave = document.createElement('li');
    current_slave.classList.add = ('sl_row')
    current_slave.innerHTML = `${el.firstName} ${el.lastName}`;
    ol_list.appendChild(current_slave);

  });
}