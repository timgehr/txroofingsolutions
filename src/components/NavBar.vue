<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/roofing-services">Services</router-link>
    <router-link to="/service-area">Service Area</router-link>
    <router-link to="/learn">Learn</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/free-inspection">Schedule Free Inspection</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
  text-align: center;
  padding: 15px 0px 15px 0px;
  position: static;
  font-size: 18px;
  width: 100%;
  height: 30px;
  top: 110px;
  background-color: white;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
  z-index: 1;
}

#nav a {
  font-weight: 300;
  color: #000000;
  padding: 0px 30px 0px 30px;
  text-decoration: none;
}

#nav a:hover {
  color: rgb(12, 134, 67);
}

#nav a.router-link-exact-active {
  color: rgb(15, 179, 89);
}
</style>
