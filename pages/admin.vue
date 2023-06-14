<template>
    <h1 class="title">어 준용이 어서오고</h1>
    <div class="admin-container">
        <button
            v-for="(item, index) in config.list"
            :key="index"
            @click="config.active = index"
        >
            {{ item.icon }}
        </button>
        <component :is="activeComponent" />
    </div>
</template>

<script setup>
// 핸들링하기 위함
const config = reactive({
    list: [
        {
            icon: "📷",
            name: "camera",
        },
        {
            icon: "📝",
            name: "exam",
        },
    ],
    active: 0,
});

// 보여줄 컴포넌트를 담음
const components = reactive({
    camera: resolveComponent("AdminCamera"),
    exam: resolveComponent("AdminExam"),
});

// 현재 Active된 Component 뱉음
const activeComponent = computed(
    () => components[config.list[config.active].name],
);
</script>

<style lang="scss"></style>
