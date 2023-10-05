<script setup>
    defineProps(['error']);

    const handleClearError = () => clearError({redirect: '/'})
</script>

<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <div class="mt-7">{{ error.message }}</div>
    <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>



<style lang="scss" scoped>

</style>