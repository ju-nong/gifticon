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
        <h2 class="font-bold">상품을 선택하거나 운에 맡겨보세요!</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{ item }}
            </li>
        </ul>
        <div class="button-container">
            <button>🎯 선택 완료</button>
            <button>🎰 랜덤 선택</button>
            <button @click="list = randomEmojis(3)">🎩 다시 뽑기</button>
        </div>
    </div>
</template>
d

<script setup>
function randomEmojis(length) {
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
        emojis.push(randomEmoji);
    }

    return emojis;
}

const list = ref(randomEmojis(3));
</script>

<style lang="scss"></style>
