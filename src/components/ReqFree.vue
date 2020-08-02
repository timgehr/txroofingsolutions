<template>
  <div class="reqfree">
    <h2>
      Request Your Free, No-Obligation Roofing Inspection
    </h2>
    <button class="big-button" v-on:click="$router.push('free-inspection')">GET SCHEDULED!</button>
  <hr>
  </div>
</template>

<script>
export default {
  name: 'ReqFree'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reqfree {
  padding: 20px 0px 0px 0px;
}

#mobileHome .reqfree {
  padding: 20px 0px 60px 0px;
}

#mobileHome .big-button {
  margin-top: 20px;
}

.reqfree h2 {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: italic;
}

#webHome hr {
  margin-bottom: 20px;
  margin-top: 60px;
}

#mobileHome hr {
  display: none;
}

</style>
