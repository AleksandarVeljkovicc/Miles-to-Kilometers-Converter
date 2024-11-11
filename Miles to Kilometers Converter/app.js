document.getElementById("convert").addEventListener("submit", function (event) {
  let distanceInput = document.getElementById("distance").value; // Uzimamo unos kao string
  let answer = document.getElementById("answer");

  // Provera da li je polje prazno
  if (!distanceInput.trim()) {
    answer.innerHTML = "<h2>Please provide a number!</h2>";
  } else {
    var distance = parseFloat(distanceInput); // Konvertovanje u broj

    if (distance && distance > 0) {
      let conversion = (distance * 1.609344).toFixed(3);
      answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
    } else if (distance <= 0) {
      answer.innerHTML = "<h2>Please provide a number bigger than 0!</h2>";
    } else {
      answer.innerHTML = "<h2>You can only enter numbers!</h2>";
    }
  }

  event.preventDefault();
});
