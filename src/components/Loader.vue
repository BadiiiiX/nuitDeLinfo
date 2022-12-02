<script setup>

import FirstLoader from './FirstLoader.vue'
import {ref}       from "vue";

const hideIt = ref(false);

document.body.style.overflow = 'hidden'

const hideAnim = () => {
  setTimeout(() => {
    document.body.style.overflow = ''
    hideIt.value                 = true;
  }, 600)
}

</script>

<template>

    <div id="loader" class="content" v-if="!hideIt">
      <FirstLoader @endanim="hideAnim"/>
    </div>

</template>

<style scoped>

.content {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow: hidden;
}
html{
  overflow: hidden;
}
.hide {
  display: none;
}

</style>