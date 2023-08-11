<template>
  <div class="container">
    <div class="working--space">
      <div class="list">
        <div class="list__header">
          <p>Заголовок списка</p>
          <div class="list__btns">
            <img src="@/images/plus.svg" alt="">
            <img src="@/images/dots.svg" alt="">
          </div>
        </div>
        <div class="list__body">

        </div>
      </div>
      <div class="add--list">
        <img src="@/images/plus.svg" alt="Плюс" style="margin-right: 7px;">
        <p>Добавить список</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  background-color: #406B96;
  border-radius: 14px;
  height: 660px;
  margin: 12px;
  color: #123456;
}
.working--space{
  display: flex;
  align-items: baseline;
  padding: 12px;
}
.add--list{
  display: flex;
  width: 333px;
  border-radius: 8px;
  background-color: #B6CEE5;
  padding: 11px;
}
.list{
  margin: 7px 27px 0 11px;
  width: 311px;
  background-color: #fff;
}
</style>