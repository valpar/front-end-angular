
var vehicles = [
  {type: "car", price: "$5000"},
  {type: "motorcycle", price: "$2300"},
  {type: "bus", price: "$9000"},
  {type: "truck", price: "$10700"},
  {type: "tractor", price: "$11000"},
  {type: "car", price: "$1900"},
];

vehicles.forEach(vehicle => {
  document.getElementById("vehicles").innerHTML += vehicle.type + '<br>'
});

var vehicleTypes = vehicles.map(vehicle => vehicle.type);

console.log(vehicleTypes);

vehicleTypes.forEach(vehicle => {
  console.log(vehicle);
  console.log(vehicleTypes.indexOf(vehicle));
});

var uniqueItems = []

vehicleTypes.filter((type, i, types)=>{
  console.log(type);
  console.log(i);
  console.log(types);
  if (types.indexOf(type)==i) {
    uniqueItems.push(type);
  }
});

console.log(uniqueItems);

var vehiclePrices = vehicles.map(vehicle =>(Number)(vehicle.price.split('$')[1]));

console.log(vehiclePrices);