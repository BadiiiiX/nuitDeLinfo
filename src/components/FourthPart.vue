<script setup>

import {showCapote} from "../assets/utils";
import LogoCapote   from "./logo/logoCapote.vue";
import $ from 'jquery'


$(".modal-close").click(() => {
  document.getElementById("show").classList.remove("openModal")
  document.getElementsByTagName("body")[0].classList.remove("ov-di")
})

let alreadyopen =false
window.onscroll = function(e) {
  console.log(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 2500) {

    if(!alreadyopen){
      $('#show').addClass('openModal')
      $("body").addClass('ov-di')
      alreadyopen = true
    }

  }

  if (document.documentElement.scrollTop > 5*100) {
    //$("#imgMe").addClass("animate__animated");
  }

  if (document.documentElement.scrollTop > 23*100) {
    //$(".timeline").addClass("animate__animated");
  }

  //console.log(document.documentElement.scrollTop);
};


let ans=0
let correct=0
$.post("http://lopotico.de/api.php",{"getActivitys": true}, function(data, status){
  const informations = JSON.parse(data)
  console.log(informations);
  let iquest = 0
  informations.forEach(element => {
    let questions = ""
    let irep = 0
    element.reponses.forEach(elem => {
      questions += `
                    <div>
                        <input type="radio" id="${iquest}-${irep}" name="${iquest}" value="${elem}">
                        <label for="${iquest}-${irep}">${elem}</label>
                    </div>`
      irep++;
    })

    $("#modalContent").append(`<div class="questionsContainer"><h3><b>${element.question}</b></h3> ${questions}<p id="${iquest}info"></p></div>`)
    $("#modalContent").addClass("ov-di")

    iquest++;

  });


  $("input").change((e) => {
    let id = e.currentTarget.id.split("-")
    $("input[name=" + id[0] + "]").prop("disabled", true)
    if(informations[e.currentTarget.name]['bonne_reponse'] == parseInt(id[1])+1){
      $("#"+e.currentTarget.name + "info").html("<b class='text-green'>Bonne réponse !</b>")
      correct++;
    }else{
      $("#"+e.currentTarget.name + "info").html("<b class='text-red'>Mauvaise réponse... ☹️</b><br><b>Conseil:</b> " + informations[e.currentTarget.name]['conseil'])
    }
    ans++

    if(ans == informations.length){
      $("#modalContent").html(`<h1 class="text-center">Tu as terminé le questionnaire !</h1><p>Tu as répondu à ${ans} questions et tu as eu <b>${correct}</b> réponse${correct > 1 ? 's':''} correcte${correct > 1 ? 's':''}.`)
    }
  })

});

</script>

<template>

  <div class="context">

    <div class="content">

      <div class="textContent">

        <p class="sentence" data-aos="fade-up">Le sexe c’est bien, mais connaître les risques… c’est mieux ! Si vous
          êtes en quête de réponses concernant votre vie sexuelle ou simplement par soif de connaissances, alors vous
          êtes au bon endroit.</p>
        <p class="sentence" data-aos="fade-left">Depuis des années, les sociétés constatent un manque d’information et
          de sensibilisation significatif des problèmes et risques liés à la vie sexuelle. <span  @click="showCapote">LopotiCode</span> s’est donc engagé
          à supprimer tout tabous et préjugés en développant un site éducatif et informatif.</p>
        <p class="sentence" data-aos="fade-right">Si notre site a réussi à vous apprendre quelques petites choses,
          n’hésitez pas à consulter le site Questionsexualite.fr ou sida-info-service.org, ou à en discuter par appel
          téléphonique avec le numéro gratuit 0800 840 800.</p>

        <div class="wrap">

          <div class="overlay" id="show">
            <div class="modal">
              <svg class="svgDeDingue" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="true">

                <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0"/>

                <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0"/>

                <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278"/>

                <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278"/>

              </svg>
              <div class="modal-inner">
                <div class="modal-close" style="color:black">X</div>
                <h3  style="color:black">Questionnaire</h3>
                <hr>
                <div id="modalContent" style="color:black"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>

</template>

<style>
.wrap {
  height:100%;
  top:0px;
}
.svgDeDingue {
  width:560px;
  position:relative;
  min-height:60vh;
  margin:0 auto;
  display:block;
}
.svgDeDingue line {
  stroke-width:2px;
  stroke:rgba(2,162,239,1);
}
.svgDeDingue #svg_2 {
  stroke-dasharray: 1680;
  stroke-dashoffset: 1680;
}
.svgDeDingue #svg_4 {
  stroke-dasharray: 1680;
  stroke-dashoffset: -280;
}
.svgDeDingue #svg_3 {
  stroke-dasharray: 1680;
  stroke-dashoffset: -580;
}
.svgDeDingue #svg_5 {
  stroke-dasharray: 1680;
  stroke-dashoffset: -280;
}
@keyframes anim-dash {
  90% {
    stroke:rgba(2,162,239,1);
  }
  100% {
    stroke:transparent;
    stroke-dashoffset: 0;
    opacity:1;
  }
}

.overlay {
  background:rgba(0,0,0,.5);
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  opacity:0;
  z-index:-999;
}
.modal {
  position:absolute;
  width:560px;
  min-height:60vh;
  left: 0;
  top: 95px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  /* transform:translate(-100%,-40%); */
}
.modal-inner {
  position:absolute;
  top:3px;
  left:3px;
  width:554px;
  min-height:60vh;
  background:rgba(255,255,255,1);
  opacity:0;
}
.modal-close {
  float:right;
  z-index:+2;
  color:#424242;
  cursor: pointer;
  margin:5px 5px 0 0;
  font-size:20px;
  font-weight:bold;
  text-decoration:none;
  text-align:center;
  line-height:20px;
  height:20px;
  width:20px;
}
.modal-inner h3 {
  display:block;
  text-align:center;
  font-size:22px;
  padding:20px 20px 10px 20px;
}
.openModal .modal, .openModal {
  animation:display .6s forwards;
  z-index:auto;
}
.openModal .modal svg line{
  animation: anim-dash .6s forwards;
  animation-delay:.6s;
}
.openModal .modal .modal-inner {
  animation:display .6s forwards;
  animation-delay:1s;
}
@keyframes display {
  to {
    opacity:1;
  }
}

#modalContent{
  max-height: 60vh;
  overflow-y: scroll;
  padding: 25px;
}
.questionsContainer:not(:first-child){
  margin-top: 25px;
}
h3{
  margin-top: 0;
}
.text-green{
  color: green;
}
.text-red{
  color: red;
}
</style>

<style scoped>
.context {
  position: relative;
  width: 100vw;
  background: linear-gradient(to bottom, var(--blue-four), var(--blue-five));
  color: cornsilk;
}

.content {
  width: 60%;
  margin: 0 auto;
}

.textContent {
  padding: 2rem 0;
}

p {
  font-size: 130%;
  text-align: justify;
  padding: 1rem;
}

.sentence {
  display: block;
}

</style>