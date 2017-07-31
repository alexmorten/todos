import React from 'react';
import TodoStore from './services/TodoStore';
import './Todos.css';

class Todo extends React.Component {
  onClick = (e)=>{
    e.preventDefault();
    var todo = this.props.todo;
    todo.done = !todo.done;
    this.props.onClick(todo);
  }
  render(){
    var todo = this.props.todo;

    return(
      <div className={"todo-item-container " + (todo.done ? "finished" : "")} onClick={this.onClick}>
        <div className={"todo-item "+ (todo.done ? "finished" : "")} >
          <span>{todo.text} </span>

        </div>
        <div className="delete-item" onClick={()=>{this.props.delete(this.props.todo)}}><span>x</span></div>
      </div>
    )
  }
}
class AddTodoForm extends React.Component{
  state={
    text:""
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const text = this.state.text;
    if(text){
      const newTodo = {
        id:new Date().getTime(),
        text:text,
        done:false
      }
      this.props.add(newTodo);
      this.setState({text:""})
    }
  }
  render(){
    return(
      <form className="add-todo-form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="todo" value={this.state.text} onChange={(e)=>{this.setState({text:e.target.value})}}/>
        <button type="submit">ADD</button>
      </form>
    )
  }
}






class Todos extends React.Component {
  state={
    todos:[]
  }
  getTodos = ()=>{
    const todos = TodoStore.getAll();
    this.setState({todos});
  }
  addTodo = (todo)=>{
    TodoStore.add(todo);
    this.getTodos();
  }
  updateTodo = (todo)=>{
    TodoStore.update(todo.id,todo);
    this.getTodos();
  }
  deleteTodo = (todo)=>{
    TodoStore.destroy(todo.id);
    this.getTodos();
  }
  componentDidMount(){
    this.getTodos();
  }
  render(){
    const todoItems = this.state.todos.map((todo)=>{
      return <Todo key={todo.id} todo={todo} onClick={this.updateTodo} delete={this.deleteTodo}/>
    });
    return(
      <div className="todos-container">
        <div className="todo-items-container">
          {todoItems || "no todos yet"}
        </div>
        <AddTodoForm add={this.addTodo}/>
      </div>
    )
  }
}
export default Todos;
