<template>
  <div class="page learn">
    <div class="content learn">
      <h2>Roofing Solutions of Texas desires to educate all homeowners on ways to utilize their homeowners insurance and to better understand the process of getting roofs repaired or replaced as well as improving the value of their home.</h2>
      <hr />
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/VzKEsoAXG34"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/tOY5hqbJUEE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/DdMHiCVCBNM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.content.learn {
  display: flex;
  flex-direction: column;
}

.learn h2 {
  font-weight: 400;
}

.learn hr {
  width: 100%;
  border: black 2px 2px;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin: 30px 0px 30px 0px;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
