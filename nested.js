const college = {
  name: "vnc",
  address: "baily road",
  students: 800,
  events: ["21 Feb", "Independence day", "Victory Day"],
  people: {
    count: 200,
    principal: {
      name: "sabura mam",
      yearsOfExperience: 25,
      degree: "English",
    },
  },
};

console.log(college.people.principal.degree);
console.log(college["people"]["principal"].name);
college.events[2] = "Eid ul adha";
console.log(college.events);
