<!-- Frame 4->6 -->
<template>

  <div id="corps">
    <section>
      <h1> Titre de la section </h1>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eros donec ac odio tempor orci. Convallis convallis tellus id interdum velit laoreet.
          Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Odio eu feugiat pretium nibh ipsum consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eros donec ac odio tempor orci. Convallis convallis tellus id interdum velit laoreet.
        </p>
      </article>
      <article class="flex">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio vitae ultricies leo integer malesuada.
          Consectetur purus ut faucibus pulvinar. Turpis egestas maecenas pharetra convallis posuere morbi. Molestie at elementum eu facilisis sed odio morbi quis.
          Consectetur purus ut faucibus pulvinar. Turpis egestas maecenas pharetra convallis posuere morbi. Molestie at elementum eu facilisis sed odio morbi quis.
        </p>
        <div class="bloc"></div> <!-- A remplacer par l'image à animer -->
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eros donec ac odio tempor orci. Convallis convallis tellus id interdum velit laoreet.
          Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Odio eu feugiat pretium nibh ipsum consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eros donec ac odio tempor orci. Convallis convallis tellus id interdum velit laoreet.
        </p>
      </article>
    </section>


    <section class="sect">
      <h2> Titre de la section </h2>
      <article class="test">
        <div>
          <p> Contenuuuuu </p>
        </div>
        <div>
          <img class="img_mascotte" src="../assets/lopotichat_beau.svg">
        </div>
      </article>
    </section>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Viverra orci sagittis eu volutpat odio. Mauris vitae ultricies leo integer malesuada purus ut faucibus pulvinar.
      Turpis egestas maecenas pharetra convallis posuere morbi. Molestie at elementum eu facilisis sed odio morbi quis.
    </p>

    <section class="sect">
      <article class="test">
        <div>
          <img class="img_mascotte" src="../assets/lopotichat_beau.svg">
        </div>
        <div>
          <p> "Citation" </p>
        </div>
      </article>
    </section>

  </div>

</template>

<script>
export default {
  name: "Frame3-7"
}
</script>

<style scoped>
  #corps{
    width:90vw;
    margin: 0 auto;
  }

  article p{
    margin: 12px 0;
  }

  .bloc{
    display: block;
    background-color: red;
    width: 200px;

  }

  .test, .flex{
    display: flex;
    justify-content: space-between;
  }

  .sect{
    border-style: solid;
    border-radius: 12px;
    border-color: black;

    padding: 5px 15px 5px 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .img_mascotte{
    width: 15vw;
    height: 25vh;
  }

</style>