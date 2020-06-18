<template>
  <div id="app">
    <div id="topper">
      <div id="topper-content">
        <img id="logo1" src="./assets/logo1.jpg" style="height: 80px;" />
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
      <select  class="selectnav" v-model="key" @change="navRoute($event)">
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
    <div id="router-container">
      <router-view />
    </div>
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

#router-container {
  margin-top: 170px;
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
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
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
  padding: 10px 0px 10px 0px;
  position: fixed;
  font-size: 18px;
  width: 100vw;
  height: 40px;
  top: 110px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
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

.selectnav{
  text-align: center;
  height: 40px;
  width: fit-content;
  font-family: "Open Sans", sans-serif;
  border: 0px;
  outline:0px;
  margin-left: 40px;
  color: black;
  font-weight: 400 !important;
  font-size: 26px !important;
  padding-left: 60px !important;
  appearance: none;
  background: rgb(255, 255, 255) url("./assets/menu-24px.svg") no-repeat center left;
}

.selectnav-content {
  display: none;
  position: absolute;
  background-color: #612323;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.selectnav:active{
  border: 0px;
  outline:0px;
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

@media screen and (max-width: 550px) {
  #topper-content {
  height: 160px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  }
  #router-container{
  margin-top: 220px;
  }
  #navselect {
    top: 160px;
  }
  #logo1{
    object-fit:contain;
  }
  #callToday {
    text-align: center;
    margin: 0px;
  }
  #navselect{
    margin-left: auto;
    margin-right: auto;
  }
  #homeBackImg{
    top: 220px !important;
  }
  #topper-content{
    justify-content:initial;
    padding-top: 0px;
  }
}
</style>
