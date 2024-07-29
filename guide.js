let inputext = document.getElementById("textinput");
let tasklist = document.getElementById("myUL");
let list = document.querySelector('ul');
let span = document.createElement("span");
let li = document.createElement("li");

function fun() {
    if(inputext.value === '') {
        alert("Please enter a proper value");
    }
    else {
        li.innerHTML = inputext.value;
        tasklist.appendChild(li);

    
    }

}


list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);