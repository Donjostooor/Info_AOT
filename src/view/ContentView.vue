<template>
    <navbar />
    <div class="hero">
    <img :src="aot_banner" @error="handleImageError" />
    </div>
    <div class="sec1">
        <img :src="imghero.Topicbg" @error="handleImageError" />
    </div>
    <div class="container-fluid">
        <div class="contentview-body">
            <div class="col-10">
                <content/>
            </div>
            <div class="col-2 list">
                <list />
            </div>
        </div>
    </div>

    <navfooter />
</template>
<script>
import navbar from '../components/nav/navbar.vue'
import navfooter from '../components/nav/navfooter.vue'
import list from '../components/interesting/list.vue'
import content from '../components/content.vue'
/*Import IMG*/
import aot_banner from '@/assets/aot_banner.jpg';
import TopicSec2 from '@/assets/Topicsec2.png';
export default {
    name: 'ContentView',
    components: {
        navbar,
        navfooter,
        list,
        content,
    },
    data() {
        return {
            aot_banner: aot_banner,
            imghero: {
                Topicbg: TopicSec2
            }
        }
    }
}
</script>

<style scoped>

.contentview-body {
    display: flex;
    padding-top: 35vh;
}
img {
    width: 100%;
    height: auto;
}
.sec1 {
    position: relative;
    height: 100px;
    z-index: -15;
    margin-top: -35vh;
}
</style>