// Write your JavaScript code here!
window.addEventListener("load", function(){
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const container = document.getElementById("missionTarget");
         container.innerHTML += `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                  <li>Diameter: ${json[0].diameter}</li>
                  <li>Star: ${json[0].star}</li>
                  <li>Distance from Earth: ${json[0].distance}</li>
                  <li>Number of Moons: ${json[0].moons}</li>
               </ol>
               <img src="${json[0].image}">
         `
     });   
   });
   const completeForm = document.getElementById("launchForm");
   let name = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let weight = document.querySelector("input[name=cargoMass]");
   completeForm.addEventListener("submit", function(event){
      if(name.value==="" || copilot.value==="" || fuel.value==="" || weight.value===""){
         alert("One or more fields missing required entry.");
          event.preventDefault();
      };
      if (isNaN(fuel.value)=== true || isNaN(weight.value)=== true || isNaN(name.value)=== false || isNaN(copilot.value)=== false){
         alert("Please check that all fields have valid entries.");
         event.preventDefault();
      };
      if (Number(fuel.value)<10000){
         let faultyStatus = document.getElementById("launchStatusCheck");
         faultyStatus.innerHTML=`
         <h2 id="launchStatus">Shuttle not ready for launch</h2>
            <div  id="faultyItems">
               <ol>
                  <li id="pilotStatus">Pilot ${name.value} Ready</li>
                  <li id="copilotStatus">Co-pilot ${copilot.value} Ready</li>
                  <li id="fuelStatus">Fuel level ${fuel.value} not high enough for launch</li>
         `
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.style.color = "red";
         let faultyItems = document.getElementById("faultyItems");
         faultyItems.style.visibility = "visible";   
         event.preventDefault()
      }else if (Number(weight.value)>10000){
         let faultyStatus = document.getElementById("launchStatusCheck");
         faultyStatus.innerHTML=`
         <h2 id="launchStatus">Shuttle not ready for launch</h2>
            <div  id="faultyItems">
               <ol>
                  <li id="pilotStatus">Pilot ${name.value} Ready</li>
                  <li id="copilotStatus">Co-pilot ${copilot.value} Ready</li>
                  <li id="fuelStatus">Fuel level high enough for launch</li>
                  <li id="cargoStatus">Cargo mass ${weight.value} not low enough for launch</li>
         `
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.style.color = "red";
         let faultyItems = document.getElementById("faultyItems");
         faultyItems.style.visibility = "visible";   
         event.preventDefault()
      }else{
         let faultyStatus = document.getElementById("launchStatusCheck");
         faultyStatus.style.color = "green"
         faultyStatus.innerHTML=`
         <h2 id="launchStatus">Shuttle is ready for launch.</h2>
         `
         event.preventDefault()       
         }
   });



});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
