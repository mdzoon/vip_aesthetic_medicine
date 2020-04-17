<template>
  <div>

    <div class="container-fluid hero-banner">
      <div class="container">
        <a class="cta-container" href="#">
          <button class="btn btn-danger my-2 my-sm-0" type="submit">Book Your Consultation</button>
        </a>
      </div>
    </div>
    
    <div class="container content-wrapper">
      <h1 class="title">
        vip_aesthetic_medicine
      </h1>
      <h2 class="subtitle">
        client_portfolio
      </h2>
      <p>This is the first page</p>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
.hero-banner {
  background: url("~assets/images/hero.webp") no-repeat center center;
  background-size: cover;
  height: 480px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    .btn-danger {
      background-color: $colour-primary;
        &:hover, &:active, &:focus {
          background-color: red;
      }
    }
  }
}
</style>
