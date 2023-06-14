<template>
    <h1 class="title">어 준용이 어서오고</h1>
    <div class="admin-container flex flex-col mt-[16px]">
        <div
            class="admin-container-header flex gap-x-[8px] -mb-[1px] relative z-[2]"
        >
            <button
                v-for="(item, index) in config.list"
                :key="index"
                @click="config.active = index"
                :class="index === config.active ? 'active' : ''"
            >
                {{ item.icon }}
            </button>
        </div>
        <div class="admin-container-main relative z-[1] p-[8px]">
            <component :is="activeComponent" />
        </div>
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

<style lang="scss">
.admin-container {
    &-header {
        > button {
            background-color: #fff;
            padding: 4px 12px;
            border: 1px solid #eee;
            border-radius: 5px 5px 0px 0px;
            border-color: transparent;
            border-bottom-color: #eee;

            &:hover {
                background-color: #efefef;
            }

            &.active {
                border-color: #eee;
                border-bottom-color: transparent;
                background-color: #efefef;
            }
        }
    }

    &-main {
        border: 1px solid #eee;
    }
}
</style>
