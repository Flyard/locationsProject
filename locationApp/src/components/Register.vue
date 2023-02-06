<template>
    <form>
        <label>Username: </label>
        <input 
            type="text"
            v-model = 'username'
            placeholder="username"
            required
        >
        <br>
        <label>Password: </label>
        <input 
            type="password"
            v-model = 'password'
            placeholder="password"
            required
        >
        <br>
        <button type="submit" v-on:click="register()">Register</button>
    </form>
</template>

<script>
    const url = 'http://localhost:3000/users/register';
    import axios from 'axios';

    export default {
        name: 'Register',
        data(){
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            async register() {
                let sentData = await axios.post(url, {
                    username: this.username, 
                    password: this.password
                })
                console.warn(sentData);
            }
        }
    }

</script>