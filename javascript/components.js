$(document).ready(function () {
	let input = $('.comment-input');
	input.keyup(function (event) {
		if (event.keyCode == 13) {
			let comments = $('.comment');

			$(comments[0]).before(`
				<div class="comment border-top">
					<div class="comment-image-view float_left">
						<div class="comment-image center circular background-image" style="background-image: url(./images/blogImage5.png);">
						</div>
					</div>
					<div class="comment-content float_right">
						<div class="comment-content-header">
							<h4 style="display: inline-block;"><b>ALLON POE</b></h4>
							<p style="display: inline-block;"><b>Just now</b></p>
						</div>
						<p>${input.val()}</p>
					</div>
				</div>
			`);

			input.val('');
		}
	});

  let searchLink = $('.banner .search');
  let searchBar = $('.banner .search input[type=text]')
  $(document).on( "click", function( e) {
    if(!$(e.target).is(searchBar)){
      searchBar.fadeTo(500, 0, function(){
        searchBar.hide();
      });
    }
  });
  searchBar.click(function(e){
    e.stopPropagation();
  });
  searchLink.click(function(e){
    e.stopPropagation();
    searchBar.toggle();
    searchBar.fadeTo(500, 1);
  });

});
