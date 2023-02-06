<template>
    <div>Landing page</div>
    <router-link :to="this.$router.push('/login')">Login</router-link>
    <router-view></router-view>
    
</template>
<script>
    export default {
        name: 'Landing'
    }
</script>