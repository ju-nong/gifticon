<template>
    <h1 class="title">와 축하해!</h1>
    <div class="pick-container text-center">
        <div class="p-4">
            <a
                :href="`/images/${data?.list[pick]}`"
                download="준용이의생일선물"
            >
                <!-- <img
                    src="https://mblogthumb-phinf.pstatic.net/MjAyMjAxMzFfNzUg/MDAxNjQzNjAzODY4Njgz.3W2tbeaRPcJyYRBZ1lBJxr8dxwakwvI8KNZNwKfTcp8g.TXuC2BmjbaXbdDy-PLoE7-nr3q8iJ0oP455pWAa4-A4g.JPEG.superpig518/1643603485363.jpg?type=w800"
                    alt=""
                /> -->
                <img
                    :src="`/images/${data?.list[pick]}`"
                    alt="기프티콘"
                    @load="handleLoad"
                />
            </a>
        </div>
        <p class="text-xs">위에 이미지를 클릭해서 다운로드 받을 수 있어</p>
        <h2 class="pb-2 pt-4 font-semibold">와 생일 축하해!</h2>
        <p class="py-2 font-light text-sm">
            생일선물은 이거고 다음 기회는 1년 뒤야. 할 말 있으면 밑에다가 적어봐
        </p>
        <textarea
            v-model="message"
            name=""
            id=""
            rows="3"
            placeholder="준용아 고마워!"
            class="w-full p-2 my-4"
        ></textarea>
        <button class="primary-button" @click="handleSend">전송</button>
    </div>
</template>

<script setup>
import confetti from "canvas-confetti";
import { storeToRefs } from "pinia";
import { dbStore, userStore, snackbarStore } from "~/stores";

const router = useRouter();

const db = dbStore();
const { data } = storeToRefs(db);

const user = userStore();
const { pick } = storeToRefs(user);

const snackbar = snackbarStore();

const message = ref();

function handleSend() {
    db.updateDB("message", message.value);

    snackbar.addSnackbar({
        type: "check",
        message: "메시지 전송 완료 안녕~",
    });

    router.replace("/");
}

function handleLoad() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

onMounted(() => {
    user.setLogin(false);
});
</script>

<style lang="scss">
textarea {
    border: 1px solid #000;
    border-radius: 4px;
}
</style>
