// business logic
function Ticket(age, movie, time) {
  this.userAge = age;
  this.userMovie = movie;
  this.userTime = time;
}

Ticket.prototype.calculatePrice = function() {
  var ticketPrice = 0;
  if (this.userMovie === "Suicide Squad" || this.userMovie === "Harry Potter: Fantastic Beasts and Where to Find Them"){
    ticketPrice +=2;
  } else{
    ticketPrice += 1;
  }
  if (this.userAge === "Under 18"){
    ticketPrice += 6;
  } else if (this.userAge === "18-60"){
    ticketPrice += 8;
  } else {
    ticketPrice += 5;
  }
  if (parseInt(this.userTime) <= 17){
    ticketPrice += 1;
  } else {
    ticketPrice += 2;
  }
  return ticketPrice;
}
// ui logic
$("form").submit(function(event){
  event.preventDefault();

  var inputAge = $("#age").val();
  var inputMovie = $("#movie").val();
  var inputTime = $("#time").val();
  var newTicket = new Ticket(inputAge, inputMovie, inputTime);

  $("#movieName").text(inputMovie);
  $("#movieTime").text(inputTime);
  $("#movieAmount").text(newTicket.calculatePrice());
});
