<template>
  <div>
    <h1 class="text-center">Student {{ id }} successfully deleted</h1>
  </div>
  <div class="text-center">
    <button class="btn btn-warning ms-3" @click.prevent="back">Back</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "deletedStudentComp",
  created() {
    this.deleteStudentByID(), this.getStudents();
  },
  data() {
    return {
      id: "",
      students: [],
    };
  },
  methods: {
    getStudents() {
      axios
        .get("http://localhost:3000/students")
        .then((res) => {
          console.log(res.data);
          this.students = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteStudentByID() {
      this.id = this.$route.params.id;
      axios
        .delete(`http://localhost:3000/students/${this.id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/allStudents");
    },
  },
};
</script>

<style scoped></style>
