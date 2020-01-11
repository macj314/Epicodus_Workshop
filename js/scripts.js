// let warning = "Give me your MONEY!aosfhas dofjsdoi;fjas;dof\njkasdf;oajsdfoasdjfaspefoaseower-qwepoqw=e91230124[wqprka;mxkc-`12=40;lmamcp\r $100 \n Pleaseeeeeee";
// confirm(warning);
$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  });
});
