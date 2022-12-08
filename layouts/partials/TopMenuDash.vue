<template>
<client-only>
  <div>
     <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn display-v' @click="openTab"></i>
        <span class="dashboard">Hi, {{username}}</span>
      </div>
      <!-- <div class="search-box">
        <input type="text" placeholder="Search...">
        <i class='bx bx-search' ></i>
      </div> -->
      <div class="">
        <nuxt-link to="/dashboard/profile">
          <img v-if="profileImg" :src="profileImg" class="img-head" alt="">
          <img v-else src="/images/avarter.jpg" class="img-head" alt="">
        </nuxt-link>
      </div>
    </nav>
  </div>
  </client-only>
</template>

<script>
export default {
  computed : {
    username(){
      return this.user ? this.user.name : ""
    },
    profileImg(){
      return this.user ? this.user.picture : ''
    }
    
  },
  methods : {
    openTab(){
       this.$root.$emit("command")
    }      
  }
}
</script>

<style scoped>
.img-head{
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.display-v{
  display: none;
}
@media screen and (max-width : 578px){
  .display-v{
    display: block;
  }
}
@media only screen and (min-width : 768px) and (max-width : 1240px){
  .display-v{
    display: block;
  }
}
</style>