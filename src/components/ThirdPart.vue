<script setup>

import LogoLoPotiCodeLoupe from './logo/LogoLoPotiCodeLoupe.vue'
import LogoWavesBottom     from "./logo/LogoWavesBottom.vue";

</script>

<template>

  <div class="context">
    <div class="content">

      <div class="flex">

        <div class="image" data-aos="fade-down-right">
          <LogoLoPotiCodeLoupe />
        </div>
        <p class="sentence" data-aos="fade-left">
          "Communiquer, partager : la solution à tous les problèmes."
        </p>

      </div>

    </div>
  </div>

  <LogoWavesBottom class="waveBottom"/>

</template>

<style scoped>

.context {
  position: relative;
  min-height: 40vh;
  width: 100vw;
  display: table-cell;
  vertical-align: middle;
}

.flex {
  display: flex;
  flex-direction: row;
}

.content {
  width: 60%;
  margin: 0 auto;
}

.image {
  width: 20%;
}

.sentence {
  margin: auto 0 auto auto;
  font-size: 130%;
  width: 60%;
}

.waveBottom {
  transform: rotate(180deg);
  position: relative;
  bottom: -8px;
  fill: var(--blue-four);
}


/* Mise en page pour mobile */
@media (max-width: 480px) {
  .context{
    background-color: white;
    padding-top: 30px;
  }
}
</style>