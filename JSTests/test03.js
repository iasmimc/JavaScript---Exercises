const catsArr = [
  { name: "Kuro", fur: "black", age: 5, personality: "noble" },
  { name: "Shiro", fur: "White", age: 1, personality: "scaredy" },
  { name: "Shimi", fur: "Calico", age: 1, personality: "playful" },
];
const filterCatsByName = (arrCat, nameCat) => {
  let arrCopy = [...arrCat];
  const [filteredCat] = arrCopy.filter((cat) => cat.name === nameCat);

  return `The first cat in the system who's name is ${filteredCat.name} is a ${filteredCat.fur} kitty around ${filteredCat.age} years old he has a ${filteredCat.personality} personality!`;
};

console.log(filterCatsByName(catsArr, "Kuro"));
