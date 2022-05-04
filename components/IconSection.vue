<template>
 <section class="showcase" ID="reviews">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="section-title text-center pb-10">
                            <h3>{{ icons ? icons.primary.title[0].text : 'Section Title' }}</h3>
                    </div> <!-- row -->
                </div>
            </div> <!-- row -->
        </div>
        <div class="container logos">
          <div v-for="(logo, index) in icons.items" :key="index" class="logo"> 
            <template v-if="logo.iconLink.link_type !== 'any'">
              <a class="logo link" :href="logo.iconLink.url" target="_blank" rel="nofollow">
                <img :src="logo.icon.url" style="border: 0;" :alt="logo.icon.alt" />
              </a>
            </template>
            <img v-else :src="logo.icon.url" alt="">
          </div>
            <!-- <img class="logo square" src="images/logos/springfield-contractors-1.png" alt="">
            <img class="logo" src="images/logos/Logo.png" alt="">
            <img class="logo square" src="images/logos/Christian-County.jpg" alt="">
            <img class="logo" src="images/logos/OTC-logo.jpg" alt="">
            <img class="logo" src="images/logos/modot.jpg" alt="">
            <img class="logo" src="images/logos/Mueller-logo-1.png" alt="">
            <img class="logo" src="images/logos/DFA-Logo.png" alt="">
            <img class="logo" src="images/logos/logo.jpg" alt="">
            <a class="logo bbb" href="https://www.bbb.org/us/mo/springfield/profile/general-contractor/hambey-construction-llc-0734-40156/#sealclick" target="_blank" rel="nofollow">
              <img src="https://seal-stlouis.bbb.org/seals/blue-seal-293-61-bbb-40156.png" style="border: 0;" alt="Hambey Construction, LLC BBB Business Review" />
            </a> -->
        </div>
</section>
</template>
<script>
export default {
    props: {
        icons: Object,
    }
}
</script>

<style scoped>

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
}
.logo {
  flex: 0 0 calc(20% - 30px);
  width: 100%;
  height: auto;
  max-width: 150px;
  margin: 20px;
  text-align: center;
}
.logo img {
  max-height: 100px;
}
.logo .link {
  max-width: 300px;
   flex: 1;
}
.logo .square {
  padding: 20px;
}
@media screen and (max-width: 500px) {
  .logo {
    flex: 0 0 calc(50% - 30px)
  }
}

@media screen and (max-width: 768px) {
  .logo {
    flex: 0 0 calc(33% - 30px)
  }
}

</style>