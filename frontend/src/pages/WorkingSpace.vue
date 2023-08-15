<template>
  <div class="container">
    <TaskList></TaskList>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  components: {TaskList, Task},
  data() {
    return {
      tasks: [{header: 'Заголовок-тест', description: 'Описание-тест'}]
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #406B96;
  border-radius: 14px;
  height: 660px;
  margin: 12px;
  color: #123456;
  padding: 23px;
}
</style>