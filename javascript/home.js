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
