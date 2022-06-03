<template>
    <div>

    </div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
  <div class="container">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
         <li class="nav-item ">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" aria-current="page" to="/allStudents">Show All Students</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/addStudent">Add Student</router-link>
        </li>
        
      </ul>
       
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name:'navComp'
    }
</script>

<style scoped>
.right{
    text-align: right;
    color: green;
}
</style>