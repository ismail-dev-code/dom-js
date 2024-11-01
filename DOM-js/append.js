const cities = document.getElementById("usa-city");
const li= document.createElement("li")
li.innerText="noakhali";
cities.appendChild(li)



const bd = document.getElementById("bdPlace");
const li2= document.createElement('li');
li2.innerText= "Bangladesher gram";
bd.appendChild(li2)




const indiaCity= document.getElementById("india-city");
const li3= document.createElement("li");
li3.innerText= "Chennai"
indiaCity.appendChild(li3)











const malaysiaCity=document.getElementById("malay-city")
const li4= document.createElement("li")
li4.innerText= "Sabah"
malaysiaCity.appendChild(li4)

const mainDiv=document.querySelector("main")
console.log(mainDiv);
mainDiv.style.display="flex"
mainDiv.style.gap= "15px"
mainDiv.style.border= "3px solid black"
mainDiv.style.paddingLeft= "24px"
mainDiv.style.borderRadius= "10px"
mainDiv.style.fontSize= "24px"
mainDiv.style.flexWrap= "wrap"