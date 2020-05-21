<template>
    <div :id="'treatment-accordion-' + treatment.id">
        <div class="card">
            <div class="card-header" :id="'treatments-list-header' + treatment.id">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" :data-target="'#treatments-list' + treatment.id" aria-expanded="true" :aria-controls="'treatments-list' + treatment.id">
                        Areas Treated
                    </button>
                </h5>
            </div>
            <div :id="'treatments-list' + treatment.id" class="collapse show" :aria-labelledby="'treatments-list-header' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(area, index) in treatment.areas" :key="index">  
                            {{area}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <h6>Contradictions</h6>
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
        </ul> -->
    </div>
</template>

<script>
export default {
    props: {
        treatment: Object
    }
}
</script>