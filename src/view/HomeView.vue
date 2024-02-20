<template>
    <navbar />
    <div class="hero">
        <img :src="aot_banner" @error="handleImageError" />
    </div>
    <topicbar />
    <interesting />
    <Video />
    <Footer />
    <navfooter />
</template>
<script>
/*Component*/
/*Nav*/
import navbar from '../components/nav/navbar.vue'
import navfooter from '../components/nav/navfooter.vue'
/*Other*/
import topicbar from '../components/topicbar.vue'
import interesting from '../components/interesting.vue'
import Video from '../components/video.vue'
import Footer from '../components/footer.vue'
/*Import IMG*/
import aot_banner from '@/assets/aot_banner.jpg';
export default {
    name: 'homeview',
    components: {
        navbar,
        navfooter,
        topicbar,
        interesting,
        Video,
        Footer,
    },
    data() {
        return {
            aot_banner: aot_banner,
        }
    },
    methods: {
        handleImageError() {
            console.error('Image failed to load');
        },
    }
}
</script>
<style>
.hero {
    padding-top: 6vh;
}

img {
    width: 100%;
    height: auto;
}

.section1 {
    padding-top: -10px;
    z-index: -2;
}
</style>