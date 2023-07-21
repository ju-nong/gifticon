<template>
    <h1 class="title flex justify-between">
        방명록

        <NuxtLink to="/">
            <Icon
                name="ic:round-home"
                size="1.5rem"
                color="rgb(26, 136, 233)"
            />
        </NuxtLink>
    </h1>
    <div
        v-if="load"
        class="board-container flex gap-6 pt-6 flex-col"
        :key="load"
    >
        <div v-for="(item, index) in boards" :key="index">
            <h2>{{ index + 1 }}. {{ item.name }} {{ item.birthday }}</h2>
            <h2>
                {{ item.score === -1 ? "랜덤" : `시험 ${item.score}점` }}
                <span>등급 : {{ config[item.pick] }}</span>
            </h2>
            <img :src="item.url" alt="" />

            <!-- <img :src="item.url" alt="" /> -->
            <p>{{ item.content }}</p>
        </div>
    </div>
    <div v-else class="flex justify-center items-center min-h-[400px]">
        <span class="loader"></span>
    </div>
</template>

<script setup>
import { boardStore } from "~/stores";
import { storeToRefs } from "pinia";
import { useFirebaseStorage, useStorageFileUrl } from "vuefire";
import { ref as storageRef } from "firebase/storage";

const board = boardStore();
const { data } = storeToRefs(board);

const boards = ref(data.value?.item);
const storage = useFirebaseStorage();

const load = ref(false);
const config = reactive(["하", "중", "상"]);

function updateBoard() {
    board.setBoard();

    setTimeout(() => {
        boards.value = board.getData?.item ?? [];
        load.value = true;
    }, 2000);
}

onBeforeMount(() => {
    if (!data.value?.item.length) {
        updateBoard();
    } else {
        load.value = true;
    }
});

// 스토리지 이미지 가져오는 함수
// async function getImages() {
//     for (let i = 0; i < boards.value.length; i++) {
//         const image = storageRef(storage, boards.value[i].gift);
//         const { url, promise } = useStorageFileUrl(image);

//         await promise.value;

//         boards.value[i].url = await url.value;
//     }

//     load.value = true;
// }
</script>

<style lang="scss">
.board-container {
    > div {
        position: relative;
        width: 100%;
        padding: 1rem;
        border-radius: 4px;
        transition: transform 0.5s;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);

        &:hover {
            transform: translateY(-5px);
        }

        > h2 {
            display: flex;
            justify-content: space-between;
            align-items: center;

            > span {
                color: #3e7def;
                font-size: 1.05rem;
                font-weight: bold;
            }
        }

        > img {
            margin: 1rem 0;
        }
    }
}
</style>
