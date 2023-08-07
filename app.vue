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
    toastStore,
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

const toast = toastStore();

const exam = examStore();
const { data } = storeToRefs(exam);

function addDangerToast() {
    toast.addToast({
        type: "danger",
        message: "응 못 뚫어",
    });

    page.setBlock(false);

    router.replace("/");
}

// 접근이 막혔을 때
watch(block, (to, from) => {
    if (!from && to) {
        addDangerToast();
    }
});

onMounted(() => {
    db.setDB();
    admin.setAdmin();
    board.setBoard();
    exam.setExam();

    if (block.value) {
        addDangerToast();
    }
});
</script>
