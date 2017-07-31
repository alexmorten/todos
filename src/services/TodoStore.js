import Storage from './Storage';
const location = "todos"
function init(){
  const todos = Storage.getObject(location);
  if(todos ){
    return
  }else{
    Storage.setObject(location,[]);
  }
}
function getAll(){
  return Storage.getObject(location);
}
function store(todos){
  Storage.setObject(location,todos);
}
function update(id,obj){
  const todos = getAll().map((todo)=>{
    if(todo.id === id){
      return Object.assign(todo,obj);
    }else{
      return todo;
    }
  });
  store(todos);
}
function destroy(id){
  const leftTodos = getAll().filter((todo)=>{
    return todo.id !== id;
  });
  store(leftTodos);
}
function add(todo){
  var todos = getAll();
  todos = todos.concat([todo]);
  store(todos);
}
const TodoStore = {init,getAll,update,destroy,add};
export default TodoStore;
