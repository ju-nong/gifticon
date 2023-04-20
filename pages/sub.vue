<template>
    <div>서브고요</div>
    <NuxtLink to="/">메인</NuxtLink>
</template>

<script setup>
import { userStore } from "~/stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { block } = storeToRefs(user);

onMounted(() => {
    // console.log(block.value);
});
</script>

<style lang="scss"></style>
