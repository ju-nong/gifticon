<template>
    <h1 class="title">와 축하해!</h1>
    <div class="pick-container">
        <img :src="`/images/${data.list[pick]}`" alt="" />
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { dbStore, userStore } from "~/stores";

const db = dbStore();
const { data } = storeToRefs(db);

const user = userStore();
const { pick } = storeToRefs(user);
</script>

<style lang="scss"></style>
