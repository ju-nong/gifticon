<template>
    <div>어서오고{{ step }}</div>
</template>

<script setup>
const route = useRoute();

console.log(route.params.step);
</script>

<style lang="scss"></style>
