<template>
  <div>

    <aside class="container-fluid hero-banner">
      <div class="container">
        <a class="cta-container" href="#">
          <BookingButton />
        </a>
      </div>
    </aside>
    
    <main class="container-fluid content-wrapper">
      <h1 class="container title">Welcome to VIP AESTHETIC MEDICINE</h1>
      <section class="container" id="about-us">
        <div class="section-text">VIP AESTHETIC MEDICINE is a private Aesthetic Medicine practice 2 minutes’ drive from the Royal Bolton Hospital led by fully registered, insured and experienced Healthcare professional (BSc Hons MBPsS) who has been trained by doctors and nurses in Aesthetic Medicine and by cosmetologists in Beauty & Holistic treatments.</div>
        <div class="section-text">We offer minimally invasive non-surgical anti-aging procedures as well as non-invasive beauty and holistic treatments to help people restore a revitalized and healthy appearance and enhance their self-confidence. We pride ourselves in using the latest technology and scientific innovation available to help you get the results you deserve without having to endure extensive pain or the risks of general anesthesia, scalpels, sutures, or scars. We believe in applying all technology available to yield the greatest results with minimizing risk to all clients.</div>
      </section>
      <section id="offers">
        <div class="container section-text">
          The presentation and visual image counts in a modern society. As social beings, we are permanently under scrutiny and scrutinising others. The impression we give, at least at first contact, is a combination of our way of communicating, our attitude, but mainly our visual presence. Here at VIP AESTHETIC MEDICINE we would like to help you achieve your goals whether they are aesthetic enhancements, slowing down skin aging process, stress reduction or relaxation. We offer a wide selection of beauty, aesthetic and holistic services such as:
        </div>
        <div class="row offers-wrapper">
          <div class="offer-wrapper">
            <div class="container">
              <div class="offer-image-column">
                <img src="https://img.icons8.com/dusk/64/000000/acupuncture.png" alt="" />
              </div>
              <div class="offer-details-column">            
                <h3>AESTHETIC MEDICINE</h3>
                <ul>
                <li>Dermal fillers (Lips, Cheeks, Jawline, Chin, Perioral, Nasolabial, Nose, Tear trough & midface as well as full face sculpting</li>
                <li>Antiwrinkle injections (face)</li>
                <li>PROFHILO injections (face & hands)</li>
                <li>PDO threads (face & body)</li>
                <li>Needle mesotherapy (face and body)</li>
                <li>Plasma pen (face and body)</li>
                </ul>
            </div>
          </div>
          </div>
          <div class="offer-wrapper right">
            <div class="container">
              <div class="offer-image-column">
                <img src="https://img.icons8.com/dusk/64/000000/pedicure.png" alt="" />
              </div>
              <div class="offer-details-column">
                <h3>COSMETOLOGY</h3>
                  <ul>
                  <li>Microneedling</li>
                  <li>Dermaplaning</li>
                  <li>Microdermabrasion</li>
                  <li>Electrotherapy (High Frequency, Desincrustation, Iontophoresis, EMS, Microcurrent)</li>
                  <li>Sonophoresis</li>
                  <li>Face workout facial</li>
                  <li>Lymphatic drainage facial</li>
                  <li>Teen anti-acne facial</li>
                  <li>VIP signature facial - Silver</li>
                  <li>VIP Signature - Gold</li>
                  <li>VIP Signature - Platinum</li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="offer-wrapper">
            <div class="container">
              <div class="offer-image-column">
                <img src="https://img.icons8.com/dusk/64/000000/alternative-herbal-medicine.png" alt="" />
              </div>
              <div class="offer-details-column">            
                <h3>HOLISTIC</h3>
                  <ul>
                <li>Hot stone massage</li>
                <li>Anticellulite massage</li>
                <li>Swedish massage</li>
                <li>Lymphatic drainage massage</li>
                <li>Face & scalp massage</li>
                <li>Thermo-auricular therapy</li>
                <li>REIKI</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container" id="contact">
        <h2 class="subtitle">
          Contact
        </h2>
        <p>Contact details</p>
      </section>
    </main>

  </div>
</template>

<script>
import BookingButton from '@/components/utilities/BookingButton.vue'

export default {
  components: {
    BookingButton
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
.offers-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  .offer-wrapper {
    flex: 1;
    width: 100%;
    background-color: $colour-background-primary-faint;
  }
  .offer-wrapper .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30rem;
  }
  .offer-wrapper.right {
    background-color: $colour-background;
  }
  .offer-wrapper.right .container {
    flex-direction: row-reverse;
  }
  .offer-image-column,
  .offer-details-column {
    flex: 1;
  }
  .offer-image-column {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 20rem;
      width: auto;
    }
  }
}

</style>
