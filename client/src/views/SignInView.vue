<template>
    <div class="sign-in">
        <div class="sign-in-box">
            <div class="sign-in-head">
                <h2>Sign In</h2>
            </div>
            <form class="sign-in-form" @submit.prevent="signIn">
                <input class="username" type="text" placeholder="Enter Username" v-model="signInForm.username" /><br/>
                <input class="password" type="password" placeholder="Enter Password" v-model="signInForm.password" /><br/>
                <button class="signin-btn" type="submit">Sign In</button>
                <div class="sign-up-div">
                    <router-link class="sign-up-link" to="/sign-up">Don't have an account?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignInView',
    data() {
        return {
            signInForm: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async signIn() {
            await axios.post('/auth/sign-in', this.signInForm)
            .then((res) => {
                console.log(res.data);
                this.$router.push('/');
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
.sign-in {
    display: flex;
    margin-inline: auto;
    width: 100%;
    padding: auto;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 120px);
}
.sign-in-box {
    border: 3px double #ffffff;
    background-color: rgba(255, 16, 239, 0.4);
    height: 240px;
    width: 40%;
    padding: 80px;
}

.sign-in-head {
    margin: 4px;
}

.sign-in-form {
    width: 100%;
}

.username {
    margin: 2px;
    width: 240px;
}

.password {
    margin: 2px;
    width: 240px;
}

.signin-btn {
    margin: 2px;
}

.sign-up-div {
    margin: 2px;
}

</style>