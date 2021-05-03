function a() {
  let Fresh_api = fetch(
    "https://newaccount1619866898804.freshdesk.com/api/v2/tickets#",
    {
      method: "GET",
      headers: {
        Authorization:
          "Basic " +
          btoa("nYHqZv3liqJxvn4ExYxH" + ":" + "nYHqZv3liqJxvn4ExYxH"),
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
  console.log(Fresh_api);
  return Fresh_api;
}
var Name = "M";

function ListOfCountries() {
  let Data = a();
  console.log(typeof Data);
  Data.then((res) => {
    res.forEach((element) => {
      console.log(element);
      var col = CreateElement("div", "col-lg-9");
      var card = CreateElement("div", "card mt-3");
      card.setAttribute("width", "18rem");

      var checkBox = document.createElement("input", "check");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("class", "check");

      var div = CreateElement("div", "links");
      var a_link = CreateElement("a", 'btn btn-outline-success btn-sm mr-2"');
      a_link.innerHTML = "New";
      var card_text = CreateElement("p", "card-text mt-2");
      card_text.innerHTML = element.subject;
      var font = document.createElement("i");
      font.setAttribute("class", "far fa-envelope text-muted");
      font.innerHTML = ". Created a day ago";
      div.append(a_link, card_text, font);
      col.append(checkBox, div);

      var div1 = CreateElement("div", "text");
      var div2 = CreateElement("div", "text2");

      var a1 = CreateElement(
        "a",
        "btn btn-outline-success dropdown-toggle btn-sm mr-2"
      );
      a1.setAttribute("data-toggle", "dropdown");
      a1.setAttribute("aria-haspopup", "true");
      a1.setAttribute("aria-expanded", "dropdown");
      a1.innerHTML = "Low";
      var a_div = CreateElement("div", "dropdown-menu");
      a_div.setAttribute("aria-labelledby", "btnGroupD");
      a_div.innerHTML = "<br>";
      var l1 = CreateElement("a", "btn btn-sm  btn-outline-dark dropdown-item");
      l1.innerHTML = "medium";
      var l2 = CreateElement("a", "btn btn-sm  btn-outline-dark dropdown-item");
      l2.innerHTML = "High";
      var l3 = CreateElement("a", "btn btn-sm  btn-outline-dark dropdown-item");
      l3.innerHTML = "Urgent";
      a_div.append(l1, l2, l3);

      var a2 = CreateElement(
        "a",
        "btn btn-outline-success dropdown-toggle btn-sm mr-2"
      );
      a2.setAttribute("data-toggle", "dropdown");
      a2.setAttribute("aria-haspopup", "true");
      a2.setAttribute("aria-expanded", "dropdown");
      a2.innerHTML = "Low";

      var a_div2 = CreateElement("div", "dropdown-menu");
      a_div2.setAttribute("aria-labelledby", "btnGroupD");

      var l4 = CreateElement(
        "a",
        "btn btn-sm  btn-outline-success dropdown-item"
      );
      l4.innerHTML = "medium";
      var l5 = CreateElement("a", "btn btn-sm  btn-outline-dark dropdown-item");
      l5.innerHTML = "High";
      var l6 = CreateElement("a", "btn btn-sm  btn-outline-dark dropdown-item");
      l6.innerHTML = "Urgent";

      a_div2.append(l4, l5, l6);

      div1.append(a1, a_div);
      div2.append(a2, a_div2);

      var pp = CreateElement("div", "", "profileImage");
      pp.innerHTML = Name;
      col.append(checkBox, div, div1, div2);

      card.append(checkBox, pp, div, div1, div2);
      col.append(card);
      document.getElementById("card").append(col);
    });
  });
}

function CreateElement(ElementName, ElementClass = "", ElementId = "") {
  let elem = document.createElement(ElementName);
  elem.setAttribute("class", ElementClass);
  elem.setAttribute("id", ElementId);
  return elem;
}
