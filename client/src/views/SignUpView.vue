<template>
    <div class="sign-up">
        <div class="sign-up-box">
            <div class="sign-up-head">
                <h2>Create your account</h2>
            </div>
            <form class="sign-up-form" @submit.prevent="signUp">
                <input class="username" type="text" placeholder="Enter Username" v-model="signUpForn.username" /><br/>
                <input class="password" type="password" placeholder="Enter Password" v-model="signUpForn.password" /><br/>
                <input class="password" type="password" placeholder="Confirm Password" v-model="signUpForn.password2" /><br/>
                <button class="signup-btn" type="submit">Sign Up</button>
                <div class="sign-in-div">
                    <router-link class="sign-in-link" to="/sign-in">Already have an account?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUpView',
    data() {
        return {
            signUpForn: {
                username: '',
                password: '',
                password2: ''
            }
        }
    },
    methods: {
        async signUp() {
            await axios.post('/auth/sign-up', this.signUpForn)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

.sign-up {
    display: flex;
    margin-inline: auto;
    width: 100%;
    padding: auto;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 120px);
}
.sign-up-box {
    border: 3px double #ffffff;
    background-color: rgba(255, 16, 239, 0.4);
    height: 240px;
    width: 40%;
    padding: 80px;
}

.sign-up-head {
    margin: 4px;
}

.sign-up-form {
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

.password2 {
    margin: 2px;
    width: 240px;
}

.signup-btn {
    margin: 2px;
}

.sign-in-div {
    margin: 2px;
}

</style>