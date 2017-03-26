$(".dropdown_l .dropdown_content a").click(function() {
  $(".dropdown_l .dropdown_button .clr .dropdown_text_area").html(this.innerText);
});
$(".dropdown_r .dropdown_content a").click(function() {
  $(".dropdown_r .dropdown_button .clr .dropdown_text_area").html(this.innerText);
});
