<template>
    <h1>Hello World!</h1>
    <nav>
        <router-link :to="this.$router.push('/login')">Login</router-link>
        <router-view></router-view>
    
    </nav>

</template>