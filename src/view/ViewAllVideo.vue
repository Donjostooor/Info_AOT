<template>
    <navbar />
    <div class="hero">
        <img :src="aot_banner" @error="handleImageError" />
    </div>
    <div class="sec1">
        <img :src="imghero.Topicbg" @error="handleImageError" />
    </div>
    <div class="container-fluid">
        <div class="card-head">
            <h3>วิดีโอที่น่าสนใจทั้งหมด</h3>
        </div>
        <div class="viewall-body">
            <div class="card-grid">
                <div v-if="paginatedCards !== null" v-for="(card, index) in paginatedCards" :key="index" class="card">
                    <a :href="card.URL" target="_blank">
                        <img :src="card.Image" class="card-img" alt="Card Image">
                        <div class="card-body">
                            <h6 class="card-name">{{ card.Name }}</h6>
                            <p class="card-date">{{ card.Date }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="cards.length === 0">
            <h3 class="flex text-center" style="padding-right: 8vw !important;">Limit fetch Data From FireBase <br>Data Can fetch again Next Day 00.00 AM</h3>
        </div>
        <div class="paginated">
            <button class="btn btn-secondary" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <button class="btn btn-primary" @click="nextPage" :disabled="currentPage === totalPages">Next</button> 
        </div>
    </div>
    <navfooter />
</template>
<script>
// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import firebaseConfig from '@/firebase/index.js';

import navbar from '../components/nav/navbar.vue'
import navfooter from '../components/nav/navfooter.vue'
/*Import IMG*/
import aot_banner from '@/assets/aot_banner.jpg';
import TopicSec2 from '@/assets/Topicsec2.png';
export default {
    name: 'ViewAllVideo',
    components: {
        navbar,
        navfooter,
    },
    data() {
        return {
            cards: [],
            aot_banner: aot_banner,
            imghero: {
                Topicbg: TopicSec2
            },
            currentPage: 1,
            cardsPerPage: 9,
        }
    },
    computed: {
        paginatedCards() {
            const startIndex = (this.currentPage - 1) * this.cardsPerPage;
            const endIndex = startIndex + this.cardsPerPage;
            return this.cards.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.cards.length / this.cardsPerPage);
        }
    },
    methods: {
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
                this.cards = Snapshot.docs.map(doc => {
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
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }

    },
    async mounted() {
        await this.getVideo();
    }
}
</script>

<style scoped>
.card-head {
    padding-top: 35vh;
    padding-left: 3vw;

}

.card-head h3 {
    font-weight: 600;
    font-size: 40px;
}

.viewall-body {
    display: flex;
    padding: 5vh;
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

/* Card Grid */
.card-grid {
    padding: 2vh;
    display: grid;
    column-gap: 2%;
    grid-template-columns: repeat(3, 3fr);
    /* Adjust card width for responsiveness */
    grid-template-rows: auto;
    row-gap: 15px;
    column-gap: 110px;
}

.datetags {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding-left: 1vw;
    padding-right: 1vw;
}

.card-img {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}

.card-name {
    -webkit-text-fill-color: black;
    font-size: 20px;
    padding-top: 2vh;
    margin-left: 0vw;
    font-weight: 800;
    opacity: 90%;
}
.card-date {
    font-size: 14px;
    opacity: 90%;
    text-align: start;
    margin-top: 0; 
}
.paginated {
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}
.card {
    border: 0px;
    animation: cardDown 0.5s forwards;
    -webkit-animation: cardDown 0.5s forwards;
    -moz-animation: cardDown 0.5s forwards;
}

.card:hover {
    animation: cardUp 0.7s forwards;
    -webkit-animation: cardUp 0.7s forwards;
    -moz-animation: cardUp 0.7s forwards;
}

.card:hover .card-name,
.card-tag,
.card-date {
    -webkit-text-fill-color: black;
}

/*KeysFrame*/
@-webkit-keyframes cardUp {
    0% {}

    100% {
        scale: 1.1;
    }
}

@-webkit-keyframes cardDown {
    0% {
        scale: 1.1;
    }

    100% {
        scale: 1;
    }
}

/* No Data Message */
.no-data-msg {
    margin: 3vh 0;
}
</style>