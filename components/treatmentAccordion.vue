<template>
    <div :id="'treatment-accordion-' + treatment.id">
        <div class="card">
            <div class="card-header" :id="'treatment-areas-list-header-' + treatment.id">
                <h5 class="mb-0">
                    <button
                        class="btn btn-accordion"
                        data-toggle="collapse"
                        :data-target="'#treatment-areas-list-' + treatment.id"
                        aria-expanded="false"
                        :aria-controls="'treatment-areas-list-' + treatment.id"
                        click="toggleIcons"
                    >
                        <i class="material-icons" :style='{"display": ( showIcon? "none" : "block" )}'>add</i>
                        <i class="material-icons" :style='{"display": ( showIcon? "block" : "none" )}'>remove</i>
                        Areas Treated
                    </button>
                </h5>
            </div>
            <div :id="'treatment-areas-list-' + treatment.id" class="collapse" :aria-labelledby="'treatment-areas-list-header-' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(area, index) in treatment.areas" :key="index">  
                            {{area}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" :id="'contraindications-list-header-' + treatment.id">
                <h5 class="mb-0">
                    <button
                        class="btn btn-accordion"
                        data-toggle="collapse"
                        :data-target="'#contraindications-list-' + treatment.id"
                        aria-expanded="false"
                        :aria-controls="'contraindications-list-' + treatment.id"
                        click="toggleIcons"
                    >
                        <i class="material-icons" :style='{"display": ( showIcon? "none" : "block" )}'>add</i>
                        <i class="material-icons" :style='{"display": ( showIcon? "block" : "none" )}'>remove</i>
                        Contraindications
                    </button>
                </h5>
            </div>
            <div :id="'contraindications-list-' + treatment.id" class="collapse" :aria-labelledby="'contraindications-list-header-' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(contraindication, index) in treatment.contraindications" :key="index">
                            {{contraindication}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" :id="'before-list-header-' + treatment.id">
                <h5 class="mb-0">
                    <button
                        class="btn btn-accordion"
                        data-toggle="collapse"
                        :data-target="'#before-list-' + treatment.id"
                        aria-expanded="false"
                        :aria-controls="'before-list-' + treatment.id"
                        click="toggleIcons"
                    >
                        <i class="material-icons" :style='{"display": ( showIcon? "none" : "block" )}'>add</i>
                        <i class="material-icons" :style='{"display": ( showIcon? "block" : "none" )}'>remove</i>
                        Before injection advice
                    </button>
                </h5>
            </div>
            <div :id="'before-list-' + treatment.id" class="collapse" :aria-labelledby="'before-list-header-' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(beforeAdvice, index) in treatment.beforeAdvices" :key="index">
                            {{beforeAdvice}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" :id="'after-list-header-' + treatment.id">
                <h5 class="mb-0">
                    <button
                        class="btn btn-accordion"
                        data-toggle="collapse"
                        :data-target="'#after-list-' + treatment.id"
                        aria-expanded="false"
                        :aria-controls="'after-list-' + treatment.id"
                        @click="toggleIcons"
                    >
                        <i class="material-icons" :style='{"display": ( showIcon? "none" : "block" )}'>add</i>
                        <i class="material-icons" :style='{"display": ( showIcon? "block" : "none" )}'>remove</i>
                        After care advice
                    </button>
                </h5>
            </div>
            <div :id="'after-list-' + treatment.id" class="collapse" :aria-labelledby="'after-list-header-' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(afterAdvice, index) in treatment.afterAdvices" :key="index">
                            {{afterAdvice}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" :id="'side-effects-list-header-' + treatment.id">
                <h5 class="mb-0">
                    <button
                        class="btn btn-accordion"
                        data-toggle="collapse"
                        :data-target="'#side-effects-list-' + treatment.id"
                        aria-expanded="false"
                        :aria-controls="'side-effects-list-' + treatment.id"
                        @click="toggleIcons"
                    >
                        <i class="material-icons" :style='{"display": ( showIcon? "none" : "block" )}'>add</i>
                        <i class="material-icons" :style='{"display": ( showIcon? "block" : "none" )}'>remove</i>
                        Side effects
                    </button>
                </h5>
            </div>
            <div :id="'side-effects-list-' + treatment.id" class="collapse" :aria-labelledby="'side-effects-list-header-' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(sideEffect, index) in treatment.sideEffects" :key="index">
                            {{sideEffect}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" :id="'procedure-list-header-' + treatment.id">
                <h5 class="mb-0">
                    <button
                        class="btn btn-accordion"
                        data-toggle="collapse"
                        :data-target="'#procedure-list-' + treatment.id"
                        aria-expanded="false"
                        :aria-controls="'procedure-list-' + treatment.id"
                        @click="toggleIcons"
                    >
                        <i class="material-icons" :style='{"display": ( showIcon? "none" : "block" )}'>add</i>
                        <i class="material-icons" :style='{"display": ( showIcon? "block" : "none" )}'>remove</i>
                        What does the procedure involve?
                    </button>
                </h5>
            </div>
            <div :id="'procedure-list-' + treatment.id" class="collapse" :aria-labelledby="'procedure-list-header-' + treatment.id" :data-parent="'#treatment-accordion-' + treatment.id">
                <div class="card-body">
                    <ul>
                        <li v-for="(procedureStep, index) in treatment.procedureSteps" :key="index">
                            {{procedureStep}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>                  
    </div>
</template>

<script>
export default {
    props: {
        treatment: Object
    },
    data () {
        return {
            showIcon: false
        }
    },
    methods: {
        toggleIcons() {
            this.showIcon = !this.showIcon;
        }
    }
}
</script>
 
<style lang="scss" scoped>
.description-wrapper .card {
    border: none;
    border-radius: unset;
    background-color: transparent;
    .card-header {
        background-color: inherit;
        border: none;
        padding: 0;
        button {
            background-color: transparent;
        }
    }
}
</style>