<template>
    <ul class="w-full"></ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { stepStore } from "~/stores";

const step = stepStore();
</script>

<style lang="scss"></style>
