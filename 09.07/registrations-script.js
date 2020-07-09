var coffee = document.getElementById("coffee");
coffee.innerHTML = "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>";

render();

function render() {
   var registrations = JSON.parse(localStorage.getItem("registrations")) || [];
   var registrationsCount = registrations.length;
   console.log(registrationsCount);

   const ul = document.createElement("ul");

   registrations.forEach((person)=>{
       console.log(person); //kui soovime spetsiifilist osa objektist, kirjutame: .firstname, .phone jne.
       const li = document.createElement("li");
       const div = document.createElement("div");
       div.innerHTML = person.firstname + " " + person.lastname + "<br>" + person.phone + "<br>" + person.email;

    const inAcvtiveButton = document.createElement("div");
    inAcvtiveButton.innerHTML = "Muuda mitteaktiivseks";
    inAcvtiveButton.classList.add("inactive");

    // inAcvtiveButton.addEventListener('click', ()=>{})
    // inAcvtiveButton.addEventListener('click', function(){})

    inAcvtiveButton.addEventListener('click', ()=>{
        if (!div.classList.contains("inactive")){
            div.classList.add("inactive");
        } else {
            div.classList.remove("inactive");
        }
    })

       li.appendChild(div);
       li.appendChild(inAcvtiveButton);
       console.log(li);
       ul.appendChild(li);
   })
   console.log(ul);

   document.body.appendChild(ul);

}