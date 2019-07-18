// var array = ['Nam', 'Thach', 'Phong', 'Nhan', 'Hien', 'Thuan', 'Tai'];
// // declare variable array and assign 
// for (var i = 0; i < array.length; i = i + 1) {
//   document.getElementById('p-' + i).innerHTML = array[i];
//   console.log(array[i]);
// }

// var php19 = [{
//   'name': 'Nam',
//   'height': 169,
//   'weight': 85
// }, {
//   'name': 'Thach',
//   'height': 162,
//   'weight': 63,
// }, {
//   'name': 'Phong',
//   'height': 170,
//   'weight': 50
// }];
// var lengthArr = php19.length;
// // i++ ~ i = i + 1
// var soLanClick = 0;
// var bongden = false;

// function inNguoiDung() {
//   console.log(soLanClick);
//   for (var i = 0; i < lengthArr; i++) {
//     document.getElementById('p-' + i).innerHTML = php19[i].name + '-' +
//       php19[i].height + '-' + php19[i].weight;
//   }
// }


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