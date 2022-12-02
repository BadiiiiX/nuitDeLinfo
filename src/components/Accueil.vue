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
      <article class="art">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Enim lobortis scelerisque fermentum dui faucibus in ornare quam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eros donec ac odio tempor orci. Convallis convallis tellus id interdum velit laoreet.
        </p>
        <div class="bloc"></div>
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


    <!--<section>
      <h2> Titre de la section </h2>
      <article>
        <section class="test">
          <div>
            <p> Contenuuuuu </p>
          </div>
          <div>
            <img class="img_mascotte" src="../assets/lopotichat_beau.svg">
          </div>
        </section>
      </article>

      <p> Lorem ipsum </p>
    </section>

    <section>
      <h2> Titre de la section </h2>
      <article>
        <section class="test">
          <div>
            <img class="img_mascotte" src="../assets/lopotichat_beau.svg">

          </div>
          <div>
            <p>"Citation"</p>
          </div>
        </section>
      </article>

      <p> Lorem ipsum </p>
    </section>-->

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
    margin: 8px 5px;
  }

  .art{
    display: flex;
    justify-content: space-between;
  }

  .bloc{
    display: block;
    background-color: red;
    width: 200px;

  }

  .test{
    display: flex;
    justify-content: space-between;

    border-style: solid;
    border-radius: 12px;
    border-color: white;

    padding: 10px 20px 10px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .img_mascotte{
    width: 20vw;
    height: 20vw;
  }



</style>