<template>
<header-component ></header-component>
  <router-view
  :userDetail= userInfo
  ></router-view>
  <footer-component></footer-component>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  created() {
    this.getUserInfo();    
  },
  updated() {
    const customJs = document.createElement("script");
    customJs.setAttribute("src","../assets/js/custom.js");
    document.head.appendChild(customJs);
  },
  data() {
    return {
      base_url: 'http://localhost:3000/',
      userInfo: null,
    }
  },
  components: {
    'header-component': Header,
    'footer-component': Footer
  },
  methods: {
    getUserInfo() {
      this.axios.get(this.base_url+'saman', {
        headers: {
          Accept: "application/json",
        }
      })
      .then((response)=> {
        this.userInfo= response.data;
      })
      .catch((err)=>{
        console.log(err.message);
      })
    }
  },
}
</script>

<style>

</style>