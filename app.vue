<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
definePageMeta({
    middleware: "check",
});
import { userStore, dbStore, snackbarStore } from "~/stores";
import { storeToRefs } from "pinia";

const router = useRouter();

const db = dbStore();

const user = userStore();
const { block } = storeToRefs(user);

const snackbar = snackbarStore();

function addDangerSnackbar() {
    snackbar.addSnackbar({
        type: "danger",
        message: "님아 이상한 짓 하지마세요 😤",
    });

    router.replace("/");
    console.log("왜 안됨");
}

watch(block, (to, from) => {
    if (!fomr && to) {
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
