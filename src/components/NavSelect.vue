<template>
  <div id="navselect">
    <div class="dropdown" v-on:click="ddnShow = !ddnShow">
        <div id="callButton" v-on:click="call">
          <svg id="callButtonIcon" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
            />
          </svg>
        </div>
      <div class="dropdownContainer">
        <div id="logocontainer">
          <img id="logo2" src="../assets/logo2.png" />
        </div>
      </div>
        <div class="dropdown-content" v-if="ddnShow">
          <p v-on:click="$router.push('/')">
            <router-link to="/">Home</router-link>
          </p>
          <p v-on:click="$router.push('roofing-services')">
            <router-link to="/roofing-services">Services</router-link>
          </p>
          <p v-on:click="$router.push('service-area')">
            <router-link to="/service-area">Service Area</router-link>
          </p>
          <p v-on:click="$router.push('learn')">
            <router-link to="/learn">Learn</router-link>
          </p>
          <p v-on:click="$router.push('about')">
            <router-link to="/about">About Us</router-link>
          </p>
          <p v-on:click="$router.replace('blog')">
            <router-link to="/blog">Blog</router-link>
          </p>
          <p v-on:click="$router.push('free-inspection')">
            <router-link to="/free-inspection">Schedule Free Inspection</router-link>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddnShow: false
    }
  },
  methods: {
    navRoute (event) {
      this.$router.push({ path: '/' + event.target.value })
    },
    call () {
      this.ddnShow = false
    }
  }
}
</script>

<style>
.dropdown {
  text-align: center !important;
  cursor: pointer;
  height: 60px;
  width: 100vw;
  font-family: "Open Sans", sans-serif;
  border: 0px;
  outline: 0px;
  color: black;
  font-weight: 400 !important;
  font-size: 0px;
  margin-left: 30px;
  margin-right: 30px;
  background: rgb(255, 255, 255) url("../assets/menu-24px.svg") no-repeat center
    left;
  transition: 0.15s;
}

.dropdownContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.dropdown:hover {
  background: rgb(255, 255, 255) url("../assets/menu_open-24px.svg") no-repeat
    center left;
  transition: 0.15s;
}

.dropdown-content {
  padding: 10px 0px 0px 0px;
  width: 100%;
  display: block;
  position: absolute;
  background-color: #ffffff;
  font-size: 20px !important;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
  left: 0px;
  text-align: left;
  z-index: 1;
  line-height: 60px;
}

.dropdown-content p {
  margin: 0px 0px 0px 0px;
}

.dropdown-content p:hover {
  background: rgb(241, 241, 241);
}

.dropdown-content p a {
  padding-left: 40px;
  text-decoration: none;
  color: black;
  width: 100%;
}

#logocontainer {
  width: 100%;
  max-height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 200ms;
}

#logo2 {
  padding: 5px 0px 5px 0px;
  height: 50px;
  transition: 0.25s;
}

#callButton {
  display: flex;
  position: absolute;
  height: 60px;
  width: 0px;
  right: 0px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  transition: 200ms;
  z-index: 2;
}

#callButton:hover {
  background: rgba(126, 201, 137, 0.329);
  border-radius: 30px;
}

#navselect {
  display: none;
  text-align: center;
  position: static;
  font-size: 18px;
  width: 100%;
  height: 60px;
  top: 110px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
  z-index: 1;
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
  background: rgb(255, 255, 255) url("../assets/menu-24px.svg") no-repeat center
    left;
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
</style>
