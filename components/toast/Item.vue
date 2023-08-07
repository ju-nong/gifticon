<template>
    <TransitionSlide duration="300">
        <div
            v-if="visible"
            class="min-w-max flex fixed items-center text-white rounded-lg p-3 gap-x-3 top-4 left-[50%] translate-x-[-50%] pr-4 whitespace-pre-line z-10 shadow-md"
            :class="config[props.type].color"
        >
            <Icon :name="config[props.type].icon" size="1.5rem" />
            {{ props.message }}
        </div>
    </TransitionSlide>
</template>

<script setup>
const props = defineProps({
    type: String,
    message: String,
});

const visible = ref(false);

const config = reactive({
    check: {
        color: "bg-emerald-300",
        icon: "material-symbols:check-circle-rounded",
    },
    danger: {
        color: "bg-red-400",
        icon: "ph:warning-circle-fill",
    },
    info: {
        color: "bg-blue-500",
        icon: "material-symbols:info-rounded",
    },
});

onMounted(() => {
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 4000);
});
</script>

<style lang="scss"></style>
