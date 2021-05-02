let Gresult = "";
var form = document.getElementById("my-form");
form.addEventListener("submit", function (e) {
  var description = document.getElementById("description").value;
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("contact").value;
  // console.log(description, subject);

  fetch("https://newaccount1619924845156.freshdesk.com/api/v2/tickets", {
    method: "POST",
    body: JSON.stringify({
      description: description,
      subject: subject,
      email: email,
      priority: 1,
      status: 2,
    }),
    headers: {
      Authorization:
        "Basic Rm9nVEViUkZwMlpWb1k3YVdPTzk6Rm9nVEViUkZwMlpWb1k3YVdPTzk=",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      Gresult = result;
      createdTicked(result);
      console.log(result);
    })
    .catch((err) => console.log(err));
});

function createdTicked(data) {
  console.log(data);
  var col = CreateElement("div", "col-12");
  var card = CreateElement("div", "card mt-3");
  var cardBody = CreateElement("div", "card-body");
  var font = document.createElement("i", "fas fa-phone");
  font.innerHTML = Gresult.subject;
  var text = CreateElement("span", "text-muted");
  text.innerHTML = "Created by User";
  var font2 = document.createElement("i", "far fa-address-card");
  font2.innerHTML = Gresult.subject;
  var date = CreateElement("span", "text-muted");
  date.innerHTML = Gresult.created_at;
  var font3 = document.createElement("i", "fas fa-phone");
  font3.innerHTML = Gresult.description_text;

  cardBody.append(font, text, font2, date, font3);
  card.append(cardBody);
  col.append(card);
  document.getElementById("createdNew").append(col);
}

function CreateElement(ElementName, ElementClass = "", ElementId = "") {
  let elem = document.createElement(ElementName);
  elem.setAttribute("class", ElementClass);
  elem.setAttribute("id", ElementId);
  return elem;
}
