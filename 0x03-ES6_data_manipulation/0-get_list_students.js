export default function getListStudents() {
  const id = ["1", "2", "5"];
  const firstName = ["Guillaume", "James", "Serena"];
  const location = ["San Francisco", "Columbia", "San Francisco"];

  const students = [];
  for (let i = 0; i < id.length; i++) {
    students.push({
      id: parseInt(id[i]),
      firstName: firstName[i],
      location: location[i]
    });
  }

  return students;
}
