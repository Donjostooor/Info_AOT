<template>
    <div class="container-fluid">
            <div class="content-body" v-for="(item, index) in firebase" :key="index">
                <div class="content-topic">
                    <h3><b>{{ item.Topic }}</b></h3>
                </div>
                <div class="content-date">
                    <p class="item-date">ลงเมื่อวันที่ : {{ item.Date }}</p>
                    <p class="list-tag" v-for="(tagClass, tagIndex) in getTagClasses(item.Tags)" :key="tagIndex"
                            :class="tagClass">{{ item.Tags }}</p>
                </div>
                <div v-show="item.ImageURL !== ''" class="content-image">
                    <img :src="item.ImageURL" alt="Content Image">
                </div>
                <div class="content-text">
                    <div v-for="i in 100">
                        <!-- Use a template loop to render p tags for Content1 to Content100 -->
                        <p v-if="item[`Content${i}`]">
                            <b v-if="item[`Content${i}`].Bold === true">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {{ item[`Content${i}`].Text }}</b>
                            <p v-else>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {{ item[`Content${i}`] }}</p>
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="firebase.length === 0">
            <h3 class="flex text-center" style="padding-right: 8vw !important;">Limit fetch Data From FireBase <br>Data Can fetch again Next Day 00.00 AM</h3>
            </div>
    </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import firebaseConfig from '@/firebase/index.js';

export default {
    name: 'content',
    data() {
        return {
            firebase: [],
            error: null, // Add an error property
        }
    },
    methods: {
        async getContent() {
            const app = initializeApp(firebaseConfig);
            this.db = getFirestore(app); // Initialize Firestore instance
            try {
                
                const title = decodeURIComponent(this.$route.params.title);
                const tags = decodeURIComponent(this.$route.params.tags);
                const q = query(collection(this.db, tags), where("Topic", "==", title));

                onSnapshot(q, (snapshot) => {
                    this.firebase = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const date = new Date(data.Date.seconds * 1000);
                        const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
                        return {
                            ...data,
                            Date: formattedDate
                        };
                    });
                });
                console.log(this.firebase)
            } catch (error) {
                console.error('Error getting documents:', error);
                this.error = error.message; // Set error message
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
    },
    async mounted() {
        await this.getContent();
        this.getTagClasses();
    },
    watch: {
        $route(to, from) {
            this.getContent();
        }
    },
}

</script>



<style scoped>
.content-body {
    margin-top: 0vh;
    padding: 1rem;
    padding-right: 7vw;
}
.content-date{
    display: flex;
}
.content-date p {
    font-size: 12px;
}
.content-topic h3{
    font-size: 50px;
}
.item-date {
    padding-right: 1vw;
}
/*tags zones */
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
.content-text {
    font-size: 16px;
    padding-top: 1vh;
}

</style>