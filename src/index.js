import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// const name = "Chynarbek"
// const age = 15

const Header = () => {
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." />
            <span  className="addBtn">Add</span>
        </div>
    )
}


const Body = () => {
  return  (<ul id="myUL">
  <li>Hit the gym</li>
  <li className="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
</ul>)
}


const App = () => {
  return (
    <div>
        <Header/>
        <Body/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector("#root"));
