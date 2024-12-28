let name1 = document.getElementById("name");
let img = document.getElementById("img-id");
let btn = document.getElementById("btn");
let short = document.getElementById("short-name");
let r = document.getElementById("region");
let err = document.getElementById("err-box");

//fetch data
let fun1 = async () => {
  let d = await fetch("data.json");
  let d2 = await d.json();
  data = d2.data; //this is the collection of all contry
  let found = false;
  let user_value = name1.value;
  let user_value2 = user_value.toLowerCase();

  for (let key in data) {
    let con = data[key].country.toLowerCase();
    if (con == user_value2) {
      console.log(key);
      img.src = `https://flagsapi.com/${key}/flat/64.png`;
      short.innerHTML = `<span><b>${key}</b></span>`;
      r.innerHTML = `<span><b>${data[key].region}</b></span>`;
      found = true;
      err.innerText = "Your result : ";
      err.classList.remove("alert-danger");
      err.classList.add("alert-success");
    }
  }
  if (found == false) {
    err.innerHTML = "sorry this countrye name is not valid";
    err.classList.remove("alert-primary");
    err.classList.add("alert-danger");
    img.src =
      "https://t3.ftcdn.net/jpg/01/12/43/90/360_F_112439022_Sft6cXK9GLnzWjjIkVMj2Lt34RcKUpxm.jpg";
    short.innerHTML = "";
    r.innerHTML = "";
  }
};

//click main button
btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (name1.value == "") {
    err.innerHTML = "---please enter somthing---";
    short.innerHTML = "";
    r.innerHTML = "";

    err.classList.remove("alert-primary");
    err.classList.add("alert-danger");
  } else {
    err.innerHTML = "";

    fun1();
  }
});
