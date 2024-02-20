<template>
    <div class="navbar nav-bg fixed-top">
        <div class="container-fluid">
            <div class="col navbar-body">
                <!-- head nav -->
                <ul class="navbar-nav-row">
                    <li class="brand">
                        &nbsp;
                    </li>
                    <li class="gap-row"></li>
                    <li class="navbar-card">
                        <router-link to="/">
                            <p>หน้าหลัก</p>
                        </router-link>
                    </li>
                    <li class="navbar-card" @click="toggleCollapse('about')" aria-label="About Nav">
                        <p>เกี่ยวกับหน่วยงาน</p>
                    </li>
                    <li class="navbar-card" @click="toggleCollapse('population')" aria-label="Population Nav">
                        <p>สำหรับประชาชน</p>
                    </li>
                    <li class="navbar-card" @click="toggleCollapse('officer')" aria-label="Officer Nav">
                        <p>สำหรับเจ้าหน้าที่ ทอท.</p>
                    </li>
                    <li class="navbar-card" @click="toggleCollapse('law')" aria-label="Law Nav">
                        <p>มุมกฎหมาย</p>
                    </li>
                    <li class="navbar-card" @click="toggleCollapse('contact')" aria-label="Contact Nav">
                        <p>ติดต่อเรา</p>
                    </li>
                </ul>
                <!-- body nav -->
                <div v-for="(collapsed, key) in collapses" :key="key">
                    <div class="collapse" :class="{ 'show': collapsed }" tabindex="1" :id="key">
                        <div class="line-gap"></div>
                        <div class="container-fluid collapse-head">
                            <div class="col collapse-body">
                                <div class="col item-topic">
                                    <h5><b>{{ headings[key] }}</b></h5>
                                </div>
                                <div class="item-body">
                                    <div v-for="item in items[key]" :key="item.id" class="content-body">
                                        <ul v-if="!item.subItems || item.subItems.length === 0" class="nav-hover">
                                            <!-- Concatenate title and tags in the URL -->
                                            <router-link
                                                :to="'/Content/' + encodeURIComponent(item.tags) + '/' + encodeURIComponent(item.title)">
                                                <p><b>{{ item.title }}</b></p>
                                            </router-link>
                                        </ul>
                                        <ul v-else>
                                            <p><b>{{ item.title }}</b></p>
                                            <li v-for="subItem in item.subItems" :key="subItem.id" class="nav-hover">
                                                <!-- Concatenate title and tags in the URL -->
                                                <router-link
                                                    :to="'/Content/' + encodeURIComponent(subItem.tags) + '/' + encodeURIComponent(subItem.title)">
                                                    <p>{{ subItem.title }}</p>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
// import images
import logo from '@/assets/logo.png';
export default {
    data() {
        return {
            img: {
                logo: logo
            },
            collapses: {
                about: false,
                population: false,
                officer: false,
                law: false,
                contact: false
            },
            collapseTimeout: 5000, // 5 seconds
            headings: {
                about: "เกี่ยวกับหน่วยงาน",
                population: "สำหรับประชาชน",
                officer: "สำหรับเจ้าหน้าที่ ทอท.",
                law: "มุมกฎหมาย",
                contact: "ติดต่อเรา"
            },
            items: {
                about: [
                    { title: "ประวัติความเป็นมา", tags: "About" },
                    { title: "คณะผู้บริหาร ทอท.", tags: "About" },
                    { title: "โครงสร้างบริหารศูนย์ข้อมูลข่าวสารของ ทอท.", tags: "About" },
                    {
                        title: "หน่วยงานด้านข้อมูลข่าวสารของ ทอท.",
                        subItems: [
                            { title: "คณะกรรมการข้อมูลข่าวสารของ ทอท.", tags: "About" },
                            { title: "คณะทำงานศูนย์ข้อมูลข่าวสารของ ทอท.", tags: "About" },
                            { title: "ศูนย์ข้อมูลข่าวสารของ ทอท.", tags: "About" },
                        ]
                    },
                ],
                population: [
                    {
                        title: "สิทธิของประชาชนตาม พ.ร.บ. ข้อมูลข้อมูลข่าวสารฯ",
                        subItems: [
                            { title: "สิทธิรับรู้และการเข้าถึงข้อมูลข่าวสารของราชการ", tags: "Population" },
                            { title: "สิทธิร้องเรียน", tags: "Population" },
                            { title: "สิทธิอุทธรณ์", tags: "Population" },
                            { title: "สิทธิคัดค้านการเปิดเผยข้อมูลข่าวสารที่เกี่ยวกับผลประโยชน์ได้เสียของตน", tags: "Population" },
                        ]
                    },
                    {
                        title: "ขั้นตอนการใช้งานสิทธิตาม พ.ร.บ. ข้อมูลข้อมูลข่าวสารฯ",
                        subItems: [
                            { title: "ข้อแนะนำในตรวจดูข้อมูล", tags: "Population" },
                            { title: "ข้อแนะนำในการใช้สิทธิร้องเรียน", tags: "Population" },
                            { title: "ข้อแนะนำในการอุทธรณ์", tags: "Population" },
                        ]
                    },
                    {
                        title: "สิทธิเกี่ยวกับข้อมูลข่าวสารส่วนบุคคล",
                        subItems: [
                            { title: "การคุ้มครองข้อมูลข่าวสารส่วนบุคคล", tags: "Population" },
                            { title: "การจัดเก็บข้อมูลข่าวสารส่วนบุคคล", tags: "Population" },
                            { title: "การเปิดเผยข้อมูลข่าวสารส่วนบุคคล", tags: "Population" },
                            { title: "การตรวจดูข้อมูลข่าวสารส่วนบุคคล", tags: "Population" },
                            { title: "การแก้ไขข้อมูลข่าวสารส่วนบุคคล", tags: "Population" },
                        ]
                    },
                ],
                officer: [
                    { title: "หน้าที่ของหน่วยงานของรัฐตามกฎหมายข้อมูลข่าวสารของราชการ", tags: "Officer" },
                    {
                        title: "วิธีการในการปฏิบัติตามกฎหมายว่าด้วยข้อมูลข่าวสาร",
                        subItems: [
                            { title: "ข้อมูลที่หน่วยงานของรัฐหรือเจ้าหน้าที่ของรัฐห้ามมิให้เปิดเผย หรืออาจมีคำสั่งมิให้เปิดเผย", tags: "Officer" },
                            { title: "ขั้นตอนและแนวทางปฏิบัติในการมีคำสั่งให้เปิดเผยข้อมูลข่าวสารของราชการ", tags: "Officer" },
                            { title: "แนวทางการใช้ดุลพินิจของเจ้าหน้าที่ของรัฐ", tags: "Officer" },
                            { title: "การคุ้มครองเจ้าหน้าที่ของรัฐที่เปิดเผยข้อมูลข่าวสารโดยสุจริต", tags: "Officer" },
                        ]
                    },
                    {
                        title: "การคุ้มครองข้อมูลข่าวสารส่วนบุคคล",
                        subItems: [
                            { title: "หน้าที่และหลักปฏิบัติของหน่วยงานของรัฐในการคุ้มครองข้อมูลข่าวสารส่วนบุคคล", tags: "Officer" },
                            { title: "การคุ้มครองเจ้าหน้าที่ของรัฐที่เปิดเผยข้อมูลข่าวสารโดยสุจริต", tags: "Officer" },
                        ]
                    },
                    { title: "เกี่ยวกับศูนย์ข้อมูลข่าวสารของราชการ", tags: "Officer" },
                    { title: "ขั้นตอนการให้บริการข้อมูลข่าวสาร", tags: "Officer" },
                    {
                        title: "การเรียกเก็บค่าธรรมเนียมทำสำเนา",
                        subItems: [
                            { title: "ขอสำเนาปกติ", tags: "Officer" },
                            { title: "ขอสำเนาพร้อมคำรับรองถูกต้อง", tags: "Officer" },
                        ]
                    },
                ],
                law: [
                    { title: "รัฐธรรมนูญแห่งราชอาณาจักรไทย", tags: "Law" },
                    { title: "พ.ร.บ. ข้อมูลข่าวสารของราชการ", tags: "Law" },
                    { title: "กฎหมายที่เกี่ยวข้อง มีจำนวน 8 รายการเป็นไฟล์เอกสาร", tags: "Law" }

                ],
                contact: [
                    {
                        title: "ติดต่อเรา",
                        subItems: [
                            { title: "เจ้าหน้าที่ศูนย์ข้อมูลข่าวสารของ ทอท.", tags: "Contact" },
                            { title: "สำนักงานใหญ่ บริษัท ท่าอากาศยานไทย จำกัด (มหาชน)", tags: "Contact" },
                            { title: "สถานที่ตั้งศูนย์ข้อมูลข่าวสารของ ทอท.", tags: "Contact" },
                            { title: "ไลน์แชทบอทของศูนย์ข้อมูลข่าวสาร ของ ทอท.", tags: "Contact" },
                        ]
                    },
                    { title: "คำถามที่พบบ่อย", tags: "Contact" },
                ],
            }
        };
    },
    methods: {
        toggleCollapse(key) {
            // Close all other collapses
            for (let k in this.collapses) {
                if (k !== key) {
                    this.collapses[k] = false;
                }
            }

            // Toggle the selected collapse
            this.collapses[key] = !this.collapses[key];

            // If open, set a timeout to close it
            if (this.collapses[key]) {
                setTimeout(() => {
                    this.collapses[key] = false;
                }, this.collapseTimeout);
            }
        }
    }
};
</script>
<style scoped>
.nav-bg {
    background-color: rgba(40, 55, 71, 1);
}

.navbar {
    -webkit-text-fill-color: white;
    display: flex;
    position: absolute;
    /* Ensure relative positioning */
}

.navbar-body {
    height: fit-content;
}

.brand {
    scale: 0.95;
    width: 300px;
    height: 30px;
    margin-top: -4.5vh;
    margin-left: 2vw;
}

.navbar-nav-row {
    height: 50px;
    display: flex;
    padding-right: 10vw;
    margin: 0;
    align-items: center;
    justify-content: space-between;
}

.gap-row {
    padding-left: 15vw;
}

.navbar-card {
    margin: 0;
    padding-top: 2vh;
    padding-right: 1vw;
    padding-left: 1vw;
    border-radius: 15px;
}
.navbar-card p{
-webkit-text-fill-color: white;
}

.line-gap {
    width: 100%;
    padding-top: 1vh;
    ;
    border-bottom: 4px solid white;

}

.collapse-head {
    display: flex;
    position: relative;
    padding-top: 3vh;
}

.collapse-body {
    padding-left: 2vw;
    width: fit-content;
}

.item-body {
    display: grid;
    position: relative;
    grid-template-columns: repeat(6,1fr);
}

.item-topic h5 {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 1.5vh;
}

.content-body p {
    -webkit-text-fill-color: white;
    font-size: 14px;
}

.content-body li {
    list-style: circle;
    color: white;
    width: fit-content;
    padding-top: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-bottom: 0.1vh;
    border-radius: 10px;
}

.content-body ul {
    list-style: circle;
    color: white;
    width: fit-content;
    padding-top: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-bottom: 0.1vh;
    border-radius: 10px;
}

.content-body-gap {
    padding-top: 3vh;
}

/*Hover*/
.navbar-card:hover,
.nav-hover:hover {
    background-color: rgb(27, 37, 48);
}</style>