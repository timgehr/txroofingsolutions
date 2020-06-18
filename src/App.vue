<template>
  <div id="app">
    <div id="topper">
      <div id="topper-content">
        <img src="./assets/logo1.jpg" style="height: 80px;" />
        <div id="forehead"></div>
        <div id="callToday">
          <h2>Call Today For Your Free Roofing Inspection:</h2>
          <h1>
            <a :href="callNum">{{callStr}}</a>
          </h1>
        </div>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/roofing-services">Services</router-link>
      <router-link to="/service-area">Service Area</router-link>
      <router-link to="/learn">Learn</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/free-inspection">Schedule Free Inspection</router-link>
    </div>
    <div id="navselect">
      <select  class="nav-select" v-model="key" @change="navRoute($event)">
        <option selected="selected" value="">Home</option>
        <option value="roofing-services">Services</option>
        <option value="service-area">Service Area</option>
        <option value="learn">Learn</option>
        <option value="about">About Us</option>
        <option value="blog">Blog</option>
        <option value="free-inspection">Schedule Free Inspection</option>
      </select>
    </div>
    <div id="toparea"></div>
    <!--
    <div id="callnowbar">
      Call Today For Your Free Roofing Inspection: <a href=this.callNum>{{localNumber}}</a>
    </div>
    -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      callStr: "(817) 784-7225",
      callNum: "tel:8177847225"
    };
  },
  methods: {
    navRoute(event) {
      this.$router.push({path:'/' + event.target.value})
    }
  }
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#topper {
  background: white;
  position: fixed;
  top: 0px;
  width: 100vw;
}

#topper-content {
  height: 110px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
}

#forehead {
  width: 25vw;
}

#callToday {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: right;
}

#callToday h2 {
  font-size: 15px;
  font-weight: 400;
  margin: 0px 20px 0px 0px;
}

#callToday h1 {
  font-size: 28px;
  margin: 0px 20px 0px 0px;
}

#callToday h1 a {
  padding-top: 5px;
  text-decoration: none;
  color: rgb(12, 134, 28);
  font-weight: 700;
}

#nav {
  text-align: center;
  padding: 15px 0px 15px 0px;
  position: fixed;
  font-size: 18px;
  width: 100vw;
  height: 30px;
  top: 110px;
  background-color: white;
  box-shadow: 0px 5px 7px 0px #00000015;
}

#nav a {
  font-weight: 300;
  color: #000000;
  padding: 0px 30px 0px 30px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #2e835d;
}

#navselect {
  display: none;
  text-align: center;
  padding: 15px 0px 15px 0px;
  position: fixed;
  font-size: 18px;
  width: 100vw;
  height: 30px;
  top: 110px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 7px 0px #00000015;
}

#navselect select {
  font-weight: 300;
  color: #000000;
  padding: 0px 30px 0px 30px;
  text-decoration: none;
}

#navselect a.router-link-exact-active {
  color: #2e835d;
}

#nav-select{
  color:red;
}

/* Smartphones (portrait and landscape) ----------- */
@media screen and (max-width: 1000px) {
  #nav {
    display: none;
  }
  #navselect {
    display: flex;
  }
}
</style>
