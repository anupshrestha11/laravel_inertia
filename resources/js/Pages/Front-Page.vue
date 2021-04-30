<template>
<h1>{{name}}</h1>
</template>

<script>
import Layout from '@/Shared/Layout';
export default {
metaInfo:{
    title: "Front-Page"
},
layout: Layout
,
props:['name']
}
</script>

<style>

</style>
