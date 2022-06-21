const crud = require("./crud/index");

// async function saveData() {
//     const savedData =  await crud.save("people", "MGE9RNmRvf5vKf9aJTCp",
//     {name: "Diego", surname: "Planinscheck", idade: 17})
//     console.log(savedData);
// }

// saveData();

// async function searchData() {
//   const data = await crud.get("people");
//   console.log(data);
// }

// searchData();

// async function getId() {
//   const data = await crud.getByID("people", "YASh9o6uwZ96BXSvgTqA");
//   console.log(data);
// }

// getId();

async function remove() {
  const data = await crud.remove("people", "belEy4oLD96LRSM8gO5h");
  console.log(data);
}

remove();