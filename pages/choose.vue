<template>
    <h1 class="title">자 선택해</h1>
    <div class="choose-container gap-4 flex py-4">
        <NuxtLink to="/" replace>
            <h2>문제 🤔</h2>
            <p>정답률에 따라 생일선물이 달라져</p>
        </NuxtLink>
        <button @click="handleReCheck">
            <h2>랜덤 🤩</h2>
            <p>그런거 필요 없고 그냥 랜덤임 ㅅㄱ</p>
        </button>
    </div>
</template>

<script setup>
function handleReCheck() {}
</script>

<style lang="scss">
.choose-container {
    > a,
    > button {
        flex: 1 1 100%;
        padding: 0.5rem;

        transition: transform 0.5s;

        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;

        text-align: center;

        &:hover {
            transform: translateY(-5px);
        }

        h2 {
            font-size: 1.25rem;
            font-weight: 600;
            padding: 1rem 0rem;
        }

        p {
            font-size: 1rem;
            padding-bottom: 0.5rem;
        }
    }
}

@media screen and (max-width: 767px) {
    .choose-container {
        flex-direction: column;
    }
}
</style>
