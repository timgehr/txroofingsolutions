<template>
  <div id="app">
    <div id="topper">
      <div id="topper-content">
        <img id="logo1" src="./assets/logo2.png" style="height: 80px;" />
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
    <div id="mtopper">
      <div id="callToday">
        <h2>Call Today For Your Free Roofing Inspection:</h2>
        <h1>
          <a :href="callNum">{{callStr}}</a>
        </h1>
      </div>
    </div>
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
      // const logoTopOffset = document.querySelector('#logo2').offsetHeight
      if (window.scrollY > topOffset) {
        nav.style.position = 'fixed'
        nav.style.top = 0
        navselect.style.position = 'fixed'
        navselect.style.top = 0
        if (window.innerWidth > 600) {
          rc.style.marginTop = '60px'
        } else {
          rc.style.marginTop = '0'
        }
        document.getElementById('mtopper').style.paddingTop = '60px'
      } else {
        nav.style.position = 'static'
        navselect.style.position = 'static'
        rc.style.marginTop = 0
        document.getElementById('mtopper').style.paddingTop = '0px'
      }
      if (window.scrollY > 37) {
        document.getElementById('logocontainer').style.width = '100%'
        document.getElementById('callButton').style.width = '60px'
      } else {
        document.getElementById('logocontainer').style.width = '100%'
        document.getElementById('callButton').style.width = '0px'
      }
      if (window.scrollY > 70 && window.innerWidth < 600) {
        document.getElementById('navselect').style.boxShadow =
          '0 6px 4px rgba(0, 0, 0, 0.096)'
        document.getElementById('mtopper').style.boxShadow =
          '0 0 0 rgba(0, 0, 0)'
      } else if (window.innerWidth < 600) {
        document.getElementById('mtopper').style.boxShadow =
          '0 6px 4px rgba(0, 0, 0, 0.096)'
        document.getElementById('navselect').style.boxShadow =
          '0 0 0 rgba(0, 0, 0)'
      }
      if (window.innerWidth > 600 && window.innerWidth < 1011) {
        document.getElementById('navselect').style.boxShadow =
          '0 6px 4px rgba(0, 0, 0, 0.096)'
      }
    },
    navFix () {
    }
  },
  created () {
    window.addEventListener('scroll', this.stickyNav)
    window.addEventListener('resize', this.stickyNav)
  },
  destroyed () {
    window.removeEventListener('scroll', this.stickyNav)
    window.removeEventListener('resize', this.stickyNav)
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
  overflow: hidden;
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
  color: #00ad4e;
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

#callToday {
  z-index: 0;
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
  transition: 0.5s;
}

.big-button {
  font-size: 17px;
  background: #4f9459;
  box-shadow: 0px 5px 0px rgb(68, 129, 77);
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  color: white;
  height: 60px;
  width: 180px;
  border: none;
  border-radius: 6px;
}

.big-button:focus {
  outline: 0px;
}

.big-button:hover {
  cursor: pointer;
  background: rgb(92, 165, 103);
}

#mtopper {
  background: white;
  border-top: 1px solid #0000000c;
  height: 69px;
  overflow: hidden;
  display: none;
}

#mtopper h1 {
  font-size: 22px;
}

#mtopper h1 a {
  font-size: 22px;
  padding-top: 0px;
}

/* Smartphones (portrait and landscape) ----------- */
@media screen and (max-width: 1011px) {
  #nav {
    display: none;
  }
  #navselect {
    display: flex;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
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
  #callToday h2 {
    margin-right: 0px;
  }
  #callToday h1 {
    margin-right: 0px;
  }
  #topper {
    height: 100px;
  }
  #homeBackImg {
    top: 60px !important;
  }
  #topper-content {
    padding-top: 0px;
  }
  .page {
    min-height: calc(100vh - 330px);
  }
}

@media screen and (max-width: 600px) {
  #topper {
    display: none;
  }
  #mtopper {
    display: block;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.096);
  }
  #home-group {
    height: calc(55vw - 10px) !important;
    align-items: flex-start !important;
  }
  #homeBackImg {
    top: 160px !important;
  }
  #home-message {
    display: flex;
    flex-direction: row;
    max-width: 80vw !important;
    align-items: flex-end;
    margin-top: 10px;
  }
  #home-message h1 {
    font-size: min(50px, 5vw) !important;
  }
  #home-message h3 {
    width: 70vw;
    margin-top: 0px;
    font-size: min(22px, 3vw) !important;
    font-weight: 400;
  }
}

@media screen and (min-width: 500px) {
}
</style>
