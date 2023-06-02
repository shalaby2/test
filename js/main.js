async function getData() {
  const res = await fetch("./dataJSon/data.json");
  const data = await res.json();
  showdata(data);
}

function showdata(arr) {
  let htmlElemnt = document.createElement("div");
  htmlElemnt.id = "data";
  document.body.prepend(htmlElemnt);
  let user = arr.map(({ id, user, age }) => {
    return `<h1> my name is${user}</h1>
               <p>${age}</p> `;
  });
  htmlElemnt.innerHTML = user.join("");
}

getData();
