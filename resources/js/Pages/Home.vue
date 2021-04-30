<template>
    <h1>
        {{ name }}
    </h1>
</template>

<script>
import Layout from '@/Shared/Layout';

export default {    
    name: "Home",
    props: ['name'],
    layout: Layout
}
</script>

<style lang="scss" scoped>

</style>
