<template>
  <div class="CallToday">
    <h1>Want peace of mind on your roof ?</h1>
    <h2>Call us today</h2>
    <h2><a href="tel:8177261369">(817) 726-1369</a></h2>
    <router-link to="/free-inspection">or fill out an inspection form</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.CallToday {
  max-width: 900px;
  text-align: center;
  margin: 30px 0px 30px 0px;
  background: rgb(89, 99, 107);
  color: white;
  padding: 20px 10px 10px 10px;
}

.CallToday h1 {
  font-size: 30px;
  line-height: 50px;
  margin: 0px;
}

.CallToday h2 {
  font-style: italic;
  line-height: 50px;
  margin: 0px;
}

.CallToday h2 a {
  font-style: normal;
  font-size: 35px;
  line-height: 50px;
  margin: 0px;
}

.CallToday a {
  font-size: 16px;
  line-height: 30px;
  margin: 0px;
}

</style>
