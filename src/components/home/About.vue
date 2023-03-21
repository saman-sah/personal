<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-3" data-aos="fade-right">
            <img src="assets/img/profile.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-9 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Front-End Developer</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
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
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
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