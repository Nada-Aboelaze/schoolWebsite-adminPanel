<template>
  <div class="d-flex justify-content-center h-25 d-inline-block mt-5">
    <div
      id="carouselExampleIndicators"
      class="carousel slide w-75 p-3"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            :src="require('../../Images/Building.jpg')"
            class="d-block w-100"
            alt="some text"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('../../Images/Classes.jpg')"
            class="d-block w-100"
            alt="some text"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('../../Images/examHall.jpg')"
            class="d-block w-100"
            alt="some text"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="container w-100 d-flex justify-content-center mt-5">
    <div class="card w-75">
      <img
        src="../../Images/teaching-staff.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">Teaching staff</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          vitae delectus neque magni, rem explicabo error nesciunt, culpa cumque
          maxime odit veritatis tempore
        </p>
        <div class="text-center">
          <router-link class="btn btn-primary" :to="`/About Us`"
            >More</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeComp",
  components: {},
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>