<template>
    <h1 class="title">자 선택해</h1>
    <div class="choose-container flex gap-6 py-6">
        <NuxtLink class="inline-box" to="/description" replace>
            <h2>시험 🤔</h2>
            <p>정답률에 따라 생일선물이 달라져</p>
        </NuxtLink>
        <button class="inline-box" @click="handleReCheck">
            <h2>랜덤 🤩</h2>
            <p>그런거 필요 없고 그냥 랜덤임 ㅅㄱ</p>
        </button>
    </div>
</template>

<script setup>
import { modalStore } from "~/stores";

const router = useRouter();

const modal = modalStore();

function moveRandom() {
    router.replace("/random");
}

function handleReCheck() {
    modal.setModal(
        {
            name: "game-icons:perspective-dice-six-faces-random",
            color: "#F7E20C",
        },
        " 진짜 랜덤 고를거야?",
        moveRandom
    );
}
</script>

<style lang="scss">
.choose-container {
    > a,
    > button {
        flex: 1 1 100%;
        padding: 0.5rem;

        border-radius: 10px;

        text-align: center;

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
