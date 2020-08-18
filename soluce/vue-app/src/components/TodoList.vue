<template>
  <div>
    <h1>Todo Lists</h1>
    <hr />
    <form
      class="form"
      v-if="!selectedList"
      @submit.prevent="createTodoList"
      id="create-todo-list-form"
    >
      <input type="text" placeholder="create a new list" v-model="newListName" />
      <button>+</button>
    </form>
    <form class="form" v-else @submit.prevent="createTodo" id="create-todo-form">
      <input type="text" placeholder="add a new todo" v-model="newTodo.text" />
      <input type="range" min="1" max="3" step="1" v-model.number="newTodo.priority" />
      <button>+</button>
    </form>
    <hr />
    <div id="wrapper">
      <ul id="todo-lists">
        <li
          :class="'list ' + (selectListIndex === i ? 'is-selected' : '')"
          @click="selectList(i)"
          v-for="(list, i) in todoLists"
          :key="i"
        >{{ list.name }}</li>
      </ul>
      <div id="list-details">
        <h2 class="title">{{selectedList ? selectedList.name : 'Select a list do view details'}}</h2>
        <p v-if="selectedList && !selectedListTodos.length">no todos in this list yet ...</p>
        <table v-if="selectedList" id="selected-list-todos">
          <thead>
            <tr>
              <th>task</th>
              <th>
                <span>priority</span>
                <div>
                  <span @click="sortBy('priority', 'asc')">asc |</span>
                  <span @click="sortBy('priority', 'desc')"> desc</span>
                </div>
              </th>
              <th>
                done
                <div>
                  <span @click="sortBy('is_done', 'asc')">asc |</span>
                  <span @click="sortBy('is_done', 'desc')"> desc</span>
                </div>
              </th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :class="'item ' + (todo.is_done ? 'is-done' : '')"
              v-for="(todo, i) in selectedListTodos"
              :key="i"
            >
              <td>
                <span class="text">{{todo.text}}</span>&nbsp;
              </td>
              <td>
                <span class="priority">{{todo.priority}}</span>&nbsp;
              </td>

              <td>
                <button @click="changeIsDoneStatus(todo._id)">{{todo.is_done ? 'todo' : 'done'}}</button>
              </td>
              <td>
                <button @click="removeTodo(todo._id)">remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return {
      newTodo: {
        text: "",
        priority: 1
      },
      newListName: "",
      selectedList: null,
      selectedListTodos: [],
      todoLists: []
    };
  },
  computed: {
    selectListIndex() {
      return this.todoLists.indexOf(this.selectedList);
    }
  },
  methods: {
    sortBy(type, dir) {
      console.log(this.selectedListTodos, type, dir);
      this.selectedListTodos.sort((a, b) => {
        return a[type] - b[type] ? -1 : 1;
      })
    },
    selectList(index) {
      if (this.selectedList && this.todoLists.indexOf(this.selectedList))
        this.selectedList = null;
      else {
        this.selectedList = this.todoLists[index];
        this.getListTodos();
      }
    },
    async getTodoLists() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/api/todo-lists"
      );
      this.todoLists = apiRes.data;
      console.log(apiRes);
    },
    async createTodoList() {
      if (!this.newListName) return;
      await axios.post(process.env.VUE_APP_BACKEND_URL + "/api/todo-lists", {
        name: this.newListName
      });
      this.getTodoLists();
    },
    async createTodo() {
      await axios.post(process.env.VUE_APP_BACKEND_URL + "/api/todos", {
        text: this.newTodo.text,
        priority: this.newTodo.priority,
        list: this.selectedList._id
      });
      this.newTodo = {
        text: "",
        priority: 1
      };
      this.getListTodos();
    },
    async getListTodos() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/api/todos/" + this.selectedList._id
      );
      this.selectedListTodos = apiRes.data;
    },
    async changeIsDoneStatus(id) {
      await axios.patch(
        process.env.VUE_APP_BACKEND_URL + "/api/todos/is-done/" + id
      );
      this.getListTodos();
    },
    async removeTodo(id) {
      await axios.delete(process.env.VUE_APP_BACKEND_URL + "/api/todos/" + id);
      this.getListTodos();
    }
  },
  created() {
    try {
      this.getTodoLists();
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#wrapper {
  display: grid;
  grid-template-columns: 25vw 1fr;
  min-height: 80vh;
}
.form {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#todo-lists {
  padding: 0;
  margin: 0;
  background: #c0c0c057;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
  align-items: center;
}
#list-details {
  padding: 0;
  margin: 0;
  background: #101;
  color: whitesmoke;
  padding: 40px;
}
#list-details .title {
  margin: 0;
}
#selected-list-todos {
  border: 1px solid whitesmoke;
  border-collapse: collapse;
  width: 80%;
  margin: auto;
}
#selected-list-todos .item.is-done {
  background: forestgreen;
}
#selected-list-todos .item {
  background: firebrick;
}
#selected-list-todos td,
#selected-list-todos th {
  border: 1px solid whitesmoke;
  border-collapse: collapse;
  padding: 7px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a,
.list:hover,
.list.is-selected {
  cursor: pointer;
  color: #42b983;
}
</style>
