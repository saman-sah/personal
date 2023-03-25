<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-3" data-aos="fade-right">
            <img src="assets/img/profile.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-9 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Front-End Developer</h3>
            <p class="fst-italic">
              I'm carrying 4 years of experience at Shop1 and StocksoftheDay Companies.In my recent company, I led the Frontend Developers team
            </p>
            <div class="row" v-if="aboutDetails">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{{ aboutDetails.birthday }}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{{ aboutDetails.website}}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{{ aboutDetails.city }}</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{{ aboutDetails.age}}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{{ aboutDetails.degree}}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{{ aboutDetails.email}}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              I am hard working person and I learn anything easily.I am pretty committed  to work and company than i'll be working for.
              My hobbies are watch learning video from youtube, reading book, playing chess, playing video game, working out and watch sky with my telescope.
              
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
</template>

<script>
export default {
    props:['aboutDetails'],
}
</script>

<style>

</style>