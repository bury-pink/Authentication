<template>
    <div class="user-view">
        <div class="user">
            <div class="user-username">
                <h2>{{ user.username }}</h2>
                <p>{{ user.bio }}</p>
            </div>
            <div class="sign-out">
                <button @click="signOut">Sign Out</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UserView',
    data() {
        return {
            user: {}
        }
    },
    async created() {
        await axios.get('/auth/user')
        .then((res) => {
            this.user = res.data;
        })
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {
        async signOut() {
            await axios.post('/auth/sign-out')
            .then((res) => {
                console.log(res.data)
                this.$router.push('/sign-in')
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>
.user-view {
    padding: auto;
    width: 100%;
    margin: 0px;
}

.user {
    margin: 20px;
    width: 100%;
}

.user-username {
    width: 100%;
}
</style>