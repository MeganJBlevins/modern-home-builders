<template>
  <div class="hambey-modal__overlay">
    <div class="modal-close" @click="$emit('close-modal')"></div>
    <div class="hambey-modal">
     <div id="hambeyModal" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li
                    v-for="(slideIndex, index) in images" 
                    :key="index"
                    data-target="#hambeyModal" 
                    :data-slide-to="index"
                    :class="{ active: active === index }"
                ></li>
            </ol>
            <div class="carousel-inner">
                <template v-for="(slide, index) in images">
                    <div  :key="index" :class="{ active: active === index, 'carousel-item': true}"
                    >
                    <img :src="slide" rel="preload" />
                    </div>
                </template>
            </div>

            <a class="carousel-control-prev" href="#hambeyModal" role="button" data-slide="prev">
                <i class="lni lni-arrow-left"></i>
            </a>
            <a class="carousel-control-next" href="#hambeyModal" role="button" data-slide="next">
                <i class="lni lni-arrow-right"></i>
            </a>
        </div>
        <div class="close" @click="$emit('close-modal')">
        <i class="lni lni-close"></i>
    </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
        project: String,
        galleries: Array
    },
    data() {
        return {
            active: 0,
        }
    },
    computed: {
        images() {
            const images = this.galleries.find(g => g.primary.projectSlug === this.project)
            if(images) {
                const urls = images.items.map(i => i.galleryImage.url)
                return urls
            }
            return null
        }

    },
    methods: {
    }
}
</script>

<style scoped>

.hambey-modal__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 9999;
}

.hambey-modal {
    z-index: 5;
  text-align: center;
  background-color: transparent;
  height: auto;
  width: 80vw;
  max-width: 700px;
  margin-top: 5vh;
  overflow: hidden;
  position: relative;
}
.modal-close {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
.close {
  cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    text-shadow: 2px 2px #000;
}

.close i {
  font-size: 25px;
  color: #fff;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.carousel-item {
    width: 100%;
    height: auto;
}
 .carousel-item img {
        position: absolute;
        top: 0;
        left: 0;
    }
.carousel-item::before, .carousel-item::after {
    display: none;
}
.carousel-control-next i, .carousel-control-prev i{
    color: #a49d78;
}
.carousel-control-next, .carousel-control-prev {
    background-color: rgba(255,255,255,.5);
    border-color: #a49d78;
    display: block;
}
@media screen and (max-width: 768px) {
    .hambey-modal {
        margin-top: 20vh;
        width: 80vw;
    }

    .carousel-control-next, .carousel-control-prev {
        display: block;
    }
    .carousel-control-prev {
        left: 20px;
    }
    .carousel-control-next {
        right: 20px;
    }
}
</style>