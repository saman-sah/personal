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
    // invok function for getting data from API
    this.getUserInfo();    
  },
  mounted() {
    const customJs = document.createElement("script");
    customJs.setAttribute("src","../assets/js/custom.js");
    document.head.appendChild(customJs);
  },
  data() {
    return {
      base_url: 'http://localhost:3000/',
      userInfo: {
        "header": {
            "title": "Saman Sahraei",
            "caption": "I'm a Front-End Developer"
        },
        "about": {
            "birthday": "22 September 1991",
            "age": 31,
            "degree": "Bachelor of Computer Software Engineering",
            "email": "sahraei.saman91@gmail.com",
            "website": "www.samsahra.com",
            "city": "Abdanan, Ilam, IR"
        },
        "skills": {
            "html": {
                "title": "HTML",
                "percentage": 100
            },
            "css": {
                "title": "CSS",
                "percentage": 100
            },
            "javascript": {
                "title": "Javascript",
                "percentage": 100
            },
            "vue": {
                "title": "Vue",
                "percentage": 100
            },
            "sass": {
                "title": "SASS",
                "percentage": 80
            },
            "typescript": {
                "title": "Typescript",
                "percentage": 60
            },
            "wordpress": {
                "title": "Wordpress",
                "percentage": 70
            },
            "photoshop": {
                "title": "Photoshop",
                "percentage": 60
            },
            "illustrator": {
                "title": "Illustrator",
                "percentage": 60
            }
        },
        "resume": {
            "1": {
                "role":"FRONT-END DEVELOPER",
                "time": "Oct 2021 - Dec 2022",
                "company": "Stocksoftheday LLC",
                "items": {
                    "1": "Created the structure of front-end templates with Vuejs",
                    "2": "Create all pages with elementor"
                }
            },
            "2": {
                "role":"WORDPRESS DEVELOPER",
                "time": "Apr 2019 - Sep 2022",
                "company": "Freelancer",
                "items": {
                    "1": "https://www.accutekpackaging.com",
                    "2": "https://www.greenkong.com/",
                    "3": "http://dev.crossroadstrikes.com/"
                }
            },
            "3": {
                "role":"FRONT-END DEVELOPER",
                "time": "Apr 2019 - Sep 2021",
                "company": "Shop1 LLC",
                "items": {
                    "1":"Created the structure of front-end templates with Veujs.",
                    "2":"Converted 11 HTML templates to Vuejs",
                    "3":"Converted vue to Vuex",
                    "4":"Design global pages and photos"

                }
            }

        },
      }
    }
  },
  components: {
    'header-component': Header,
    'footer-component': Footer
  },
  methods: {
    getUserInfo() {
      // Get User Info from API
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