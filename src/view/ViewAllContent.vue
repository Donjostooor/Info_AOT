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
            <h3>ความรู้ที่น่าสนใจทั้งหมด</h3>
        </div>
        <div class="viewall-body">
            <div class="card-grid">
                <div v-if="paginatedCards !== null" v-for="(card, index) in paginatedCards" :key="index" class="card">
                    <router-link to="">
                        <img v-if="card.ImageURL !== ''" :src="card.ImageURL" class="card-img" alt="Card Image">
                        <img v-else :src="NoImage" class="card-img" alt="Card Image">
                        <div class="card-body">
                            <div class="datetags">
                                <p class="card-tag" v-for="(tagClass, tagIndex) in getTagClasses(card.Tags)" :key="tagIndex"
                                    :class="tagClass">{{ card.Tags }}</p>
                                <p class="card-date">{{ card.Date }}</p>
                            </div>
                            <p class="card-name"> {{ card.Topic }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-if="cards.length === 0">
            <h3 class="flex text-center" style="padding-right: 8vw !important;">Limit fetch Data From FireBase <br>Data Can
                fetch again Next Day 00.00 AM</h3>
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
import noimg from '@/assets/no_image.jpg';
export default {
    name: 'ViewAllContent',
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
            NoImage: noimg,
            currentPage: 1,
            cardsPerPage: 9,
        }
    },
    computed: {
        paginatedCards() {
            // Sort the cards by Date in ascending order
            const sortedCards = this.cards.slice().sort((a, b) => new Date(b.Date) - new Date(a.Date));
            const startIndex = (this.currentPage - 1) * this.cardsPerPage;
            const endIndex = startIndex + this.cardsPerPage;
            // Slice the sorted cards array
            return sortedCards.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.cards.length / this.cardsPerPage);
        }
    },
    methods: {
        async getContent() {
            // Initialize Firebase app
            const app = initializeApp(firebaseConfig);
            // Get Firestore instance
            const db = getFirestore(app);

            try {
                // Define queries for each collection
                const aboutQuery = query(collection(db, 'About'));
                const populationQuery = query(collection(db, 'Population'));
                const officerQuery = query(collection(db, 'Officer'));
                const lawQuery = query(collection(db, 'Law'));

                // Execute all queries concurrently
                const [aboutSnapshot, populationSnapshot, officerSnapshot, lawSnapshot] = await Promise.all([
                    getDocs(aboutQuery),
                    getDocs(populationQuery),
                    getDocs(officerQuery),
                    getDocs(lawQuery),
                ]);

                // Process snapshots for each collection and combine results into a single array
                const aboutList = aboutSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const date = new Date(data.Date.seconds * 1000);
                    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
                    return {
                        ...data,
                        Date: formattedDate
                    };
                });
                const populationList = populationSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const date = new Date(data.Date.seconds * 1000);
                    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
                    return {
                        ...data,
                        Date: formattedDate
                    };
                });
                const officerList = officerSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const date = new Date(data.Date.seconds * 1000);
                    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
                    return {
                        ...data,
                        Date: formattedDate
                    };
                });
                const lawList = lawSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const date = new Date(data.Date.seconds * 1000);
                    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
                    return {
                        ...data,
                        Date: formattedDate
                    };
                });

                // Combine results of all collections into a single array
                const combinedResult = [...aboutList, ...populationList, ...officerList, ...lawList];

                // Sort the combinedResult array by the Date property
                combinedResult.sort((a, b) => {
                    const dateA = new Date(a.Date);
                    const dateB = new Date(b.Date);
                    return dateA - dateB;
                });

                this.cards = combinedResult;
            } catch (error) {
                console.error('Error getting documents:', error);
            }
        },
        getTagClasses(tag) {
            const tagClasses = [];
            switch (tag) {
                case 'สำหรับเจ้าหน้าที่':
                    tagClasses.push('bluetag');
                    break;
                case 'สำหรับประชาชน':
                    tagClasses.push('greentag');
                    break;
                case 'มุมกฎหมาย':
                    tagClasses.push('purpletag');
                    break;
                case 'เกี่ยวกับหน่วยงาน':
                    tagClasses.push('orangetag');
                    break;
                default:
                    break;
            }
            return tagClasses;
        }, nextPage() {
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
        await this.getContent();
        this.getTagClasses();
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
    aspect-ratio: 3/2;
    object-fit: cover;
}

.card-tag {
    margin-left: -1vw;
    padding: 0px 10px;
    background-color: gray;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    max-width: fit-content;
}

.bluetag {
    background-color: rgba(93, 173, 226, 1);
}

.greentag {
    background-color: rgba(88, 214, 141, 1);
}

.purpletag {
    background-color: rgba(175, 122, 197, 1);
}

.orangetag {
    background-color: rgba(245, 176, 65, 1);
}

.card-name {
    -webkit-text-fill-color: black;
    font-size: 18px;
    margin-left: -0.6vw;
    font-weight: 600;
    opacity: 90%;
    padding-left: 1vw;
    padding-right: 1vw;
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