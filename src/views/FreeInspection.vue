<template>
  <div class="page free-inspection">
    <div class="content free-inspection" id="jotformContainer">
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const jotForm = document.createElement('script')
    jotForm.setAttribute('src', 'https://form.jotform.com/jsform/201345635711045')
    jotForm.setAttribute('type', 'text/javascript')
    document.getElementById('jotformContainer').appendChild(jotForm)
  }
}
</script>

<style>

</style>
