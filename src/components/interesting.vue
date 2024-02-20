<template>
    <div class="sec1">
        <img :src="imghero.Topicbg" @error="handleImageError" />
    </div>

    <div class="container">
        <div class="flex">
            <div class="col-10">
                <Card/>
            </div>
            <div class="col-2 list">
                <List/>
            </div>
        </div>
    </div>
    

</template>
<script>
/*import components*/
import Card from '../components/interesting/card.vue'
import List from '../components/interesting/list.vue'

/*import img*/
import TopicSec from '@/assets/Topicsec1.png'
export default {
    name: 'topicbar',
    components: {
        Card,
        List,
        
    },
    data() {
        return {
            imghero: {
                Topicbg: TopicSec
            }
        }
    }
}
</script>
<style scoped>
/*Sections*/
.container{
    
    padding-bottom: 10vh;
}
img {
    width: 100%;
    height: auto;
}
.sec1 {
    position: relative;
    height: 100px;
    z-index: -15;
}
/*Body*/
.flex {
    display: flex;
    padding-top: 26vh;
    margin-left: 4vw;
    justify-content: space-around;
}
.list {
    margin-top: 2rem; /* Adjusted margin for better spacing on smaller screens */
    margin-left: 4vw;
}
/* Media Queries */
@media (min-width: 1920px) {
    /* Adjustments for screens wider than 1920px */
    .container {
        max-width: 1600px; /* Limit container width for better readability on wider screens */
        margin: 0 auto; /* Center the container */
    }
    .flex {
        margin-left: auto; /* Center the flex container */
        margin-right: auto; /* Center the flex container */
    }
    .list {
        margin-left: 4vw; /* Reset margin for the list column */
    }
}

@media (max-width: 768px) {
    /* Adjustments for screens smaller than or equal to 768px (e.g., tablets and mobile devices) */
    .flex {
        width: 300px;
        flex-wrap: wrap; /* Added flex-wrap to ensure proper wrapping on smaller screens */
        flex-direction: column; /* Change flex direction to column for smaller screens */
        align-items: center; /* Center items vertically */
        padding-top: 0vh; /* Reduced padding top for smaller screens */
        margin: 0px;
        margin-left: -10vw;

    }
    .list {
        width: 380px;
        margin-left: 10; /* Reset margin for the list column */
        padding-left: 20vw;
    }
}
</style>