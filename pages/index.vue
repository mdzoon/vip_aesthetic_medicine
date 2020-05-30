<template>
  <div>

    <div class="container-fluid hero-banner">
      <div class="container">
        <a class="cta-container" href="#">
          <button class="btn btn-danger my-2 my-sm-0" type="submit">
            <i class="material-icons md-18">event_available</i>
            <div class="gutter"></div>
            Book Your Consultation
          </button>
        </a>
      </div>
    </div>
    
    <div class="container content-wrapper">
      <section id="about-us">
        <h1 class="title">Welcome to VIP AESTHETIC MEDICINE</h1>
        <h2 class="subtitle">
          About Us
        </h2>
        <p>VIP AESTHETIC MEDICINE is both Nurse & Beauty Therapist-led private aesthetic medicine practice 2 minutes’ drive from the Royal Bolton Hospital which offers minimally invasive non-surgical procedures as well as non-invasive cosmetic and beauty treatments to help people restore a revitalized and healthy appearance and enhance their self-confidence. We pride ourselves in using the latest technology and scientific innovation available to help you get the results you deserve without having to endure extensive pain or the risks of general anesthesia, scalpels, sutures, or scars. We believe in applying all technology available to yield the greatest results with minimizing risk to all clients.</p>
      </section>
      <section id="contact">
        <h2 class="subtitle">
          Contact
        </h2>
        <p>Contact details</p>
      </section>
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
          background-color: $colour-primary-darker;
      }
    }
  }
}
</style>
