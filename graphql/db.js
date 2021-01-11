export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Ace",
    age: 22,
    gender: "male",
  },
  {
    id: 3,
    name: "Danny",
    age: 18,
    gender: "male",
  },
  {
    id: 4,
    name: "Kale",
    age: 19,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
