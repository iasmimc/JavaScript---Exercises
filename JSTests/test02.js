// Com o Arr de todos fornecido, cria uma função com dois args, o "todosArr" e "isCompleted"
// Vais filtrar o teu arr pelo estado de "completed" do mesmo.
const todosArr = [
  { id: 1, copy: "Study JavaScript", completed: false },
  { id: 2, copy: "Feed Cats", completed: true },
  { id: 3, copy: "Take out Trash", completed: false },
  { id: 4, copy: "Clean room", completed: true },
  { id: 5, copy: "Make lunch for the week", completed: false },
  { id: 6, copy: "Publish Code to Github", completed: true },
];
const getTodoList = (todosArr, isCompleted) => {
  let arrCopy = [...todosArr];
  return arrCopy.filter(function (item) {
    return item.completed === isCompleted;
  });
};

console.log("My Todo List:", getTodoList(todosArr, true));
