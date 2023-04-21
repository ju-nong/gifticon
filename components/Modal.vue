<template>
    <div class="w-[100vw] h-[100vh] fixed z-[100]">
        <div
            class="w-full h-full absolute top-0 left-0 bg-black/60 z-[90]"
        ></div>
        <div
            class="modal-container max-w-[400px] min-w-[300px] p-7 pb-10 bg-white rounded-lg relative z-[100] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center"
        >
            <button class="close text-4xl text-[#c0c5cb] flex self-end">
                <Icon name="ic:round-close" />
            </button>
            <Icon
                class="mb-4"
                name="game-icons:perspective-dice-six-faces-random"
                size="80px"
                color="#F7E20C"
            />
            <p class="mt-4 mb-10 text-[18px] font-semibold">
                진짜 랜덤 고를거야?
            </p>
            <button class="primary-button small">확인</button>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
@media screen and (max-width: 767px) {
    .modal-container {
        max-width: 60vw;
        .close {
            font-size: 20px;
        }
    }
}
</style>
