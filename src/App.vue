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
      <div class="dropdown" v-on:click="ddnShow = !ddnShow">
        <span>{{activePage}}</span>
        <div class="dropdown-content" v-if="ddnShow">
          <p v-on:click="ddnNav('Home')">
            <router-link to="/">Home</router-link>
          </p>
          <p v-on:click="ddnNav('Services')">
            <router-link to="/roofing-services">Services</router-link>
          </p>
          <p v-on:click="ddnNav('Service Area')">
            <router-link to="/service-area">Service Area</router-link>
          </p>
          <p v-on:click="ddnNav('Learn')">
            <router-link to="/learn">Learn</router-link>
          </p>
          <p v-on:click="ddnNav('About Us')">
            <router-link to="/about">About Us</router-link>
          </p>
          <p v-on:click="ddnNav('Blog')">
            <router-link to="/blog">Blog</router-link>
          </p>
          <p v-on:click="ddnNav('Schedule Free Inspection')">
            <router-link to="/free-inspection">Schedule Free Inspection</router-link>
          </p>
        </div>
      </div>
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
  data () {
    return {
      ddnShow: false,
      activePage: 'Home',
      id: 1,
      callStr: '(817) 784-7225',
      callNum: 'tel:8177847225'
    }
  },
  methods: {
    navRoute (event) {
      this.$router.push({ path: '/' + event.target.value })
    },
    ddnNav (page) {
      this.activePage = page
    },
    stickyNav () {
      const nav = document.querySelector('#nav')
      const navselect = document.querySelector('#navselect')
      const rc = document.querySelector('#router-container')
      const topOffset = document.querySelector('#topper').offsetHeight
      if (window.scrollY > topOffset) {
        console.log(navselect.offsetTop)
        nav.style.position = 'fixed'
        nav.style.top = 0
        navselect.style.position = 'fixed'
        navselect.style.top = 0
        rc.style.marginTop = '60px'
      } else {
        console.log(navselect.offsetTop)
        nav.style.position = 'static'
        navselect.style.position = 'static'
        rc.style.marginTop = 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.stickyNav)
  },
  destroyed () {
    window.removeEventListener('scroll', this.stickyNav)
  }
}
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
  margin-top: 0px;
}

#topper {
  background: white;
  width: 100%;
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
  font-size: 16px;
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
  font-size: 34px;
}

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
}

#nav a {
  font-weight: 300;
  color: #000000;
  padding: 0px 30px 0px 30px;
  text-decoration: none;
}

#nav a:hover {
  color: #28885d;
}

#nav a.router-link-exact-active {
  color: #3fb17e;
}

#navselect {
  display: none;
  text-align: center;
  padding: 10px 0px 10px 0px;
  position: static;
  font-size: 18px;
  width: 100%;
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

.selectnav {
  text-align: center;
  height: 40px;
  width: fit-content;
  font-family: "Open Sans", sans-serif;
  border: 0px;
  outline: 0px;
  margin-left: 40px;
  color: black;
  font-weight: 400 !important;
  font-size: 26px !important;
  padding-left: 60px !important;
  appearance: none;
  background: rgb(255, 255, 255) url("./assets/menu-24px.svg") no-repeat center
    left;
}

.dropdown{
  cursor: pointer;
  text-align: left;
  height: 40px;
  line-height: 40px;
  width: 100vw;
  font-family: "Open Sans", sans-serif;
  border: 0px;
  outline: 0px;
  margin-left: 30px;
  color: black;
  font-weight: 400 !important;
  font-size: min(24px, 5.5vw) !important;
  padding-left: 60px !important;
  background: rgb(255, 255, 255) url("./assets/menu-24px.svg") no-repeat center
    left;
}

.dropdown-content{
  width: 100%;
  display: block;
  position: absolute;
  background-color: #ffffff;
  font-size: 20px !important;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
  left: 0px;
  text-align: left;
  z-index: 1;
}

.dropdown-content p a{
  padding-left: 40px;
  text-decoration: none;
  color: black;
  width: 100%;
}

.selectnav-content {
  display: none;
  position: absolute;
  background-color: #612323;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.selectnav:active {
  border: 0px;
  outline: 0px;
}

/* Smartphones (portrait and landscape) ----------- */
@media screen and (max-width: 1011px) {
  #nav {
    display: none;
  }
  #navselect {
    display: flex;
  }
}

@media screen and (max-width: 635px) {
  #topper-content {
    height: 160px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  #navselect {
    top: 160px;
  }
  #logo1 {
    object-fit: contain;
  }
  #callToday {
    text-align: center;
    margin: 0px;
  }
  #navselect {
    margin-left: auto;
    margin-right: auto;
  }
  #homeBackImg {
    top: 220px !important;
  }
  #topper-content {
    justify-content: initial;
    padding-top: 0px;
  }
}
</style>
