<template>
  <div class="home-container">
    <TaskList/>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  components: {TaskList, Task},
  // data() {
  //   return {
  //     tasks: [{header: 'Заголовок-тест', description: 'Описание-тест'}]
  //   }
  // }
}
</script>

<style scoped>
.home-container {
  border-radius: 14px;
  min-height: 125px;
  color: #123456;
  background-color: #406B96;
  margin: 12px;
  padding: 23px 23px 13px 23px;
}
</style>