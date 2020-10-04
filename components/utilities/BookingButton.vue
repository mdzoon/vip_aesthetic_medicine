<template>
    <a href="#">
        <button class="btn btn-danger my-2 my-sm-0 booking-btn" type="button">
            <i class="material-icons-outlined">event_available</i>
            <div class="gutter"></div>
            Book Your Consultation
        </button>
    </a>
</template>

<style lang="scss" scoped>
.btn-danger {
    background-color: $colour-primary;
    &:hover, &:active, &:focus {
        background-color: $colour-primary-darker;
    }
}
.booking-btn {
    @include flex-elm;
}
</style>