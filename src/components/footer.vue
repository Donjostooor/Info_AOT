<template>
    <div class="container-fluid footer-bg">
        <div class="footer-link">
            <div class="link-header">
                <div class="col link-name">
                    <p>สิ่งที่เกี่ยวข้องกับ AOT</p>
                </div>
                <div class="col link-gap">
                    <hr>
                </div>
            </div>
            <div class="col-12 link-logo">
                <div v-for="(logo, index) in logos" :key="index" class="logo">
                    <a :href="logo.URL">
                        <img :src="logo.Logo" class="logo-img" alt="logo Image">
                    </a>
                </div>
                <div v-if="logos.length === 0">
                <h3 class="flex text-center" style="padding-right: 8vw !important;">Limit fetch Data From FireBase <br>Data Can fetch again Next Day 00.00 AM</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebaseConfig from '@/firebase/index.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore/lite';

export default {
    name: 'Footer',
    data() {
        return {
            logos: [],
        }
    }, methods: {
        async getlogo() {
            // Initialize Firebase app
            const app = initializeApp(firebaseConfig);
            // Get Firestore instance
            const db = getFirestore(app);

            try {
                // Create a query to filter documents where ShowUp is true and limit to 6 documents
                const q = query(collection(db, 'Link'));
                // Get documents based on the query
                const Snapshot = await getDocs(q);
                // Map documents data to array
                this.logos = Snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        ...data
                    };
                });
            } catch (error) {
                console.error('Error getting documents:', error);
            }
        },
    },
    async mounted() {
        await this.getlogo();
    }
}
</script>
<style scoped>
.footer-bg {
    background-color: rgba(8, 72, 124, 1);
    max-height: fit-content;
    padding: 5rem 5rem 0rem 5rem;
    /* Adjust padding for responsiveness */

}

/*Link Zone*/
.footer-link {
    display: relative;
    padding-top: 0rem;
    padding-bottom: 5rem;
    padding-right: 0vw;
    align-items: center;
}

.link-header {
    display: flex;
}

.link-header {
    width: 100%;
    -webkit-text-fill-color: white;
    font-size: 40px;
    font-weight: 1000;
    padding-bottom: 5vh;
}

.link-name {
    width: fit-content;
}

.link-gap hr {
    border: 3px solid white;
    opacity: 1;
    width: 100%;
    margin-top: 4vh;
}

.link-logo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    column-gap: 5vw;
    align-items: center;
}

.logo-img {
    border-radius: 20px;
}

.logo {
    animation: Down 0.5s forwards;
    -webkit-animation: Down 0.5s forwards;
    -moz-animation: Down 0.5s forwards;
}

.logo:hover {
    animation: UP 0.5s forwards;
    -webkit-animation: UP 0.5s forwards;
    -moz-animation: UP 0.5s forwards;
}

/*Keyframe Link */
@-webkit-keyframes UP {
    0% {}

    100% {
        scale: 1.1;
    }
}

@-webkit-keyframes Down {
    0% {
        scale: 1.1;
    }

    100% {
        scale: 1;
    }
}</style>