var data = {
  "users": [{
      "id": 10,
      "name": "Ethyl Medhurst",
      "email": "noah.hand@example.org",
      "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
      "created_at": "2019-03-26 04:55:04",
      "updated_at": "2019-03-26 04:55:04"
    },
    {
      "id": 9,
      "name": "Eula Lebsack PhD",
      "email": "schroeder.sylvan@example.org",
      "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
      "created_at": "2019-03-26 04:55:03",
      "updated_at": "2019-03-26 04:55:03"
    },
    {
      "id": 8,
      "name": "Mrs. Kathlyn Parisian DDS",
      "email": "ggrimes@example.net",
      "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
      "created_at": "2019-03-26 04:55:03",
      "updated_at": "2019-03-26 04:55:03"
    }
  ]
};


// var elementButton = document.createElement('button');
// elementButton.innerHTML = 'CLICK DI';

// // var elementTable = document.getElementsByTagName('table');
// // console.log(elementTable);
// document.body.appendChild(elementButton);
// console.log(document.body.childNodes[2]);
// document.body.insertBefore(elementButton, document.body.childNodes[2]);

//camelCase



// var tableData = document.createElement('td'); // declare tableData
// tableData.innerHTML = 1;
// tableRow.appendChild(tableData);

// var tableData = document.createElement('td'); // declare table Data
// tableData.innerHTML = 2;
// tableRow.appendChild(tableData);

// var tableData = document.createElement('td');
// tableData.innerHTML = 3;
// tableRow.appendChild(tableData);

// for (var i = 0; i < 3; i++) {
//   var tableData = document.createElement('td'); // declare table Data
//   tableData.innerHTML = i + 1;
//   tableRow.appendChild(tableData);

// }

// console.log(data.users.length);

var tableBody = document.getElementById('table-body');
for (var i = 0; i < data.users.length; i++) {
  var user = data.users[i];
  // create table row for this user
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  // id
  var tableData = document.createElement('td');
  tableData.innerHTML = user.id;
  tableRow.appendChild(tableData);
  // name
  var tableData = document.createElement('td');
  tableData.innerHTML = user.name;
  tableRow.appendChild(tableData);
  // email
  var tableData = document.createElement('td');
  tableData.innerHTML = user.email;
  tableRow.appendChild(tableData);
}

// console.log(document.body.childNodes[2]);
// function themDuLieu() {
//   var tBody = document.getElementById('table-body');
//   console.log(tBody);
//   var tRow = document.createElement('tr');
//   console.log(tRow);
//   tBody.appendChild(tRow);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[0].id;
//   tRow.appendChild(tData);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[0].name;
//   tRow.appendChild(tData);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[0].email;
//   tRow.appendChild(tData);
//   var tRow = document.createElement('tr');
//   console.log(tRow);
//   tBody.appendChild(tRow);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[1].id;
//   tRow.appendChild(tData);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[1].name;
//   tRow.appendChild(tData);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[1].email;
//   tRow.appendChild(tData);
//   var tRow = document.createElement('tr');
//   console.log(tRow);
//   tBody.appendChild(tRow);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[2].id;
//   tRow.appendChild(tData);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[2].name;
//   tRow.appendChild(tData);
//   var tData = document.createElement('td');
//   tData.innerHTML = data.users[2].email;
//   tRow.appendChild(tData);
// }