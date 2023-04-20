<template>
    <TransitionSlide duration="300">
        <div
            v-if="visible"
            class="flex fixed items-center max-w-[767px] text-white rounded-lg p-3 gap-x-3 top-4 pr-4 whitespace-pre-line z-10 shadow-md"
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
        icon: "material-symbols:check-circle-rounded",
        color: "bg-emerald-300",
    },
    danger: {
        icon: "ph:warning-circle-fill",
        color: "bg-red-400",
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
