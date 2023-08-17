<template>
  <div class="task">
    <div class="task__top">
      <div class="task__header" contenteditable="" style="cursor: text" @blur="headerChanged">
        {{ task.header }}
      </div>
      <img
          class="task__button"
          src="@/images/cross.svg"
          alt="dots"
          @click="deleteTask"
      >
    </div>
    <div class="task__description" contenteditable="" @blur="descriptionChanged">
      {{ task.description }}
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props, {emit}){
    const task = ref(props)
    const deleteTask = () => {
      emit('deleteTask', task)
    }
    const headerChanged = ($event) =>{
      task.header = $event.target.innerHTML
      emit('noteUpdated', task)
    }
    const descriptionChanged = ($event) =>{
      task.description = $event.target.innerHTML
      emit('noteUpdated', task)
    }
    return {
      deleteTask, headerChanged, descriptionChanged
    }
  }
}


</script>

<style scoped>
.task {
  width: 311px;
//height: 100px;
  border-radius: 6px;
  background-color: #B6CEE5;
  color: #123456;
  padding: 9px;
  margin-bottom: 15px;
}

.task__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.task__button {
  display: block;
  align-self: start;
  cursor: pointer;
}

.task__header {
  width: 270px;
  font-size: 16px;
  padding-bottom: 4px;
}

.task__description {
  font-size: 14px;
}
div:focus{
  outline: none;
}

</style>