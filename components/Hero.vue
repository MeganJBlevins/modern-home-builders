<template>
    <section id="home" class="hero" :style="{backgroundImage: `url(${options.heroImage.url})`}" :alt="options.heroImage.alt">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <h1 class="title mb-5 white">{{ options.heroText[0].text }}</h1>
                    <ul class="slider-btn">
                        <li><a class="main-btn light-rounded-two light-rounded-buttons" href="#team">OUR TEAM</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        options: Object,
    }
}
</script>