var imageElement = document.getElementById('image');

console.log(imageElement.src);

function doiAnh() {
  if (imageElement.src.includes('pic_bulboff')) {
    imageElement.src = './pic_bulbon.gif';
  } else {
    imageElement.src = './pic_bulboff.gif';
  }
}

// var a = 5;
// var b = '5';
// == compare value
// == compare type & value
// String != number
// console.log(a === b);

// console.log(false || true);