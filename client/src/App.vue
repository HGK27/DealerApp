<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LeftBar from './components/LeftBar.vue'
import basket from './components/icon/basketIcon.vue'

</script>

<template>
  <header>
    <span class="basket">
      <basket/>
      <span class="basket-text">Sepetiniz</span>
      <span class="basket-count">{{$store.state.basketList.length}}</span>
    </span>
  </header>
    <div class="left">
      <LeftBar/>
    </div>
    <div class="right">
      <RouterView />      
    </div>


</template>

<style scoped lang="scss">

.right{
  margin: 10px 0 0 220px;
  max-width: 1100px;
}
header{
width: 100%;
height: 100px;
background: #fff;
box-shadow: 2px 2px 5px rgba(40, 40, 40, 0.5);
display: flex;
justify-content: flex-end;
align-items: center;
.basket{
  padding: 5px 15px;
  background-color: #151c27;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 15px;
  color:white;
  cursor:pointer;

  .basket-text{
    margin-left: 5px;
    font-size: 24px;
    font-weight: bold;
  }
  .basket-count{
    margin-left: 5px;
    font-size: 24px;
    font-weight: bold;
  }
}
}

</style>
