<template>
  <div class="task__list">
    <div class="header">
      <p>Заголовок списка</p>
      <div class="header__btns">
        <img
            src="@/images/plus.svg"
            alt="plus"
            style="padding-right: 9px;"
            @click="addTask">
        
      </div>
    </div>
    <div class="tasks">
      <Task
          v-for="(task, index) in tasks"
          :task="task"
          :key="index"
          @deleteTask="deleteTask"
          @noteUpdated="noteUpdated"
      />
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import httpClient from "@/services/http.service";

export default {
  components: {Task},
  data() {
    return {
      // Заменить hard-coded таски на таски от пользователя
      tasks: []
    }
  },
  methods: {
    async deleteTask(task) {
      const {status, data} = await httpClient.delete(`task/${task.id}`, {});
      if (status === 204) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
      }
    },
    async addTask(task) {
      const {status, data} = await httpClient.post('task', {});
      if (status === 201) {
        this.tasks.unshift(data)
      }
    },
    // Функция, которая отслеживает изменение в таске и отправляет запрос
    async noteUpdated(task) {
      const {status, data} = await httpClient.put(`task/${task.id}`, task);
      if (status === 200) {

      }
    }
  },
  async mounted() {
    const {status, data} = await httpClient.get('task');
    if (status === 200) {
      this.tasks = data;
    }
  }


}
</script>

<style scoped>
.task__list {

}

.header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 12px;
  width: 311px;
}

.header__btns {
  display: flex;
  align-items: center;
}
.tasks{
  display: flex;
  //flex: 0 2 650px;
  width: 650px;
  max-height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
}

</style>