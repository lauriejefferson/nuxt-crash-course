<script setup>
    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the product
    const { data: product } = await useFetch(uri)
    definePageMeta({
        layout: 'products'
    });

    if (!product.value){
        throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
    }
</script>
<template>
    <div>
    <Head>
     <Title>Nuxt Dojo | {{ product.title }}</Title>
     <Meta name="description" :content="product.description" />
    </Head>
       <ProductDetails :product="product" />
    </div>
</template>
<style scoped>

</style>