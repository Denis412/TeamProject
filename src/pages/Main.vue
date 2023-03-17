<template>
  <q-page>
    <div class="preview">
      <div class="container flex items-center justify-between">
        <div class="preview__info">
          <h1 class="preview__title">
            <span class="preview__title-color">Dri</span>ed
            <span class="preview__title-weight">Fruits</span>
          </h1>
          <p class="preview__text">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной
          </p>
        </div>
        <img
          class="preview__img"
          src="../assets/main-img.png"
          alt="previev image"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
.preview {
  background: rgba(83, 141, 255, 0.05);
  padding: 50px 0;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 10px;
}
.preview__info {
  max-width: 700px;
}
.preview__title {
  font-size: 160px;
  line-height: 99%;
  margin-bottom: 30px;
}
.preview__title-color {
  color: #bc5d1d;
}
.preview__title-weight {
  font-weight: 900;
}
.preview__text {
  font-size: 23px;
  line-height: 211%;
  margin-bottom: 30px;

  color: #605f5f;
}
.preview__img {
  object-fit: cover;
  max-width: 750px;
  height: auto;
  width: 100%;
}

@media (max-width: 1150px) {
  .preview {
    padding: 0px 0;
  }
  .preview__title {
    font-size: 100px;
    margin-bottom: 15px;
  }

  .preview__text {
    margin-bottom: 15px;
  }
}

@media (max-width: 800px) {
  .preview {
    padding: 0px;
  }
  .preview__title {
    font-size: 64px;
  }

  .preview__text {
    font-size: 17px;
  }
}
</style>