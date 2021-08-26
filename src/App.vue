<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <!-- <img :src="getImage('test.png')"/> -->
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
  name: 'App',
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data(){
    return{
      todoItems: []
    };
  },
  created(){
    if(localStorage.length > 0){
      for(let i =0; i < localStorage.length; i++){
        if(localStorage.key(i) != "loglevel:webpack-dev-server"){
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods:{
    addTodo(todoItem){
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  computed:{
  }, 
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
