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
    <!-- Nav -->
    <navBar></navBar>
    <navSelect></navSelect>
    <div id="router-container">
      <router-view />
    </div>
    <footerA></footerA>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavSelect from './components/NavSelect.vue'
import FooterA from './components/Footer.vue'
export default {
  components: {
    navBar: NavBar,
    navSelect: NavSelect,
    footerA: FooterA
  },
  data () {
    return {
      id: 1,
      callStr: '(817) 784-7225',
      callNum: 'tel:8177847225'
    }
  },
  methods: {
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
  position: relative;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#router-container {
  margin-top: 0px;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 350px);
  padding: 30px 30px 30px 30px;
}

.content {
  max-width: 900px;
  width: 100%;
}

a {
  text-decoration: none;
  color: rgb(0, 173, 78);
}

a:hover {
  text-decoration: underline;
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
  color: rgb(12, 134, 67);
  font-weight: 700;
  font-size: 34px;
}

/* Smartphones (portrait and landscape) ----------- */
@media screen and (max-width: 1011px) {
  #nav {
    display: none;
  }
  #navselect {
    display: flex;
  }
  #logo1 {
    display: none;
  }
  #forehead {
    display: none;
  }
  #callToday {
    text-align: center;
  }
  #topper {
    height: 100px;
  }
  #homeBackImg {
    top: 160px !important;
  }
  #topper-content {
    padding-top: 0px;
  }
  .page {
    min-height: calc(100vh - 330px);
  }
}
</style>
