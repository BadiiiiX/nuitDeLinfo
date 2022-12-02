<script setup>
import HomePage   from './components/HomePage.vue';
import FirstPart  from './components/FirstPart.vue';
import SecondPart from './components/SecondPart.vue';
import ThirdPart  from './components/ThirdPart.vue';
import FourthPart from "./components/FourthPart.vue";
import Loader     from "./components/Loader.vue";
import Jauge     from "./components/Jauge.vue";
import {showFirstTimeElement}     from "./assets/localStorageManager";
import AOS        from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const websiteVIH = 'https://lopotico.de/moche.html'


let k              = [86, 73, 72],
    n              = 0;
document.onkeydown = (e) => {
  console.log(e.keyCode);
  if (e.keyCode === k[n++]) {
    if (n === k.length) {
      location.href = websiteVIH; // à remplacer par votre code
      n             = 0;
      return false;
    }
  } else {
    n = 0;
  }
}

</script>

<template>
  <Loader v-if="showFirstTimeElement('loader')" />

  <header>
    <HomePage/>
  </header>

  <main>
    <FirstPart/>
    <SecondPart/>
    <ThirdPart/>
    <FourthPart/>


  </main>


</template>

<style scoped>

</style>
