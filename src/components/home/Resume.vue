<template>
   <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Saman Sahraei</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>   
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Computer Engineering </h4>
              <h5>2010 - 2014</h5>
              <p><em>Computer Software Engineering Ilam State University</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
          </div>
          <div v-if="resumeDetails" class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
             <!-- Front-End Developer  -->
            <h3 class="resume-title">Professional Experience</h3>
            <template v-for="(job, index) in resumeDetails" :key="index">
              <div class="resume-item">
                <h4>{{ job.role }} </h4>
                <h5>{{ job.time }}</h5>
                <p><em>{{ job.company }} </em></p>
                <ul>
                  <li v-for="(item, index) in job.items" :key="index">{{ item }}</li>
                </ul>
              </div>
            </template>
            
           
            
          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->
</template>

<script>
export default {
  props:['resumeDetails'],
  mounted() {
    console.log('this.resumeDetails');
    console.log(this.resumeDetails);
  },
}
</script>

<style>

</style>