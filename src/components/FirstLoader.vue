
<script setup>

import LogoSida    from './logo/LogoSida.vue';
import $           from 'jquery'
import {onMounted, defineEmits} from "vue";

const emits = defineEmits(['endanim'])

onMounted(() => {
  loadFirstLoader();
})

const loadFirstLoader = () => {
  console.log("Loaded")
  let i1 = $("#intro .last-letters").get(0).getBoundingClientRect();
  let i2 = $("#intro2 .last-letters").get(0).getBoundingClientRect();
  let i3 = $("#intro3 .last-letters").get(0).getBoundingClientRect();
  $(".last-letters").css({
                           width: "0",
                         })

  let x = document.getElementById("intro");
  x.addEventListener("webkitAnimationEnd", () => {
    console.log("end");
    $("#intro .last-letters").css({
                                    width: i1.width + 5,
                                  })
  });

  let y = document.getElementById("intro2");
  y.addEventListener("webkitAnimationEnd", () => {
    console.log("end");
    $("#intro2 .last-letters").css({
                                     width: i2.width + 5,
                                   })
  });

  let z = document.getElementById("intro3");
  z.addEventListener("webkitAnimationEnd", () => {
    console.log("end");
    $("#intro3 .last-letters").css({
                                     width: i3.width + 5,
                                   })

    document.getElementById("intro3").addEventListener("transitionend", () => {

      $(".loader").addClass('zoom')
      setTimeout(() => {
        $(".loader").fadeOut()
        setTimeout(() => {
          $("body").removeClass("ov-di")
        }, 500)
      }, 50)

      emits('endanim', 1)

    });


  });
}


</script>

<template>
  <body class="ov-di">
  <div class="container">

    <div class="main">

      <div class="loader">

        <LogoSida id="logo"/>

        <span class="first-letters" id="intro">S<span class="last-letters">ida</span></span><span class="first-letters"
                                                                                                  id="intro2">I<span
          class="last-letters">nfo</span></span><span class="first-letters" id="intro3">S<span class="last-letters">ervice</span></span>


      </div>
    </div>
  </div>
  </body>
</template>


<style scoped>
#intro {
  animation: letter .9s forwards;
  text-align: center;
}

#intro2 {
  animation: letter2 .9s forwards;
  text-align: center;
}

#intro3 {
  animation: letter3 .9s forwards;
  text-align: center;
}

.container {
  display: flex;
  height: 98vh;
  width: 100%;

}

.main {
  margin: auto;
}

.first-letters {
  font-size: 72px;
  font-weight: bold;
}

.last-letters {
  font-size: 36px;
  font-weight: 400;
  display: inline-block;
  overflow: hidden;
  transition: all 1s;
}

@keyframes letter {

  0% {
    margin: 0;
  }

  100% {
    margin-right: 25px;
  }
}

@keyframes letter2 {

  0% {
    margin: 0;
  }

  100% {
    margin-right: 25px;
    margin-left: 25px
  }
}

@keyframes letter3 {

  0% {
    margin: 0;
  }

  100% {
    margin-left: 25px;
  }
}

.text-center {
  text-align: center;
}

.loader {
  transition: transform .5s;
}

.zoom {
  transform: scale(90);
  transition: transform .5s;
}

.ov-di {
  overflow: hidden;
}
</style>