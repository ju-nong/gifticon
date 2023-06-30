<template>
    <li>
        <h2>{{ score }}</h2>
        <img :src="path" :alt="`${score}등 이미지`" />
    </li>
</template>

<script setup>
import { ref as storageRef, deleteObject, getStorage } from "firebase/storage";
import { useFirebaseStorage, useStorageFileUrl, useStorageFile } from "vuefire";

const props = defineProps({
    index: {
        default: 0,
        type: Number,
    },
    name: {
        default: "",
        type: String,
    },
});

const score = computed(() => props.index + 1);
const path = ref("");

const storage = useFirebaseStorage();

watch(props.name, (to, from) => {
    if (to !== "") {
        const image = storageRef(storage, to);
        const { url } = useStorageFileUrl(image);

        path.value = url.value;
    }
});
</script>

<style lang="scss"></style>
