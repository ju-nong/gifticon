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
            <span>{{ index + 1 }}</span>
            <h2>
                {{ item.name }} {{ item.birthday }}
                <span>{{
                    item.score === -1 ? "랜덤" : `시험 ${item.score}점`
                }}</span>
            </h2>
            <img :src="item.url" alt="" />
            <p>{{ item.content }}</p>
        </div>
    </div>
</template>

<script setup>
import { boardStore } from "~/stores";
import { storeToRefs } from "pinia";
import { useFirebaseStorage, useStorageFileUrl } from "vuefire";
import { ref as storageRef } from "firebase/storage";

const board = boardStore();
const { getData: data } = storeToRefs(board);

const boards = ref(data.value.item);
const storage = useFirebaseStorage();

const load = ref(false);

async function getImages() {
    for (let i = 0; i < boards.value.length; i++) {
        const image = storageRef(storage, boards.value[i].gift);
        const { url, promise } = useStorageFileUrl(image);

        await promise.value;

        boards.value[i].url = await url.value;
    }

    load.value = true;
}

onBeforeMount(() => {
    getImages();
});
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

        > span {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #3e7def;
            font-size: 1.25rem;
            font-weight: bold;
        }

        > h2 {
        }

        > img {
            margin: 1rem 0;
        }
    }
}
</style>
