<template>
  <div id="app">
  <div class="container">
    <AddTodo/>
    <FilterTodos/>
    <Todo/>
  </div> 
  </div>
</template>

<script>

import Todo from './components/Todos'
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'
export default {
  name: 'App',
  components: {
    
    Todo,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
body{

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #ee88ee;
}
.container{
  max-width: 1100px;
  margin:auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
