<template>
  <div class="page serviceArea">
      <iframe
        width="900"
        height="450"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDaM3BMMpJXSunt-Blgl5UsQwmdOT8b8sM
        &center=32.740015, -97.030643
        &zoom=8
        &maptype=roadmap"
      ></iframe>
    <div class="content serviceArea">
      <h4>Roofing Solutions of Texas Provides High-Quality Roofing Repair or Replacement in the following Texas cities or towns:</h4>
      <div class="doubleList">
        <ul>
          <li>
            <a href="http://txroofingsolutions.com/service-area/fort-worth/">Fort Worth</a>
          </li>
          <li>
            <a href="http://txroofingsolutions.com/service-area/colleyville/">Colleyville</a>
          </li>
          <li>
            <a href="http://txroofingsolutions.com/service-area/grapevine/">Grapevine</a>
          </li>
          <li>
            <a href="http://txroofingsolutions.com/service-area/carrollton/">Carrollton</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://txroofingsolutions.com/service-area/coppell/">Coppell</a>
          </li>
          <li>
            <a href="http://txroofingsolutions.com/service-area/flower-mound/">Flower Mound</a>
          </li>
          <li>
            <a href="http://txroofingsolutions.com/service-area/southlake/">Southlake</a>
          </li>
          <li>
            <a href="http://txroofingsolutions.com/service-area/lewisville/">Lewisville</a>
          </li>
        </ul>
      </div>
      <callToday></callToday>
      <p>It is our goal and desire to help residents all over North Texas with bringing value to their home. But having a passionate and experienced team we know what it takes to get your house protected and to increase the value of your home with a repaired or replaced roof. We are a multi-generational roofer with decades of service to the entire Dallas Fort Worth Metroplex.</p>
      <p>Along with offering excellent roofing services, we are happy to go the extra mile to deliver exceptional customer service. We work with you to create a timeline for roof replacement completion, and we walk you through each step so you know what to expect. If you are replacing your roof with insurance due to storm damage, we can even help represent you when negotiating with your home insurance provider.</p>
      <p>When you’re ready to replace your roof, call&nbsp;Roofing Solutions of Texas at&nbsp;817-784-7225,&nbsp;or just fill out the roof inspection form to find out why we are the best and most passionate roofers in DFW.</p>
    </div>
  </div>
</template>

<script>
import CallToday from '../components/CallToday.vue'
export default {
  components: {
    callToday: CallToday
  }
}
</script>

<style>
.page.serviceArea {
  text-align: left;
}

.serviceArea iframe {
  max-width: 90vw;
  max-height: 45vw;
  overflow: hidden;
}

.serviceArea h4 {
  font-size: min(22px, 3vw);
  margin-bottom: 0px;
}

.doubleList {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  font-size: min(20px, 3.5vw);
}

.doubleList ul {
  width: min(450px, 50vw);
}
</style>
