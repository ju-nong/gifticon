<template>
    <div class="w-[100vw] h-[100vh] fixed z-[100]">
        <div
            class="w-full h-full absolute top-0 left-0 bg-black/60 z-[90]"
        ></div>
        <div
            class="modal-container max-w-[400px] min-w-[300px] bg-white rounded-lg p-6 relative z-[100] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        ></div>
    </div>
</template>

<script setup></script>

<style lang="scss">
@media screen and (max-width: 767px) {
    .modal-container {
        max-width: 60vw;
    }
}
</style>
