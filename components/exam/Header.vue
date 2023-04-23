<template>
    <ul class="w-full"></ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { examStore } from "~/stores";

const exam = examStore();
const { step } = storeToRefs(exam);
</script>

<style lang="scss"></style>
