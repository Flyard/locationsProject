<template>
    <div class="big_container">
        <div class="first_container">
            <h1 class="title">All locations</h1>
            <nav class="navbar">
                <button type="button" class="button" v-on:click="displayLocationsTittle()">Log data</button>
                <button type="button" class="button" v-on:click="logout()">Logout</button>
            </nav>
        </div>

        <div class="second_container" v-for="values in locations">
            <LocationsCards class="locationCard" 
                :_id="values._id"
                :filmType ="values.filmType"
                :filmProducerName="values.filmProducerName"
                :endDate="values.endDate"
                :filmName="values.filmName"
                :district="values.district"
                :sourcelocationId="values.sourcelocationId"
                :filmDirectorName="values.filmDirectorName"
                :address="values.address"
                :startDate = "values.startDate"
                :year="values.year"
            />
        </div>


    </div>




</template>

<script>
import axios from 'axios';
import LocationsCards from './LocationsCards.vue';


    export default {
    name: "Locations",
    components: { 
        LocationsCards 
    },
    data() {
        return {
            token: "",
            index: 0,
            locations: {
                _id: "",
                filmType: "",
                filmProducerName: "",
                endDate: "",
                filmName: "",
                district: "",
                sourcelocationId: "",
                filmDirectorName: "",
                address: "",
                startDate: "",
                year: ""
            },
        };
    },
    methods: {
        logout() {
            try {
                localStorage.removeItem("token");
                this.$router.push("/");
            }
            catch {
                console.log("error");
            }
        },
        async displayLocationsTittle() {
            const url = "http://localhost:3000/locations";
            this.token = localStorage.getItem("token");
            let getLocations = await axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
                .then((res) => {
                this.locations = res.data;
            })
                .catch((res) => {
                    if(localStorage.getItem("token") === null) {
                        alert('You are not authentificated!')
                    }
                })
        },
        doClick() {
            console.log('click')
        }
    },

} 

</script> 

<style>
@import './css/locations.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
