<template>
    <h1>All locations</h1>

    <button type="button" v-on:click="displayLocationsTittle()">Log data</button>
    <button type="button" v-on:click="logout()">Logout</button>


</template>

<script>
import axios from 'axios';

    export default {
        name: 'Locations',
        data() {
            return {
                token: '',
                locations: {
                    filmType: '',
                    filmProducerName:'',
                    endDate:'',
                    filmName:'',
                    district:'',
                    sourcelocationId: '',
                    filmDirectorName:'',
                    address:'',
                    startDate:'',
                    year:''
                }
            }
        },
        methods: {
            logout(){
                try{
                    localStorage.removeItem('token');
                    this.$router.push('/');
                } catch {
                    console.log('error')
                }
            },

            displayToken() {
                console.log(localStorage.getItem('token'));
            },

            async displayLocationsTittle() {
                const url = 'http://localhost:3000/locations'
                this.token = localStorage.getItem('token');
                let getLocations = await axios.get(url, {
                    headers: {
                        'Authorization' : 'Bearer ' + this.token
                    }
                })
                .then((res) => {
                    this.locations = res.data;
                    /*filmProducerName:'',
                    endDate:'',
                    filmName:'',
                    district:'',
                    sourcelocationId: '',
                    filmDirectorName:'',
                    address:'',
                    startDate:'',
                    year:''*/
                    
                })
            }
        }
    } 

</script> 