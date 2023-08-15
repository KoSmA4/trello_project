<template>
  <div class="task">
    <div class="task__top">
      <div class="task__header" contenteditable="" style="cursor: text" @blur="headerChanged">
        {{ task.header }}
      </div>
      <!--Временно, эта кнопка с точками будет удалять таск-->
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
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // Удаляю таск в родителе
    deleteTask(){
      this.$emit('deleteTask', this.task)
    },
    headerChanged($event){
      this.task.header = $event.target.innerHTML
      this.$emit('noteUpdated', this.task)
    },
    descriptionChanged($event){
      this.task.description = $event.target.innerHTML
      this.$emit('noteUpdated', this.task)
    },
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