<template>
    <form>
        <label>Username: </label>
        <input 
            type="text"
            placeholder="username"
            v-model = 'username'
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
        <button type="button" v-on:click="login()">Login</button>
    </form>
</template>

<script>
    const url = 'http://localhost:3000/users/login';
    import axios from 'axios';

    export default {
        name: 'Login',
        data(){
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            async login() {
                let sentData = await axios.post(url, {
                    username: this.username, 
                    password: this.password
                })
                .then((res) => {
                    if(res.status === 200) {
                        localStorage.setItem('token', res.data.jwt);
                        console.log(res.data.jwt);
                        this.$router.go('/locations');
                    }
                    if(res.status === 401) {
                        console.log('wrong credientials!')
                    }
                })
            },  
        }
    }
</script>