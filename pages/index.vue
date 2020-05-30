<template>
  <div>

    <aside class="container-fluid hero-banner">
      <div class="container">
        <a class="cta-container" href="#">
          <button class="btn btn-danger my-2 my-sm-0" type="submit">
            <i class="material-icons md-18">event_available</i>
            <div class="gutter"></div>
            Book Your Consultation
          </button>
        </a>
      </div>
    </aside>
    
    <main class="container content-wrapper">
      <h1 class="title">Welcome to VIP AESTHETIC MEDICINE</h1>
      <section id="about-us">
        <h2 class="subtitle">
          About Us
        </h2>
        <div class="section-text">VIP AESTHETIC MEDICINE is both Nurse & Beauty Therapist-led private aesthetic medicine practice 2 minutes’ drive from the Royal Bolton Hospital which offers minimally invasive non-surgical procedures as well as non-invasive cosmetic and beauty treatments to help people restore a revitalized and healthy appearance and enhance their self-confidence. We pride ourselves in using the latest technology and scientific innovation available to help you get the results you deserve without having to endure extensive pain or the risks of general anesthesia, scalpels, sutures, or scars. We believe in applying all technology available to yield the greatest results with minimizing risk to all clients.</div>
        <div class="section-text">What makes us different from our competitors:
          <p>Real passion and interest in Aesthetic Medicine. We are very passionate about helping people look their best and feel great.</p>
          <p>Application of the Science of Beauty which is a concept that has been developed xyxyyxyxyxyyxy…....</p>
          <p>We are strong believers in compassion, equality and assistance to those in need! Therefore, we help people who would benefit from aesthetic treatments but cannot afford them by offering significant discounts:</p>
          <ul>
            <li>Unemployed jobseekers – proof of Job seeker allowance benefit required</li>
            <li>Full-time parents – proof of tax credit benefits required</li>
            <li>Students – enrolment or acceptance letter from an educational institution or NUS card required</li>
            <li>Retired – proof of pension receipt required</li>
          </ul>
        </div>
      </section>
      <section id="contact">
        <h2 class="subtitle">
          Contact
        </h2>
        <p>Contact details</p>
      </section>
    </main>

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
section {
  margin-top: 3rem;
  margin-bottom: 3rem;
  .section-text {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
