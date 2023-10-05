<script setup>
    const { data } = await useFetch('/api/currency/GBP');
</script>

<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit tenetur natus. Aspernatur quibusdam modi,
            incidunt ipsum vero quidem nemo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit tenetur natus. Aspernatur quibusdam modi,
            incidunt ipsum vero quidem nemo.</p>
        <div> {{ data }}</div>
    </div>
</template>
<style  scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>