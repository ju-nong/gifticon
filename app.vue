<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
definePageMeta({
    middleware: "check",
});

import { pageStore, dbStore, snackbarStore, adminStore } from "~/stores";
import { storeToRefs } from "pinia";

const router = useRouter();

const db = dbStore();
const admin = adminStore();

const page = pageStore();
const { block } = storeToRefs(page);

const snackbar = snackbarStore();

function addDangerSnackbar() {
    snackbar.addSnackbar({
        type: "danger",
        message: "응 못 뚫어",
    });

    page.setBlock(false);

    router.replace("/");
}

// 접근이 막혔을 때
watch(block, (to, from) => {
    if (!from && to) {
        addDangerSnackbar();
    }
});

onMounted(() => {
    db.setDB();
    admin.setAdmin();

    if (block.value) {
        addDangerSnackbar();
    }
});
</script>
