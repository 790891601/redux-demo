import React from "react"
import Header from "../containers/Header"
import MainSection from "./MainSection"

export default () => {
  return <section className="todoapp">
    <Header />
    <MainSection />
  {/* <header class="header">
      <input class="new-todo"
          autofocus autocomplete="off"
          placeholder="What needs to be done?">
  </header>
  <section class="main" >
      <ul class="todo-list">
          <li class="todo">
              <div class="view">
                  <input class="toggle" type="checkbox">
                  <label> </label>
                  <button class="destroy"></button>
              </div>
              <input class="edit" type="text">
          </li>
      </ul>
  </section>
  <footer class="footer">
      <span class="todo-count">
          <strong></strong>left
      </span>
      <ul class="filters">
          <li><a href="#/all" >All</a></li>
          <li><a href="#/active" >Active</a></li>
          <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed"> remaining">
          Clear completed
      </button>
  </footer> */}
</section>
}