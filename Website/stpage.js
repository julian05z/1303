const main = document.querySelector('#main')



function renderPersonPage() {
  main.innerHTML = "<h1>Alle Personen</h1>";
  
    fetch('http://localhost:4000/InitialData') 
    .then((res) => res.json())
    .then((data) => {

      clearElement(main)

      

      

        data.InitialData.forEach((Person)=> {

        
        const persondiv = document.createElement("div");
         persondiv.innerHTML = `<div class = "personenname">${Person.name}</div>`;
        
         main.appendChild(persondiv);
      
      //  console.log(persondiv)
       })
     
     

          
      const personenname = document.querySelectorAll(".personenname");
      personenname.forEach((name) => {
        name.addEventListener("click", (e) => {
         
          
          fetch('http://localhost:4000/InitialData') 
          .then((res) => res.json())
          .then((data) => {
            console.log(name.innerHTML)
            data.InitialData.forEach((Person) => {
              console.log(Person.name)
              if (name.innerHTML === Person.name) {
                displayPerson(Person)
              }
            })
          })
          
          //displayPerson(Person);
        });
      });
    });
   
    }

    function displayPerson(Person) {
      
      clearElement(main)
      console.log(Person);

      let personeninfo = document.createElement("div");
      personeninfo.classList.add("personeninfo");
      personeninfo.innerHTML =`
      <p><span>Name:</span> ${Person.name}</p>
      <p><span>Alter:</span> ${Person.alter}</p>
      <p><span>Wohnort:</span> ${Person.wohnort}</p>
      <p><span>Beruf:</span> ${Person.beruf}</p>
    `;
    
    console.log(Person.id);
    main.append(personeninfo);

     
      };


 const bla = renderPersonPage()

      
 function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

  
