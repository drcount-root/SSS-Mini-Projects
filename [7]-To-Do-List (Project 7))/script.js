function addtolist() {
  let taskname = document.getElementById("taskname").value;
  let tododiv = document.getElementById("mytodo");

  let newtodoitem = document.createElement("div");
  let todoname = document.createElement("li");
  todoname.innerHTML = taskname;

  let deletebtn = document.createElement("i");
  deletebtn.classList.add("fa");
  deletebtn.classList.add("fa-trash");

  newtodoitem.appendChild(todoname);
  newtodoitem.appendChild(deletebtn);

  tododiv.appendChild(newtodoitem);
}

let tododiv = document.getElementById("mytodo");
tododiv.addEventListener("click", function deleteitem(e) {
  const element = e.target;
  if (element.classList[0] == "fa") {
    element.parentElement.remove();
  }
});
