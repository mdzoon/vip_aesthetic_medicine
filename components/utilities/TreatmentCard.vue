<template>
    <div class="card">
        <div class="card-header" :id="listName + 'header-' + id">
            <h5 class="mb-0">
                <button
                    class="btn btn-accordion collapsed"
                    data-toggle="collapse"
                    :data-target="'#' + listName + id"
                    aria-expanded="false"
                    :aria-controls="listName + id"
                >   
                    <slot name="header"></slot>
                </button>
            </h5>
        </div>
        <div :id="listName + id" class="collapse" :aria-labelledby="listName + 'header-' + id" :data-parent="'#treatment-accordion-' + id">
            <div class="card-body">
                <ul>
                    <slot name="body"></slot>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        listName: String
    }    
}
</script>