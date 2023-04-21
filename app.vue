<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
definePageMeta({
    middleware: "check",
});
import { pageStore, dbStore, snackbarStore } from "~/stores";
import { storeToRefs } from "pinia";

const router = useRouter();

const db = dbStore();

const page = pageStore();
const { block } = storeToRefs(page);

const snackbar = snackbarStore();

function addDangerSnackbar() {
    snackbar.addSnackbar({
        type: "danger",
        message: "님아 이상한 짓 하지마세요 😤",
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

    if (block.value) {
        addDangerSnackbar();
    }
});
</script>
