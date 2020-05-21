<template>
    <div class="treatment-wrapper">
        <img :src="require(`@/assets/images/${treatment.background}`)" class="custom-background" :alt="treatment.background | imageAlt" />
        <h3>{{treatment.name}}</h3>
        <div class="row">
            <div class="col-md-6 text-wrapper">
                <img :src="require(`@/assets/images/${treatment.image}`)" class="img-fluid" :alt="treatment.image | imageAlt" />
            </div>
            <div class="col-md-6 text-wrapper">
                <div>{{treatment.description}}</div>
                <div>
                    <h6>Areas Treated</h6>
                    <ul id="treatments-list">
                        <li v-for="(area, index) in treatment.areas" :key="index">
                            {{area}}
                        </li>
                    </ul>
                    <h6>Contradictions</h6>
                    <ul id="contraindications-list">
                        <li v-for="(contraindication, index) in treatment.contraindications" :key="index">
                            {{contraindication}}
                        </li>
                    </ul>
                    <h6>Before injection advice</h6>
                    <ul id="before-list">
                        <li v-for="(beforeAdvice, index) in treatment.beforeAdvices" :key="index">
                            {{beforeAdvice}}
                        </li>
                    </ul>
                    <h6>After care advice</h6>
                    <ul id="after-list">
                        <li v-for="(afterAdvice, index) in treatment.afterAdvices" :key="index">
                            {{afterAdvice}}
                        </li>
                    </ul>
                    <h6>Side effects</h6>
                    <ul id="side-effects-list">
                        <li v-for="(sideEffect, index) in treatment.sideEffects" :key="index">
                            {{sideEffect}}
                        </li>
                    </ul>
                    <h6>What does the procedure involve?</h6>
                    <ul id="procedure-list">
                        <li v-for="(procedureStep, index) in treatment.procedureSteps" :key="index">
                            {{procedureStep}}
                        </li>
                    </ul>
                </div>
                <button class="btn btn-danger my-2 my-sm-0" type="submit">
                    <i class="material-icons md-24">event_available</i>
                    <div class="gutter"></div>
                    Book Your Consultation
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        treatment: Object
    },
    filters: {
        imageAlt(value) {
          return value.split('.').shift().replace(/-/g, ' ');
        }
    }
}
</script>

<style lang="scss" scoped>
.treatment-wrapper {
    padding: 2rem 0;
    position: relative;
    .custom-background {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        z-index: -1;
    }
    h3 {
        font-family: 'ITC Avant Garde Std XLt';
        font-weight: $font-weight-light;
        font-style: normal;
        letter-spacing: 10px;
    }
    .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>