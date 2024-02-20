<template>
    <div class="container-fluid">
        <div class="view-all">
            <router-link to="/Content/ViewAll">
                <p>View All</p>
            </router-link>
        </div>
        <div class="card-grid">
            <div v-if="cards !== null" v-for="(card, index) in cards" :key="index" class="card">
                <router-link :to="getContentRoute(card)">
                    <img v-if="card.ImageURL !==''" :src="card.ImageURL" class="card-img" alt="Card Image">
                    <img v-else :src="NoImage" class="card-img card-no-img" alt="Card Image">
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
        <div v-if="cards.length === 0">
            <h3 class="flex text-center" style="padding-right: 8vw !important;">Limit fetch Data From FireBase <br>Data Can fetch again Next Day 00.00 AM</h3>
        </div>
    </div>
</template>
<script>
// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit } from 'firebase/firestore/lite';
import firebaseConfig from '@/firebase/index.js';
import noimg from '@/assets/no_image.jpg';
export default {
    name: 'Card',
    data() {
        return {
            cards: [],
            NoImage:noimg,
        }
    },
    methods: {
        async getContent() {
            // Initialize Firebase app
            const app = initializeApp(firebaseConfig);
            // Get Firestore instance
            const db = getFirestore(app);

            try {
                // Create a query to filter documents where ShowUp is true and limit to 6 documents
                const q = query(collection(db, 'Interesting'), where("ShowUp", "==", true), limit(6));
                // Get documents based on the query
                const interestingSnapshot = await getDocs(q);
                // Map documents data to array
                this.cards = interestingSnapshot.docs.map(doc => {
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
        },
        getContentRoute(card) {
        const tagsMapping = {
            'เกี่ยวกับหน่วยงาน': 'About',
            'สำหรับประชาชน': 'Population',
            'สำหรับเจ้าหน้าที่': 'Officer',
            'มุมกฎหมาย': 'Law',    
        };
        const encodedTopic = encodeURIComponent(card.Topic);
        const routeTags = tagsMapping[card.Tags] || card.Tags; // Fallback to original value if not in mapping
        return `/Content/${routeTags}/${encodedTopic}`;
        }
    },
    async mounted() {
        await this.getContent();
        this.getTagClasses();
    }
}
</script>

<style scoped>
/*Head */
.view-all p {
    display: flex;
    justify-content: end;
    margin-right: 7rem;
    font-weight: 600;
    -webkit-text-fill-color: black;
}

/* Card Grid */
.card-grid {
    padding-right: 8vw;
    display: grid;
    column-gap: 2%;
    grid-template-columns: repeat(3, 2fr); /* Adjust card width for responsiveness */
    grid-template-rows: auto;
    row-gap: 1vh;
    column-gap: 1vw;
}

.datetags {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}

.card-img {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}
.card-no-img{
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
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
}

.card {
    padding-left: 1vw;
    padding-right: 1vw;
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