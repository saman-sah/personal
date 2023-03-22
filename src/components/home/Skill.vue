<template>
    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content" v-if="skillDetails">

          <div class="col-lg-6" data-aos="fade-up">
            <!-- HTML -->
            <div class="progress" v-if="skillDetails.html">
              <span class="skill">{{ skillDetails.html.title}} <i class="val">{{ skillDetails.html.percentage }}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :aria-valuenow="skillDetails.html.percentage" aria-valuemin="0" :aria-valuemax="100"></div>
              </div>
            </div>
            <!-- CSS -->
            <div class="progress" v-if="skillDetails.css">
              <span class="skill">{{ skillDetails.css.title}} <i class="val">{{ skillDetails.css.percentage }}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :aria-valuenow="skillDetails.css.percentage" aria-valuemin="0" :aria-valuemax="100"></div>
              </div>
            </div>
            <!-- JavaScript -->
            <div class="progress">
              <span class="skill">{{ skillDetails.javascript.title}} <i class="val">{{ skillDetails.javascript.percentage }}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :aria-valuenow="skillDetails.html.percentage" aria-valuemin="0" :aria-valuemax="100"></div>
              </div>
            </div>
            <!-- Sass -->
            <div class="progress">
              <span class="skill">{{ skillDetails.sass.title}} <i class="val">{{ skillDetails.sass.percentage}}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :aria-valuenow="skillDetails.sass.percentage" aria-valuemin="0" :aria-valuemax="100"></div>
              </div>
            </div>
            <!-- Photoshop -->
            <div class="progress">
              <span class="skill">{{ skillDetails.photoshop.title}} <i class="val">{{ skillDetails.photoshop.percentage}}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :aria-valuenow="skillDetails.photoshop.percentage" aria-valuemin="0" :aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <!-- Vue -->
            <div class="progress">
              <span class="skill">{{ skillDetails.vue.title}} <i class="val">{{ skillDetails.vue.percentage}}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :aria-valuenow="skillDetails.vue.percentage" aria-valuemin="0" :aria-valuemax="100"></div>
              </div>
            </div>
            <!-- Wordpress -->
            <div class="progress">
              <span class="skill">{{ skillDetails.wordpress.title}} <i class="val">{{ skillDetails.wordpress.percentage}}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <!-- TypeScript -->
            <div class="progress">
              <span class="skill">{{ skillDetails.typescript.title}} <i class="val">{{ skillDetails.typescript.percentage}}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <!-- Illustrator -->
            <div class="progress">
              <span class="skill">{{ skillDetails.illustrator.title}} <i class="val">{{ skillDetails.illustrator.percentage}}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            

          </div>

        </div>

      </div>
    </section><!-- End Skills Section -->
</template>

<script>
export default {
  props:['skillDetails'],
  mounted() {
    // console.log('this.skillDetails');
    // console.log(this.skillDetails);
  },
}
</script>

<style>

</style>