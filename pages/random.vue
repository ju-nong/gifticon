<template>
    <h1 class="title">
        <Icon
            name="game-icons:perspective-dice-six-faces-random"
            color="#F7E20C"
            size="3rem"
        />
        자 골라봐
    </h1>
    <div class="random-container flex gap-4 flex-col py-4">
        <h2 class="font-bold">생일선물을 선택하거나 운에 맡겨보세요!</h2>
        <ul class="flex flex-wrap items-center justify-center gap-6 py-4">
            <li
                v-for="(item, index) in list"
                :key="index"
                class="inline-box w-[100px] h-[100px] cursor-pointer text-center leading-[100px] text-4xl rounded-xl"
                :class="pick === index ? 'pick' : ''"
                @click="pick = pick === index ? -1 : index"
            >
                {{ item }}
            </li>
        </ul>
        <div
            class="button-container flex flex-wrap items-center justify-center gap-4"
        >
            <button @click="handlePick">🎯 선택 완료</button>
            <button @click="randomPick">🎰 랜덤 선택</button>
            <button @click="list = randomEmojis(3)">🎩 다시 뽑기</button>
        </div>
    </div>
</template>

<script setup>
import { snackbarStore, modalStore, userStore } from "~/stores";
import confetti from "canvas-confetti";

const pick = ref(-1);
const picking = ref(false);
const randomInterval = ref(false);

const modal = modalStore();

const snackbar = snackbarStore();

const user = userStore();

const router = useRouter();

function randomEmojis(length) {
    if (picking.value) {
        snackbar.addSnackbar({
            type: "danger",
            message: "지금 랜덤 선택 중이잖아 🎰",
        });

        return list.value;
    }

    pick.value = -1;
    let emojis = [];
    const emojiRangeStart = 0x1f600;
    const emojiRangeEnd = 0x1f64f;

    for (let i = 0; i < length; i++) {
        const randomEmoji = String.fromCodePoint(
            Math.floor(
                Math.random() * (emojiRangeEnd - emojiRangeStart) +
                    emojiRangeStart,
            ),
        );

        if (emojis.includes(randomEmoji)) {
            i--;
        } else {
            emojis.push(randomEmoji);
        }
    }

    return emojis;
}

const list = ref(randomEmojis(3));

function randomPick() {
    if (picking.value) {
        return;
    }

    picking.value = true;

    randomInterval.value = setInterval(() => {
        pick.value = Math.floor(Math.random() * 3);
    }, 100);

    setTimeout(() => {
        clearInterval(randomInterval.value);
        picking.value = false;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    }, 3000);
}

function movePick() {
    user.setPick(pick.value);

    router.replace("/pick");
}

function reCheckModal4() {
    modal.setModal(
        {
            name: "material-symbols:check-circle-rounded",
            color: "#52de47",
        },
        "진짜 선택한다?",
        movePick,
        "ㅇㅇ",
    );
}

function reCheckModal3() {
    modal.setModal(
        {
            name: "material-symbols:check-circle-rounded",
            color: "#52de47",
        },
        "한 번 더 생각해보는 거 어때?",
        reCheckModal4,
        "아 이거로 결정했다고",
    );
}

function reCheckModal2() {
    modal.setModal(
        {
            name: "material-symbols:check-circle-rounded",
            color: "#52de47",
        },
        "진짜로?!",
        reCheckModal3,
        "확인!",
    );
}

function reCheckModal1() {
    modal.setModal(
        {
            name: "material-symbols:check-circle-rounded",
            color: "#52de47",
        },
        "진짜 선택한다?",
        reCheckModal2,
    );
}

function handlePick() {
    if (picking.value) {
        snackbar.addSnackbar({
            type: "danger",
            message: "지금 랜덤 선택 중이잖아 🎰",
        });

        return;
    }

    if (pick.value === -1) {
        snackbar.addSnackbar({
            type: "danger",
            message: "생일선물 받기 싫지? 🎯",
        });

        return;
    }

    modal.setModal(
        {
            name: "mdi:alert-circle",
            color: "red",
        },
        "한 번 선택하면 1년 기다려야 돼요~",
        reCheckModal1,
    );
}
</script>

<style lang="scss">
.random-container {
    li {
        &.pick {
            outline: 2px solid #45a5fc;
        }
    }
    .button-container {
        button {
            border-radius: 10px;
            padding: 0.5rem;
            background: linear-gradient(#69cdfd, #45a5fc) #000;
            color: #fff;
            font-weight: 600;
        }
    }
}
</style>
