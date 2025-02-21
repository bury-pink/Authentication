<template>
    <nav class="navbar">
        <router-link class="router-link" to="/">
            <h2>Home</h2>
        </router-link>
        <router-link class="router-link" to="/about">
            <h2>About</h2>
        </router-link>
        <div class="nav-div"></div>
        <router-link v-if="isAuthenticated" class="profile-link" to="/user">
            Profile
        </router-link>
        <router-link v-else class="router-link" to="/sign-in">Sign In</router-link>
    </nav>
</template>

<script>
import axios from 'axios';


export default {
    name: 'NavBar',
    data() {
        return {
            baseUrl: axios.defaults.baseURL
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.isAuthenticated;
        },
    }
}
</script>

<style>
.navbar {
    margin: 0px;
    height: 64px;
    color: #ffffff;
    font-size: 24px;
    background-image: linear-gradient(to right, #a41096, #ff58f9 30%, #a41096 70%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ffffff;
} a {
    color: #ffffff
}

.nav-div {
    flex: 5;
}

.router-link {
    min-width: 160px;
    flex: 1;
    text-align: center;
    height: 64px;
    padding: auto;
    padding-top: 40px;
} h2 {
    font-size: 24px;
}


.profile-link {
    width: 64px;
    display: flex;
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    height: 64px;
    text-align: center;
    padding: 8px;
} h2 {
    font-size: 24px;
    margin: 0px;
    flex: 4;
}

.pfp-image {
    padding: auto;
    height: 48px;
    width: 48px;
    border: 2px solid #ffffff;
    border-radius: 24px;
    margin-top: 2px;
}
</style>