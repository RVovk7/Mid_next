

function populateDatabase(emplArray){
 let initDbRequest = indexedDB.open("employeesDB", 2);
//debugger;
 initDbRequest.onupgradeneeded = function(event){
  let db = event.target.result;

  let employeesStore = db.createObjectStore("employees", { keyPath: "id" });
  employeesStore.createIndex("id", "id", { unique: true });

  employeesStore.transaction.oncomplete = function(event) {
   let employeesObjectStore = db.transaction("employees", "readwrite")
              .objectStore("employees");

      emplArray.forEach(e => employeesObjectStore.add(e));
       showIdb(employeesObjectStore);

  }
 }
}
function showIdb(arr){
	console.dir(arr);
	
}