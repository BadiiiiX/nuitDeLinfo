<script setup>


import LogoWavesTop from './logo/LogoWavesTop.vue';
import {showCapote} from "../assets/utils";
import LogoCapote   from "./logo/logoCapote.vue";
</script>

<template>
  <div class="context">

    <div class="content">

      <h3 class="title h1" data-aos="fade-up">Chaque jour, plus d'un million de personnes contractent une IST.</h3>

      <p class="sentence" data-aos="fade-right"> Ce chiffre est énorme et pourtant bien réel, un million de personnes
        contractent le VIH (Sida), les hépatites B et C, l’herpès… et la liste est longue ! Pour empêcher que ça se
        produise, voici quelques conseils : </p>

      <p class="sentence" data-aos="fade-left">- Utiliser un <span  @click="showCapote">préservatif</span> lors de chaque rapport sexuel et avec chaque
        partenaire tant que vous n’avez pas la certitude qu’il n’est pas porteur d’une IST. <br>
        - Se faire dépister des IST de manière régulière si vous avez plusieurs partenaires et à chaque fois que vous
        souhaitez arrêter le préservatif avec un nouveau partenaire régulier. <br>
        - Se faire vacciner contre l’hépatite B et les infections à papillomavirus (virus très communs qui peuvent
        infecter la peau et les muqueuses) </p>

    </div>

    <LogoWavesTop class="waves"/>
  </div>

</template>

<style scoped>

.context {
  position: relative;
  min-height: 95vh;
  width: 100vw;
  background: linear-gradient(to bottom, var(--blue-three), var(--blue-four));
  color: cornsilk;
}

.content {
  width: 60%;
  margin: 0 auto;
}

.title {
  padding-top: 3rem;
}

.subtitle {
  padding: 0 0 6rem 4rem;
}

p {
  font-size: 130%;
  text-align: justify;
  padding: 2rem;
}

.sentence {
  display: block;
}

.waves {
  position: absolute;
  bottom: -6%;
  fill: var(--blue-four);
  background-color: white;
}

</style>