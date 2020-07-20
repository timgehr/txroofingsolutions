<template>
  <div class="reqfree">
    <h2>
      Request Your Free, No-Obligation Roofing Inspection
    </h2>
    <button id="gs-button" v-on:click="$router.push('free-inspection')">GET SCHEDULED!</button>
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
  padding: 20px 0px 40px 0px;
}

h2 {
  font-weight: 400;
  text-emphasis: italic;
}

#gs-button {
  font-size: 17px;
  background: rgb(79, 148, 89);
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

#gs-button:focus {
  outline: 0px;
}

#gs-button:hover {
  cursor: pointer;
  background: rgb(92, 165, 103)
}

</style>
