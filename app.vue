<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
definePageMeta({
    middleware: "check",
});
import { userStore, dbStore } from "~/stores";
import { storeToRefs } from "pinia";

const user = userStore();

const db = dbStore();

onMounted(() => {
    db.setDB();
});
</script>
