<template>
    <div class="big_container">
        <div class="first_container">
            <h1 class="title">All locations</h1>
            <nav class="navbar">
                <button type="button" class="button" v-on:click="this.$router.push('/add')" v-if="checkAdmin()">Add a location</button>
                <button type="button" class="button" v-on:click="logout()">Logout</button>
                <button type="button" class="button" v-on:click="fetchData()">Data</button> 
            </nav>
        </div>
        <div class="cardContainer"> 
            <div class="second_container" v-for="locations in locations">
                <LocationsCards class="locationCard" 
                    :_id="locations._id"
                    :filmType ="locations.filmType"
                    :filmProducerName="locations.filmProducerName"
                    :endDate="locations.endDate"
                    :filmName="locations.filmName"
                    :district="locations.district"
                    :sourcelocationId="locations.sourcelocationId"
                    :filmDirectorName="locations.filmDirectorName"
                    :address="locations.address"
                    :startDate = "locations.startDate"
                    :year="locations.year" 
                />
            </div>
        </div>
        <br>
        <div class="offsetButtons">
            <button type="button" class="button" v-on:click="() => {
            lessOffset()
            fetchData()
        }">Previous</button>
            <p>{{ page }}</p>
        <button type="button" class="button" v-on:click="() => {
            addOffset()
            fetchData()
        }">Next</button>
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
            locations: [],
            page: 1,
            nextPage: false,
            offset: 0,
            decOffset: true,
            inccheckOffset: true
        };
    },
    created() {
        console.log(this.offset);
    },

    methods: {
        checkAdmin() {
            if(localStorage.getItem("role") === "admin") return true;
            else return false;
        },

        addOffset() {
            this.offset += 10;
            this.page++;
        },

        lessOffset() {
            this.offset -= 10;
            if(this.offset < 0) {this.offset = 0}
            this.page--;
            if(this.page < 0) {this.page = 1}
        },

        logout() {
            try {
                localStorage.clear();
                this.$router.push("/");
            }
            catch {
                console.log("error");
            }
        },
        async fetchData() {
            this.token = localStorage.getItem("token");
            let limit = 24;
            let offset = this.offset;

            const url = `https://locationsproject-backend.onrender.com/locations?limit=${limit}&offset=${offset}`;
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
                        this.$router.push('/login');
                    }
                })
        },
    },

} 

</script> 

<style>
@import './css/locations.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
