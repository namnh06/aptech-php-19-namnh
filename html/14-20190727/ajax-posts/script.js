$(document).ready(function () {
  $('#load-posts').click(function () {
    $.get('https://namcoi.com/projects/news-website-laravel/public/api/posts', function (data, status) {
      if (status == 'success') {
        var dataLength = data.length;
        for (var i = 0; i < dataLength; i++) {
          var post = data[i];

          var categoriesOfPost = '';
          var categoriesOfPostLength = post.categories.length;
          if (categoriesOfPostLength > 0) {
            for (var j = 0; j < categoriesOfPostLength; j++) {
              var categoryName = post.categories[j].name;
              categoriesOfPost += '<span class="badge badge-primary mr-2">' + categoryName + '</span>';
            }
          }

          var postContent = '<div class="card" style="width: 18rem;">\
          <img src="' + post.image_url + '" class="card-img-top" alt="...">\
          <div class="card-body">\
            <h5 class="card-title">' + post.title + '</h5>\
            <p class="card-text">' + post.description + '</p>' +
            categoriesOfPost +
            '</div></div>';

          $('#row-posts').append(postContent);
        }
      }
    })
  })
});