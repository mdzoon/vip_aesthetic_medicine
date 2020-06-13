<template>
    <div class="container-fluid header-wrapper sticky-top">
        <div class="row">
            <div class="container">
                <nav class="navbar navbar-expand-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <div id="burgerButton" class="navbar-toggler-icon burger burger-squeeze" :class="{ open: isOpen }" @click="isOpen = !isOpen">
                            <div class="burger-lines"></div>
                        </div>
                    </button>
                    <nuxt-link class="navbar-brand mr-0 mr-lg-3" to="/" > 
                        <div id="logo-container">
                            <img class="d-none d-lg-block" src="~assets/images/vipaesmed-logo.svg" alt="VIP Aesthetic Medicine Logo"/>
                            <span>VIP Aesthetic Medicine</span>
                        </div>        
                    </nuxt-link>

                    <div id="navbar-menu" class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item" @click="isOpen = !isOpen">
                                <nuxt-link
                                    to="/treatments"
                                    class="nav-link"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show"
                                >Treatments</nuxt-link>
                            </li>
                            <li class="nav-item" @click="isOpen = !isOpen">
                                <nuxt-link
                                    :to="{ path: '/',hash:'#about-us'}"
                                    class="nav-link"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show"  
                                    >About Us</nuxt-link>
                            </li>
                            <li class="nav-item" @click="isOpen = !isOpen">
                                <nuxt-link
                                    to="/#contact"
                                    class="nav-link"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show"                                    
                                >Contact</nuxt-link>
                            </li>
                            <li class="nav-item active" @click="isOpen = !isOpen">
                                <nuxt-link
                                    to="/"
                                    class="nav-link"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show"                                    
                                >Home <span class="sr-only">(current)</span></nuxt-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    methods: {
        onScroll(e) {
            if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
                document.getElementById("logo-container").classList.add("shrink");
            } else {
                document.getElementById("logo-container").classList.remove("shrink");
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.navbar {
    padding-left: 0;
    padding-right: 0;
    .navbar-toggler {
        height: 50px;
        width: 50px;
        padding: 0.25rem;
        border: none;
        &:hover,
        &:focus {
            outline-color: $font-colour-contrast;   
        }
    }
    .navbar-nav {
        margin-left: auto;
        @media only screen and (max-width: 767px) {
            min-height: 60vh;
            justify-content: center;      
        }
        .nav-item{
            background-color: $colour-background;
            min-height: unset !important;
        }        
        a {
            padding: .75rem;
        }
    }
}

#logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        height: 5rem;
        transition: $transition;
    }
    span {
        font-size: 2rem;
        transition: $transition;
    }
    @media only screen and (max-width: 992px) {
        span {
            font-size: 1.25rem;
        }
    }
    @media only screen and (max-width: 400px) {
        span {
            font-size: 1.2rem;
        }
    }
}
@media only screen and (min-width: 768px) {
    #logo-container.shrink {
        img {
            height: 2rem !important;
        }
        span {
            font-size: 1.25rem;
        }
    }
}
</style>