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
                <div v-for="(service, index) in services.items" :key="index" class="col-lg-3 col-md-7 col-sm-9">
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
</style>
