<template>
    <div class="container-fluid video-bg">
        <div class="video-head">
            <h6>วิดีโอที่น่าสนใจ</h6>
            <router-link to="/Video/ViewAll">
                <p>View All</p>
            </router-link>
        </div>
        <div class="video-grid">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="(video, index) in videos" :key="index" class="video">
                    <a :href="video.URL">
                        <img :src="video.Image" class="video-img" alt="Video Image">
                        <div class="video-body">
                            <h6 class="video-name">{{ video.Name }}</h6>
                            <p class="video-date">{{ video.Date }}</p>
                        </div>
                    </a>
                </Slide>
            </Carousel>
            <div v-if="videos.length === 0">
            <h3 class="flex text-center" style="padding-right: 8vw !important;">Limit fetch Data From FireBase <br>Data Can fetch again Next Day 00.00 AM</h3>
            </div>
        </div>
    </div>
</template>
<script>
// Import necessary Firebase modules
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import firebaseConfig from '@/firebase/index.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore/lite';

import 'vue3-carousel/dist/carousel.css'
export default {
    name: 'Video',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            videos: [],
            // carousel settings
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                },
            },
        }
    }, methods: {
        async getVideo() {
            // Initialize Firebase app
            const app = initializeApp(firebaseConfig);
            // Get Firestore instance
            const db = getFirestore(app);

            try {
                // Create a query to filter documents where ShowUp is true and limit to 6 documents
                const q = query(collection(db, 'Video'));
                // Get documents based on the query
                const Snapshot = await getDocs(q);
                // Map documents data to array
                this.videos = Snapshot.docs.map(doc => {
                    const data = doc.data();
                    // Format date to yyyy/mm/dd
                    const date = new Date(data.Date.seconds * 1000);
                    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
                    return {
                        ...data,
                        Date: formattedDate
                    };
                });
            } catch (error) {
                console.error('Error getting documents:', error);
            }
        },
    },
    async mounted() {
        await this.getVideo();
    }
}
</script>
<style scoped>
.video-bg {
    background-color: #97b1cb;
    max-height: fit-content;
    padding: 5rem 10rem 0rem 6rem; /* Adjust padding for responsiveness */
}

.video-head {
    display: flex;
    justify-content: space-between;
}

.video-head h6 {
    -webkit-text-fill-color: white;
    font-size: 40px;
    font-weight: 1000;
    margin-top: 0;
}

.video-head p {
    -webkit-text-fill-color: white;
    font-size: 16px;
    font-weight: 600;
    margin-top: 1rem;
}

.video-img {
    position: relative;
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}

.video-name {
    -webkit-text-fill-color: white;
    padding-top: 3vh;
    font-size: 20px;
    font-weight: 600;
    text-align: start;
    margin-top: 0;
}

.video-date {
    -webkit-text-fill-color: white;
    font-size: 14px;
    opacity: 90%;
    text-align: start;
    margin-top: 0; 
}

.video {
    width: 100%; /* Set width to 100% for responsiveness */
    max-width: 50rem; /* Set maximum width */
    padding: 1rem;
    padding-top: 5vh;
    padding-bottom: 2vh;
    margin-left: auto; /* Center the video horizontally */
    margin-right: auto; /* Center the video horizontally */
    border: 0px;
    animation: videoDown 0.5s forwards;
    -webkit-animation: videoDown 0.5s forwards;
    -moz-animation: videoDown 0.5s forwards;
}

/*Hover */
.video:hover {
    animation: videoUp 0.7s forwards;
    -webkit-animation: videoUp 0.7s forwards;
    -moz-animation: videoUp 0.7s forwards;
}

.video:hover .video-name,
.video-date {
    -webkit-text-fill-color: white;
}


/*KeysFrame*/
@-webkit-keyframes videoUp {
    0% {}

    100% {
        scale: 1.1;
    }
}

@-webkit-keyframes videoDown {
    0% {
        scale: 1.1;
    }

    100% {
        scale: 1;
    }
}
/* Media Queries */
@media (min-width: 1920px) {
    .video-head {
        padding: 5rem 15rem 0rem 10rem; /* Adjust padding for larger screens */
    }
    .video {
        max-width: 40rem; /* Adjust maximum width for larger screens */
    }
}

@media (max-width: 768px) {
    .video-head {
        width: 300px;
        display: flex;
        margin-left: -10vw;
    }
    .video-head h6{
        font-size: 30px;
    }
    .video-head p {
        margin-top: 0.4rem;
    }
    .video-grid {
        width: 300px;
        height: 24rem;
        margin-left: -12vw;
    }
    .video-name {
        font-size: 18px; /* Adjust font size for smaller screens */
    }
    .video-date {
        font-size: 12px; /* Adjust font size for smaller screens */
    }
}
</style>