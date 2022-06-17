const carMarkers: string[] = ["ford", "toyota", "chevy"];
// carMarkers.forEach((x) => console.log(x));

const carByMake: string[][] = [];

const car = carMarkers[0];
// console.log(car);
const myCar = carMarkers.pop();
console.log(myCar);

//prevent incomatible values
// carMarkers.push(100);

carMarkers.map((car: string): string => {
  return car.toUpperCase();
});
