<template>
    <section id="services" class="features-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="section-title text-center pb-10">
                        <h3 class="title">{{ services ? services.primary.servicesTitle[0].text : 'Section Title' }}</h3>
                          <PrismicRichText :field="services.primary.servicesDescription" />
                    </div> <!-- row -->
                </div>
            </div> <!-- row -->
            <div class="row justify-content-center">
                <div v-for="(service, index) in services.items" :key="index" class="col-lg-6 col-md-6 col-sm-12">
                    <div class="single-features mt-40">
                        <div class="features-title-icon justify-content-between">
                            <div class="features-icon">
                                <i class="lni lni-calendar" :class="`lni-${service.icon}`"></i>
                            </div>
                            <h4 class="features-title">{{ service.service}}</h4>
                            
                        </div>
                        <div class="features-content">
                              <PrismicRichText :field="service.serviceList" />
                        </div>
                    </div> <!-- single features -->
                </div>
            </div> <!-- row -->
            <div v-if="services.primary.embedVideoUrl" class="row">
                <div class="mt-5 col-lg-8 offset-lg-2 col-sm-10 offset-sm-1 iframe-wrapper">
                    <iframe :src="services.primary.embedVideoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
</template>
<script>
export default {
    props: {
        services: Object,
    }
}
</script>
<style scoped>
.section-title {
    margin-bottom: 30px;
}
.iframe-wrapper {
   position: relative;
   width: 100%;
   height: 0;
   padding-bottom: 56.25%;
}
.iframe-wrapper iframe {
   position:absolute;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
}
</style>
