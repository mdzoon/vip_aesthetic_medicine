<template>
    <div class="container-fluid header-wrapper sticky-top">
        <div class="row">
            <div class="container">
                <nav class="navbar navbar-expand-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="navbar-toggler-icon burger burger-squeeze" :class="{ open: isOpen }" @click="isOpen = !isOpen">
                            <div class="burger-lines"></div>
                        </div>
                    </button>
                    <a class="navbar-brand mr-0 mr-lg-3" href="/" > 
                        <div class="logo-container">
                            <img class="d-none d-lg-block" src="~assets/images/vipaesmed-logo.svg" alt="VIP Aesthetic Medicine Logo"/>
                            <span>VIP Aesthetic Medicine</span>
                        </div>        
                    </a>

                    <div id="navbar-menu" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/treatments">Treatments</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about-us">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
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
    methods: {
                
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
    }
    .nav-item{
        background-color: $colour-background;
    }
}

.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        height: 5rem;
        margin-bottom: 15px;
    }
    span {
        font-size: 2rem;
    }
    @media only screen and (max-width: 992px) {
        span {
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 400px) {
        span {
            font-size: 1.2rem;
        }
    }
}

#navbar-menu a {
    padding: 1rem;
}
</style>