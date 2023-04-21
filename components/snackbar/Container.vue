<template>
    <SnackbarItem
        v-for="({ type, message }, index) in snackbar"
        :type="type"
        :message="message"
    />
</template>

<script setup>
import { snackbarStore } from "~/stores";
import { storeToRefs } from "pinia";
const snackbars = snackbarStore();
const { snackbar } = storeToRefs(snackbars);
</script>

<style lang="scss"></style>
