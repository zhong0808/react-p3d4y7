import { makeAutoObservable } from "mobx";

const IndexStore = makeAutoObservable({
  todoList: [],
  get completedCount() {
    return this.todoList.filter(item => item.completed == true).length;
  },
  addItem(item) {
    this.todoList = [item, ...this.todoList];
  },
  removeItem(id) {
    this.todoList = this.todoList.filter(item => item.id !== id);
  },
  completedItem(id) {
    this.todoList = this.todoList.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }
});

export default IndexStore;
