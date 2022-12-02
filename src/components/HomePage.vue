<script setup>

import LogoLoPotiChatCapote from './logo/LogoLoPotiChatCapote.vue';
import LogoHomeCatTop       from './logo/LogoHomeCatTop.vue';
import LogoLoPotiChatMain   from "./logo/LogoLoPotiChatMain.vue";
import LogoLoPotiChatFleche   from "./logo/LogoLoPotiChatFleche.vue";
import LogoCapote   from "./logo/logoCapote.vue";
import LogoTroopers   from "./logo/logoCapote.vue";

import {showCapote} from "../assets/utils";

</script>

<template>
  <section id="hero">
    <div id="macapote" class="macapote">
      <LogoCapote/>
    </div>
    <img id="montroopers" class="macapote" src="@/assets/trooper.png" alt="Trooper"/>
    <div class="container">

      <div data-aos="fade-right" data-aos-duration="600"
           class="topCat" @click="showCapote">
        <LogoHomeCatTop/>
      </div>

      <div class="baseLogo" data-aos="zoom-in" data-aos-duration="600" @click="showCapote">
        <LogoLoPotiChatCapote/>
      </div>

      <a class="arrowCat" data-aos="fade-up" data-aos-offset="-50" href="#anchorTitle" >
        <LogoLoPotiChatFleche />
      </a>

      <div data-aos="fade-up" data-aos-duration="600" class="content">
        <h1 class="title">SexInfo</h1>
        <h2 class="subtitle">La prévention par le jeu.</h2>
      </div>
    </div>

  </section>
</template>

<style scoped>

#hero {
  width: 100vw;
  height: 100vh;
  position: relative;

  background: linear-gradient(to bottom, var(--blue-one), var(--blue-two));
}

.macapote{
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 20%;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 30%; /* Need a specific value to work */
  z-index: 99;
  transform: rotate(15deg);
}

.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.content::before {
  content: '';
  display: block;
  width: 7vw;
  height: 1vh;
  background-color: var(--violet-one);
}

.content {
  position: absolute;
  top: 40%;
}

.title {
  font-size: 4rem;
}

.subtitle {
  margin: 3.1rem 0 0;
  font-size: 2rem;
}

.baseLogo {
  position: absolute;
  width: 50vh;
  right: 10%;
  top: 10%;
}

.topCat {
  position: absolute;
  width: 40vw;
  left: -7%;
  top: 3%;
}

.arrowCat {
  display: block;
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
  bottom: 3%;
  width: 5%;
}



/* Mise en page pour mobile */
@media (max-width: 480px) {
  .topCat{
    display: none;
  }
  .baseLogo{
    width: 150px;
  }
  .arrowCat{
    width: 150px;
    left: 25%;
  }
  .content{
    width: 95%!important;
  }
}

</style>