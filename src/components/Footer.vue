<template>
  <div id="footerWrap">
    <div id="footerSpacer"></div>
    <div id="footerA">
      <div>
        <p class="footer-text">
          <router-link to="/">Home</router-link>|
          <router-link to="roof-replacement">Roof Replacement</router-link>|
          <router-link to="roof-repair">Roof Repair</router-link>|
          <router-link to="free-inspection">Free Roofing Inspection</router-link>|
          <router-link to="blog">Blog</router-link>|
          <router-link to="privacy-policy">Free Roofing Inspection</router-link>
        </p>
      </div>
      <p class="footer-text">224 Canterbury St - Euless, TX 76039 | Phone: (817) 726-1369</p>
      <p class="footer-text">Copyright 1995-2015 Roofing Solutions of Texas</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#footerSpacer {
  height: 110px;
}

#footerA {
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 20px;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: rgb(36, 36, 36);
  position: absolute;
  bottom: 0px;
}

.footer-text {
  color: rgb(97, 97, 97);
  font-size: min(16px, 2.9vw);
}

.footer-text a {
  color: rgb(97, 97, 97);
  text-decoration: none;
}

.footer-text a:hover {
  color: rgb(129, 129, 129);
  text-decoration: none;
}

.footer-text {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
