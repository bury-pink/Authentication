<template>
  <NavBar />
  <div class="content">
    <router-view class="router-view" />
  </div>
  <FooterBar />
</template>

<script>
import axios from 'axios';
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
      verify: ''
    }
  },
  created() {
    this.isVerified();
    
    setInterval(() => {
      this.isVerified();
    }, 300000);
  },
  methods: {
    async isVerified()  {
      await axios.post('/auth/verify')
      .then((res) => {
        this.verify = res.data.isVerified;
        if(this.verify === true) {
            this.$store.commit('SET_AUTH');
          } else {
            this.$store.commit('SET_UNAUTH')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0px;
  margin: 0px;
  background-color: #45344f;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
