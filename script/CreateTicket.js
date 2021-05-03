let Gresult = "";

async function getApiforcreate() {
  console.log(description);
  try {
    let response = await fetch(
      "https://newaccount1619866898804.freshdesk.com/api/v2/tickets#",
      {
        method: "POST",
        body: JSON.stringify({
          description: description,
          email: email,
          priority: 1,
          status: 2,
          subject: subject,
        }),
        headers: {
          Authorization: "Basic " + btoa("nYHqZv3liqJxvn4ExYxH" + ":" + "#"),
          "Content-Type": "application/json",
        },
      }
    );
    let result = await response.json();
    //  console.log(result.subject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

function createdTicked() {
  alert("Ticket Created");
  var Data = getApiforcreate();
  Data.then((res) => {
    document.getElementById("email").innerHTML = res.created_at;
    document.getElementById("date").innerHTML = res.created_at;
    document.getElementById("sub").innerHTML = res.subject;
    document.getElementById("desc").innerHTML = res.description;
  });
  //window.location = "./TicketCreated";
}

function CreateElement(ElementName, ElementClass = "", ElementId = "") {
  let elem = document.createElement(ElementName);
  elem.setAttribute("class", ElementClass);
  elem.setAttribute("id", ElementId);
  return elem;
}

var urlParams;
(window.onpopstate = function () {
  var match,
    pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);

  urlParams = {};
  while ((match = search.exec(query)))
    urlParams[decode(match[1])] = decode(match[2]);
})();

console.log(urlParams);

let description = urlParams.Descriptipn;
let subject = urlParams.Subject;
let email = urlParams.Contact;

console.log(description);
console.log(subject);
console.log(email);
