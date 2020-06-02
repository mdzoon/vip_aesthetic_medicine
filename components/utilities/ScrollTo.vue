<template>
    <div>
        <div id="top" style="display: none;"></div>
        <a href="#" 
            id="return-top"
            v-scroll-to="{ 
                el: '#top',
                x: false,
                y: true
            }"
            :class="{ 'return-top--hidden': hideScrollTo }"
        >
            <i class="material-icons-outlined md-36">expand_less</i>
        </a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            hideScrollTo: true,
            lastScrollPosition: 0
        }
    },
    methods: {
        checkPosition () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
            return;
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
            return
        }
        this.hideScrollTo = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
        }
    },
    mounted () {
        window.addEventListener('scroll', this.checkPosition)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.checkPosition)
    }
}
</script>

<style lang="scss" scoped>
#return-top {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 50px;
    height: 50px;
    z-index: 9999;
    border-radius: $border-radius;
    background-color: rgba(37, 37, 37, 0.5);
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
#return-top.return-top--hidden {
    display: none;
}
</style>