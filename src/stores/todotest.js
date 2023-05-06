import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from 'quasar'
export default defineStore("useTodotest", {

  state:()=>({
      tasks:[],
  }),

  getters : {

  },

  actions: {

    insertTodotest(title){
      // db에 넣기 return id

      if(this.tasks){
        this.tasks.unshift({
          id: uid(),
          title,
          done:'N'
        });
      }else{
        this.tasks=[];
        this.tasks.push({
          id: uid(),
          title,
          done:'N'
        })
      }

      LocalStorage.set("todotest", this.tasks);
    },

    listTodotest(){
      this.tasks = LocalStorage.getItem("todotest");
    },

    removeTodotest(id){

      //this.tasks에서 id find해서 가져오기
      // 배열 안 오브젝트일때 idx
      const idx = this.tasks.findIndex(task=>task.id == id);
      //삭제 array.splice(시작 index, 제거 index, 추가 요소)
      this.tasks.splice(idx,1);
      LocalStorage.set("todotest", this.tasks);
    },
    editTodotest(item){
      //배열에서 수정하되 done은 'n'으로
      const idx = this.tasks.findIndex(task=>task == item);
      item.done = 'N';
      this.tasks.splice(idx,1,item);
      LocalStorage.set("todotest", this.tasks);
    },

    resetlist(){

    const todoItems = [];
    for (let i = 1; i <= 10; i++) {
      const newTodo = {
        id: uid(),
        title: `Todo__${i}`,
        done: 'N',
      };
      todoItems.push(newTodo);
    }

    // 로컬 스토리지에 추가된 todo 아이템을 저장
    LocalStorage.set("todotest", todoItems);

    }
  }
})
