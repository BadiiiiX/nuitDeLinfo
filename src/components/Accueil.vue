<!-- Frame 4->6 -->
<template>

  <main>
    <div>

      <section>
        <img class="img" src="image.png">
        <p class="txt"> Lorem ipsum</p>
      </section>

      <section class="art">
        <h2> Titre de la section </h2>
        <article>

          <section class="test">
            <div>
              <h3> Titre de la section </h3>
              <p>contenuuuuuuuuuu</p>
            </div>
            <div>
              <img class="img_mascotte" src="../assets/lopotichat_beau.svg">
            </div>
          </section>
          <p> lorem ipsum </p>

          <section class="test">
            <img class="img_mascotte" src="../assets/lopotichat_beau.svg">
            <p> "Citation" </p>
          </section>
        </article>


      </section>

    </div>
  </main>
</template>

<script>
export default {
  name: "Frame3-7"
}
</script>

<style scoped>
  .txt{

  }

  .img{
    display: flex;
    align-content: center;

    width:5vw;
    height:5vh;
  }

  .test{
    display: flex;

    border-style: solid;
    border-radius: 12px;
    border-color: white;

    justify-content: space-between;
    padding: 10px 20px 10px 20px;
  }

  .img_mascotte{
    width: 20vw;
    height: 20vw;
  }


</style>