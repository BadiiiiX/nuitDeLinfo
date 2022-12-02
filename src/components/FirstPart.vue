<script setup>

import LogoLoPotiChatChapoCapote from './logo/LogoLoPotiChatChapoCapote.vue'

import {showCapote} from "../assets/utils";
import LogoCapote   from "./logo/logoCapote.vue";
</script>

<template>

  <div class="context">

    <div class="content">

      <h3 id="anchorTitle" class="title h1" data-aos="fade-up">
        Rapports sexuels : tout savoir sur le sujet.
      </h3>

      <p class="sentence" data-aos="fade-up">
        Quand on parle de « rapport sexuel », « relation sexuelle » ou encore « faire l’amour », on pense souvent à la
        pénétration vaginale hétérosexuelle, mais c’est bien plus que ça… Il existe de très nombreuses possibilités de
        rapports sexuels mais qui ont tous pour idéal de terminer par un orgasme sexuel. Pour se protéger, des moyens de
        contraception sont nécessaires. Mais se protéger de quoi ?
      </p>

      <div class="flex">
        <p data-aos="fade-up">Une IST, ou infection sexuellement transmissible est comme son nom l’indique, une
          infection transmise lors de relations sexuelles, avec ou sans pénétration. Ces vilaines bactéries n’ont pas
          pour but d’être vos amies mais bien de vous faire mal ; voici différents dommages :</p>
        <div class="image imgCapote" data-aos="fade-right"  @click="showCapote">
          <LogoLoPotiChatChapoCapote/>
        </div>
      </div>

      <p class="sentence" data-aos="fade-up">
        Irritation, démangeaison, rougeur, brûlure, lésion ou encore des boutons aux organes génitaux,pPerte
        inhabituelle au niveau du vagin (organe féminin de copulation), de la verge ou de l’anus, brûlure lors de la
        miction (urine), douleur ou brûlure ressentie lors d’un rapport sexuel, Douleur dans le bas-ventre, fièvre et
        maux de tête.
      </p>

    </div>

  </div>

</template>

<style scoped>

/* Mise en page pour mobile */
@media (max-width: 480px) {
  .imgCapote {
    display: none;
  }
}
.context {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, var(--blue-two), var(--blue-three));
  color: cornsilk;
}

.content {
  width: 60%;
  margin: 0 auto;
}

.title {
  padding: 6rem 0
}

.flex {
  display: flex;
  flex-direction: row;
}

p {
  font-size: 130%;
  text-align: justify;
  padding: 1rem;
}

.sentence {
  display: block;
}

.image {
  width: 100%;
  padding: 0 4rem 2rem 3rem;
}

</style>