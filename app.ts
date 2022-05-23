const person = {
  name: "Mehdi",
  age: 39,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10;

for (const hobby of person.hobbies) {
  console.log(hobby);
}
