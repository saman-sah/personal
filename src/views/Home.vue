<template>
  <div class="home">
     <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container" data-aos="fade-in">
        <h1>Saman Sahraei</h1>
        <p>I'm <span class="typed" data-typed-items="Front-End Developer, Freelancer, Programmer"></span></p>
      </div>
    </section><!-- End Hero -->

    <main id="main" v-if="userDetail">
      <!-- ======= About component ======= -->
      <about-component :aboutDetails= userDetail.about></about-component>
      
      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio section-bg">
        <div class="container">

          <div class="section-title">
            <h2>Portfolio</h2>
          </div>

          <div class="row" data-aos="fade-up">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li @click="selected_portfolio='portfolio-website'">Websites</li>
                <li @click="selected_portfolio='portfolio-illustrator'">Illustrator</li>
                <li @click="selected_portfolio='portfolio-phootshop'">Photoshop</li>
              </ul>
            </div>
          </div>
          <keep-alive>        
            <component :is="selected_portfolio"></component>
          </keep-alive>
        </div>
      </section><!-- End Portfolio Section -->

      <!-- ======= Resume component ======= -->
      <resume-component :resumeDetails= userDetail.resume></resume-component>
      <!-- ======= Certificates component ======= -->
      <certificates-component></certificates-component>
      <!-- ======= Skill component ======= -->
      <skill-component :skillDetails= userDetail.skills></skill-component>
      <!-- ======= Learning component ======= -->
      <learning-component></learning-component>
      
    </main><!-- End #main -->
  </div>
</template>

<script>
import About from '../components/home/About.vue'
import Certificates from '../components/home/Certificates.vue'
import Skill from '../components/home/Skill.vue'
import Resume from '../components/home/Resume.vue'
import Learning from '../components/home/Learning.vue'
import Websites from '../components/portfolio/Websites.vue'
import Illustrator from '../components/portfolio/Illustrator.vue'
import Photoshop from '../components/portfolio/Photoshop.vue'
export default {
  props:['userDetail'],
  data() {
    return {
      selected_portfolio: 'portfolio-website',
    }
  },
  components: {
    'about-component': About,
    'certificates-component': Certificates,
    'skill-component': Skill,
    'resume-component': Resume,
    'learning-component': Learning,
    // 'contact-component': Contact,
    'portfolio-website': Websites,
    'portfolio-illustrator': Illustrator,
    'portfolio-phootshop': Photoshop,
  },
}
</script>
