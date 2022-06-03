<template>
    <div>
<h1>All students</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
          <!-- <button class="btn btn-danger style" @click.prevent="deleteAllStudents">Delete All</button> -->

    <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">First Name</th>
      <!-- <th scope="col">Age</th> -->
      <th scope="col">Grade</th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="student in students" :key="student.id"> 
      <th scope="row">{{student.id}}</th>
      <td>{{student.first_name}}</td>
      <td>{{student.last_name}}</td>
      <!-- <td>{{student.age}}</td> -->
      <td>{{student.grade}}</td>
      <td>
          <router-link class="btn btn-primary" :to="`/allStudents/${student.id}`">More Details</router-link>
      </td>
       <td>
          <router-link class="btn btn-danger" :to="`/deletedStudent/${student.id}`">Delete</router-link>
       </td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'getAllStudentsComp',
        data(){
            return{
                 students:[]
            }

        },
        created(){
            this.getStudents()
        },
        methods:{
            getStudents(){
                axios.get("http://localhost:3000/students")
                .then((res) => {
                    console.log(res.data);
                    this.students = res.data
                    
                 })
        .catch((err) => {
          console.log(err);
        });
             }
            // deleteAllStudents(){
            //     axios.delete(`http://localhost:3000/students/`)
            //     .then(()=>{
            //         console.log("done");
            //     })
            //     .catch((err)=>{
            //         console.log(err)
            //     })


            // }
        }
    }
</script>

<style scoped>
h1{
    text-align: center;
    }
.style{
    margin-right: 10px;
    float: right;
    margin-bottom: 50px;
}
</style>