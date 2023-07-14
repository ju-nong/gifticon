<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
definePageMeta({
    middleware: "check",
});

import {
    pageStore,
    dbStore,
    snackbarStore,
    adminStore,
    boardStore,
    examStore,
} from "~/stores";
import { storeToRefs } from "pinia";

const router = useRouter();

const db = dbStore();
const admin = adminStore();
const board = boardStore();

const page = pageStore();
const { block } = storeToRefs(page);

const snackbar = snackbarStore();

const exam = examStore();
const { data } = storeToRefs(exam);

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
    board.setBoard();
    exam.setExam();

    if (block.value) {
        addDangerSnackbar();
    }
});
</script>
