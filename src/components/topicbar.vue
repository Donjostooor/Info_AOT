<template>
    <div class="container-fluid topicbar" />
    <div class="container">
        <div class="col btn-topic">
            <div class="col btn-body btn-body1" data-bs-target="#topic01" data-bs-toggle="modal">
                <div class="btn-head">
                    <div class="col btn-num">
                        <img :src="img.num1" />
                    </div>
                    <div class="col btn-name">
                        <p>พ.ร.บ. ข้อมูลข่าวสารฯ</p>
                    </div>
                </div>
                <div class="btn-logo">
                    <i class="bi bi-book-half"></i>
                </div>
            </div>
            <div class="col btn-body btn-body3" data-bs-target="#topic03-1" data-bs-toggle="modal">
                <div class="btn-head">
                    <div class="btn-num">
                        <img :src="img.num2" />
                    </div>
                    <div class="btn-name btn-nameup">
                        <p>หน้าที่ศูนย์ข้อมูล/<br>เจ้าหน้าที่ศูนย์ข้อมูลฯ</p>
                    </div>
                </div>
                <div class="btn-logo">
                    <i class="bi bi-person-arms-up"></i>
                </div>
            </div>
            <a href="https://www.oic.go.th/infocenter6/606/#" class="col btn-body btn-body4">
                <div class="btn-head">
                    <div class="btn-num">
                        <img :src="img.num3" />
                    </div>
                    <div class="btn-name">
                        <p>ศูนย์ข้อมูลข่าวสารของ ทอท.</p>
                    </div>
                </div>
                <div class="btn-logo">
                    <i class="bi bi-info-circle-fill" />
                </div>
            </a>
            <a href="https://www.airportthai.co.th/th/" class="col btn-body btn-body5">
                <div class="btn-head">
                    <div class="btn-num">
                        <img :src="img.num4" />
                    </div>
                    <div class="btn-name btn-nameup">
                        <p>Airports of Thailand <br>WebSite</p>
                    </div>
                </div>
                <div class="btn-logo">
                    <i class="bi bi-airplane-fill"></i>
                </div>
            </a>
            <div class="col btn-body btn-body6" data-bs-target="#topic06" data-bs-toggle="modal">
                <div class="btn-head">
                    <div class="btn-num">
                        <img :src="img.num5" />
                    </div>
                    <div class="btn-name">
                        <p>LineChatBot</p>
                    </div>
                </div>
                <div class="btn-logo">
                    <i class="bi bi-chat-dots-fill"></i>
                </div>
            </div>
        </div>
        <div class="col btn-block" />
        <!--Modals-->
        <div class="modal modal-lg fade" id="topic01" aria-hidden="true" aria-labelledby="topic01" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>พ.ร.บ. ข้อมูลข่าวสารของราชการ</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F01%20%E0%B8%9E%E0%B8%A3%E0%B8%9A.%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%2F7.png?alt=media&token=2d99f5c7-c77c-4c25-bbbe-49464eb74cc4'"
                            class="modal-img" alt="Modal Image1">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F01%20%E0%B8%9E%E0%B8%A3%E0%B8%9A.%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%2F9.png?alt=media&token=c7c605d0-100b-4306-aa7d-f12dcbb0959e'"
                            class="modal-img" alt="Modal Image2">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F01%20%E0%B8%9E%E0%B8%A3%E0%B8%9A.%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%2F11.png?alt=media&token=051a99e7-b35c-4314-8235-32f8bd1ec8b2'"
                            class="modal-img" alt="Modal Image3">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade modal-lg" id="topic03-1" aria-hidden="true" aria-labelledby="topic03-1"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>หน้าที่ของศูนย์ข้อมูลข่าวสารของ ทอท.</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F03%20%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%2F%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%2FInfo.png?alt=media&token=d4dc17aa-e3fe-48d1-a6ee-21df99de874a'"
                            class="modal-img" alt="Modal Image1">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#topic03-2" data-bs-toggle="modal">หน้าถัดไป</button>
                            <button class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade modal-lg" id="topic03-2" aria-hidden="true" aria-labelledby="topic03-2"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>หน้าที่ของนายทะเบียนข้อมูลข่าวสาร</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F03%20%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%2F%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%9A%2FOfficer%20(1).png?alt=media&token=5621d6ed-0583-414d-bd74-1834a8604ad1'"
                            class="modal-img" alt="Modal Image1">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F03%20%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%2F%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%9A%2FOfficer%20(2).png?alt=media&token=af6d7e56-4cdc-471d-962f-44a04d8f3f29'"
                            class="modal-img" alt="Modal Image2">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F03%20%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%2F%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%9A%2FOfficer%20(3).png?alt=media&token=dc034a70-b967-41cd-8a84-8106c08152b3'"
                            class="modal-img" alt="Modal Image3">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#topic03-1" data-bs-toggle="modal">
                            กลับไปหน้าแรก</button>
                            <button class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="topic06" aria-hidden="true" aria-labelledby="topic06" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>แชทบอทศูนย์ข้อมูลข่าวสารของ ทอท.</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img :src="'https://firebasestorage.googleapis.com/v0/b/aot-info-f2b82.appspot.com/o/Inforgraphic%2F06%20Line%2FQR%20Line.jfif?alt=media&token=dfb8ba2a-6779-4470-bd29-5feba566195c'"
                            class="modal-img" alt="Modal Image1">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/*import img*/
import num1 from '@/assets/Topic_bar/01.png';
import num2 from '@/assets/Topic_bar/02.png';
import num3 from '@/assets/Topic_bar/03.png';
import num4 from '@/assets/Topic_bar/04.png';
import num5 from '@/assets/Topic_bar/05.png';
export default {
    name: 'topicbar',
    data() {
        return {
            img: {
                num1: num1,
                num2: num2,
                num3: num3,
                num4: num4,
                num5: num5,
            }
        }
    }
}
</script>
<style scoped>
.container {
    width: 80% !important;
    max-width: 1200px;
    /* Limit maximum width */
    margin: 0 auto;
    /* Center container */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0vh;
}

.container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 0vh;
}

.topicbar {
    position: relative;
    height: 14vh;
    background-color: #97b1cb;
    padding: 1vh 3vh;
    /* Adjust padding */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: -1;
    /* Lower z-index for .topicbar */
}

.btn-topic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8vh;
}

.btn-body {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    z-index: 0;
}

.btn-body1 {
    border-radius: 0px 0px 0px 15px;
    background-color: rgba(247, 220, 111, 1);
}

.btn-body3 {
    background-color: rgba(120, 255, 111, 1);
}

.btn-body4 {
    background-color: rgba(174, 182, 191, 1);
}

.btn-body5 {
    background-color: rgba(0, 143, 255, 1);
}

.btn-body6 {
    border-radius: 0px 0px 15px 0px;
    background-color: rgba(162, 217, 206, 1);
}

.btn-logo,
.btn-name {
    -webkit-text-fill-color: white;
    text-align: center;
    margin-top: 3vh;
    font-size: 16px;
    /* Default font size */
}

.btn-logo {
    position: absolute;
    font-size: 26px;
    text-align: center;
    margin-top: 1.2vh;
}

.btn-num {
    position: relative;
    display: flex;
    height: 8vh;
    scale: 0.2;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -14.5vh;
    margin-left: 0.3vh;
    opacity: 0.7;
}

.btn-name {
    position: relative;
    font-size: 16px;
    font-weight: 800;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -1vh;
}

.btn-nameup {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -1vh;
}

.modal-header h3 {
    font-size: 30px;
    font-weight: 800;
    padding-top: 2vh;
    padding-left: 1vw;
}

.btn-block {
    position: absolute;
    width: 100%;
    height: 14vh;
    display: flex;
    justify-content: center;
    margin-top: -14vh;
    z-index: 0;
}

.btn-body:hover {
    position: relative;
    animation: btn-full 0.5s forwards;
    -webkit-animation: btn-full 0.5s forwards;
    -moz-animation: btn-full 0.5s forwards;
    opacity: 1;
}

.btn-body:hover .btn-name {
    animation: btn-name-lower 0.5s forwards;
    -webkit-animation: btn-name-lower 0.5s forwards;
    -moz-animation: btn-name-lower 0.5s forwards;
}

.btn-body:hover .btn-logo {
    animation: btn-logo-scale 0.5s forwards;
    -webkit-animation: btn-logo-scale 0.5s forwards;
    -moz-animation: btn-logo-scale 0.5s forwards;
}

.btn-body:hover .btn-num {
    animation: btn-num-scale 0.5s forwards;
    -webkit-animation: btn-num-scale 0.5sforwards;
    -moz-animation: btn-num-scale 0.5s forwards;
}

/* Keyframes */
@-webkit-keyframes btn-full {
    0% {
        margin-top: 0vh;
    }

    100% {
        height: 22vh;
        margin-top: -14vh;
        z-index: 100;
    }
}

@-webkit-keyframes btn-name-lower {
    0% {
        margin-top: 0vh;
    }

    25% {
        opacity: 0;
    }

    100% {
        opacity: 0;
        margin-top: 14vh;
    }
}

@-webkit-keyframes btn-logo-scale {
    0% {}

    100% {
        scale: 3;
        margin-top: 11.5vh;
        margin-left: 10vh;
    }
}

@-webkit-keyframes btn-num-scale {
    0% {}

    100% {
        filter: invert(100%);
        margin-top: 0vh;
        margin-left: -20vh;
        scale: 0.2;
    }
}

/* Media queries for smaller screens */
@media screen and (max-width: 1024px) {
    .container {
        width: 90%;
        /* Adjust width for smaller screens */
    }

    .btn-logo,
    .btn-name {
        font-size: 14px;
        /* Decrease font size for smaller screens */
    }
}

/* Media queries for even smaller screens */
@media screen and (max-width: 768px) {
    .container {
        width: 95%;
        /* Adjust width for even smaller screens */
    }

    .btn-logo,
    .btn-name {
        font-size: 12px;
        /* Further decrease font size for even smaller screens */
    }
}</style>