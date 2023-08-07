<template>
    <ToastItem
        v-for="({ type, message }, index) in toast"
        :type="type"
        :message="message"
    />
</template>

<script setup>
import { toastStore } from "~/stores";
import { storeToRefs } from "pinia";
const toasts = toastStore();
const { toast } = storeToRefs(toasts);
</script>

<style lang="scss"></style>
