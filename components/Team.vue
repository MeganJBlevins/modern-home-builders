<template>
    <section id="team" class="team-area pb-130">
        <div class="mb-4" >
            <div class="section-title text-center mb-100">
                <PrismicRichText :field="team.primary.teamTitle" />
                <PrismicRichText class="text"  :field="team.primary.teamDescription" />
            </div> <!-- section title -->
        </div>
        <div class="container">  
            <div class="row justify-content-center mb-3">
                <div v-for="(team, index) in haveImages" :key="index" class="col-lg-3 col-sm-6">
                    <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-image">
                            <img :src="team.teamImage.url" :alt="team.teamName">
                        </div>
                        <div class="team-content">
                            <h4 class="team-name">{{ team.teamName }}</h4>
                            <span class="sub-title">{{ team.teamTitle }}</span>
                        </div>
                    </div> <!-- single team -->
                </div>
            </div><!-- end row -->
            <div v-if="noImages.length > 0" class="row justify-content-center mb-3 no-pics">
                 <div v-for="(team, index) in noImages" :key="index" class="col-lg-3 col-sm-6">
                   <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-content">
                           <h4 class="team-name">{{ team.teamName }}</h4>
                            <span class="sub-title">{{ team.teamTitle }}</span>
                        </div>
                    </div> <!-- single team -->
                </div>
            </div>
        </div> <!-- container -->
    </section>
</template>
<script>
export default {
    props: {
        team: Object,
    },
    computed: {
        haveImages() {
            return this.team.items.filter(i => i.teamImage.url)
        },
        noImages() {
            return this.team.items.filter(i => !i.teamImage.url)
        }
    }
}
</script>

<style scoped>
.no-pics {
    margin-top: 130px;
}

@media screen and (max-width: 500px) {
    .no-pics .team-content {
        position: relative
    }
    .no-pics {
        margin-top: 0;
    }
}
@media screen and (min-width: 1500px) {
    .team-heading {
        background-position: center -100px;
    }
}
@media screen and (min-width: 2000px) {
    .team-heading{
        background-position: center -280px;
    }
}
@media screen and (min-width: 3000px) {
    .team-heading{
        background-position: center -350px;
    }
}
</style>