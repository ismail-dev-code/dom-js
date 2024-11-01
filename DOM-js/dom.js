document.getElementById("welcome").innerText="hello world";
const places= document.getElementsByClassName("important-places")
for(const place of places){
    // console.log(place.innerText);
}

const international=document.querySelectorAll("ul")
for(const place of international){
    place.style.border="3px solid red";
    place.style.backgroundColor= "green";
    place.style.padding = "15px";
    place.style.listStyle = "none";
    place.style.borderRadius = "15px";
    place.style.fontSize = "20px"
}
const zindabad =document.getElementById("zinda")
const newLi = document.createElement("li");
newLi.innerText="I am from JS"

zindabad.appendChild(newLi);