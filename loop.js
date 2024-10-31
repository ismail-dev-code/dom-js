const mobile = {
    brand: "samsung", 
    price: 4000,
    color: "black",
    memory: "250gb"
}
const {prop}=mobile

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}