<template>
    <div class="container-fluid">
        <div class="listHead">
            <h2>บทความล่าสุด</h2>
            <hr>
        </div>
        <div class="list-grid">
            <div v-for="(list, index) in lists.slice(lists.length-5,lists.length).reverse()" :key="index" class="list">
                <router-link :to="getContentRoute(list)">
                    <div class="list-body">
                        <p class="list-tag" v-for="(tagClass, tagIndex) in getTagClasses(list.Tags)" :key="tagIndex"
                            :class="tagClass">{{ list.Tags }}</p>
                        <h6 class="list-name">{{ list.Topic }}</h6>
                        <p class="list-date">{{ list.Date }}</p>
                    </div>
                </router-link>
            </div>
            <div v-if="lists.length === 0">
            <h3 class="flex text-center" style="padding-right: 8vw !important;">NoData</h3>
            </div>
            <hr>
        </div>
    </div>
</template>
<script>
// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import firebaseConfig from '@/firebase/index.js';

export default {
    name: 'list',
    data() {
        return {
            lists: []
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

                this.lists = combinedResult;
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
        getContentRoute(list) {
        const tagsMapping = {
            'เกี่ยวกับหน่วยงาน': 'About',
            'สำหรับประชาชน': 'Population',
            'สำหรับเจ้าหน้าที่': 'Officer',
            'มุมกฎหมาย': 'Law',    
        };
        const encodedTopic = encodeURIComponent(list.Topic);
        const routeTags = tagsMapping[list.Tags] || card.Tags; // Fallback to original value if not in mapping
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
/*Header*/
.listHead h2 {
    font-weight: 600;
    display: flex;
    justify-content: start;
    margin-left: -4vw;

}

.listHead hr {
    border-color: black;
    border-width: 3px;
    margin-left: -4vw;
    padding-bottom: 2vh;
}
.view-all p {
    display: flex;
    justify-content: end;
    margin-right: 7rem;
    font-weight: 600;
    -webkit-text-fill-color: black;
}
/*list */
.list-grid {
    display: grid;
    margin-left: -4vw;
}

.list-grid hr {
    border-color: black;
    border-width: 3px;

}

.list-tag {
    font-size: 15px;
    margin-left: -0.2vw;
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


.list-date {
    -webkit-text-fill-color: gray;
    font-size: 14px;
    margin-left: 0vw;
    margin-top: -1vh;
}

.list-name {
    max-width: 100%;
    -webkit-text-fill-color: black;
    font-size: 20px;
    padding-top: -1vh;
    font-weight: 600;
    opacity: 90%;
}

.list {
    padding-bottom: 1.5vh;
    display: flexbox;
    animation: listDown 0.5s forwards;
    -webkit-animation: listDown 0.5s forwards;
    -moz-animation: listDown 0.5s forwards;
}

.list:hover {
    animation: listUp 0.7s forwards;
    -webkit-animation: listUp 0.7s forwards;
    -moz-animation: listUp 0.7s forwards;
}

.list:hover .list-name,
.list-tag,
.list-date {
    -webkit-text-fill-color: black;
}

/*KeysFrame*/
@-webkit-keyframes listUp {
    0% {}

    100% {
        scale: 1.05;
    }
}

@-webkit-keyframes listDown {
    0% {
        scale: 1.05;
    }

    100% {
        scale: 1;
    }
}
</style>