function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;

}

Ticket.prototype.cost = function() {
  var total = 0;

  if (this.age === "4 or younger")
    {
     total += 3;
    }
  else if (this.age === "65 or older")
      {
      total += 2;

      }

  if (this.time === "Before 5:00" && this.age === "5 to 64")
  {
     total += 10;
  }
  else if (this.time === "After 5:00" && this.age === "5 to 64") {
    total += 20;
  }

  return total;

  }


$(function() {
  $("#newTicket").submit(function(event) {
    event.preventDefault();

    var newMovie = $("#new-movie").val();
    var newTime = $("#new-time").val();
    var newAge = $("#new-age").val();
    console.log(newMovie, newTime, newAge);

    var newTicket = new Ticket (newMovie, newTime, newAge);


    console.log(newTicket.cost());
});
});
