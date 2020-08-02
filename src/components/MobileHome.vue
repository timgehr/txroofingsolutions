<template>
  <div class="page home" id="mobileHome">
    <div class="parallax-wrapper">
      <img src="../assets/roofing5.jpg" id="homeBackImg-mobile" />
    </div>
    <div id="home-group-mobile">
      <div id="home-message-mobile">
        <h1>At Roofing Solutions of Texas…</h1>
        <h3>...we recognize that every roofing project has unique or special circumstances that need to be resolved to your satisfaction. With that in mind, Roofing Solutions of Texas wants to help you get a beautiful, long-lasting roof installed at a price that you can afford and appreciate.</h3>
      </div>
    </div>
    <reqFree></reqFree>
    <div class="roof-services-mobile">
      <div class="mobileHomeShapes">
        <div class="arrow-up"></div>
        <div class="rectangle"></div>
        <div class="arrow-up-white"></div>
      </div>
      <h1>Roofing Services</h1>
      <div class="roof-service-mobile">
        <router-link to="roof-replacement">
          Roof Replacement
          <img class="go-to-arrow" src="../assets/go-to-24px.svg" />
        </router-link>
        <h3
          class="service-snippet-mobile"
        >Texas residents know that high temperatures, strong winds, heavy rain and even hail can speed up the need for roof replacement. The next time that you need the roof of your home replaced from damage or even just natural wear and tear after a few decades of use, make sure you turn to the best roofing contractors Fort Worth has to offer: Roofing Solutions of Texas.</h3>
      </div>
      <div class="roof-service-mobile">
        <router-link to="roof-repair">
          Roof Leak Repair
          <img class="go-to-arrow" src="../assets/go-to-24px.svg" />
        </router-link>
        <h3
          class="service-snippet-mobile"
        >There are dozens of reasons that you might need to have your residential roof repaired. Heavy winds and storms could cause damage; leaks could crop up over time; you could be dealing with shrinkage; or there might be standing water. Whatever problems you encounter with your roof, seek out the best roof repair Fort Worth has to offer: Roofing Solutions of Texas.</h3>
      </div>
    </div>
    <div class="textwidget-mobile">
      <p></p>
      <h2>Fort Worth Roofing Repairs and Replacement: The Only Company to Call</h2>
      <p>
        <a
          href="http://txroofingsolutions.com/available-roofing-options"
        >Roofing materials for homes</a> in the Dallas-Fort Worth area need to be energy-efficient and weather-resistant to survive the stormy spring weather as well as the hot and humid summers. In addition, these materials must be carefully selected, as some types of roofing materials, like reflective roofs, can help reduce energy costs by as much as 40 percent. Metal roofs and light colored shingles reduce the amount of heat absorbed and retained by a structure during the summer months, while also protecting against wind and hail damage. When you find the time has come to repair or replace your roof, look no further than Roofing Solutions of Texas,
        <a
          href="http://txroofingsolutions.com/roofing-services"
        >a Fort Worth roofing contractor</a>.
      </p>
      <p>Roofing Solutions of Texas strives to make every Arlington, TX, roofing project one that is quick and smooth. The goal remains to restore the home to its original condition or better with every job, and doing so without disrupting the occupants of the structure. We offer affordable pricing, quality advice, and timely installations, as well as making customer service a top priority at all times. Customers love the fact we offer a wide range of roofing solutions, from tile roofing to roll (flat) roofing, as each homeowner has unique needs. Call us today to learn more about how we can be of service to you.</p>
      <p>
        One question many homeowners have when it comes to Flower Mound roofing involves whether to repair or
        <a
          href="http://txroofingsolutions.com/roofing-contractors-fort-worth"
        >re-roof the structure</a>. Our company works to help you determine which method is best for you after doing an assessment. A general rule is to look at the number of damaged roof areas. If there are numerous bad spots, it is time to replace the roof, as you want to avoid the roof having patches in numerous locations. If only one or two repairs are needed, it is often better to make the repairs. This is just one of many factors that needs to be taken into consideration when deciding between
        <a
          href="http://txroofingsolutions.com/roof-repair-fort-worth"
        >Fort Worth roof repair</a> and roof replacement.
      </p>
      <p>Homeowners often worry about getting insurance to pay for the roof repairs or replacement when the damage is beyond the owner's control and not due to neglect or aging. Our roofing contractors in Fort Worth can be of assistance here also, as they work with insurance companies every day. Our site covers what to expect when filing a claim and how the claims process works. In addition, you can learn more about what you should expect as you deal with the claims adjuster. Often, the contractors can work with you to get your claim approved, and the repairs or replacement roof paid for, while providing you with your options. We don't charge for this particular service.</p>
      <p>
        We are proud of what we offer to customers throughout Euless,
        <a
          href="http://txroofingsolutions.com/fort-worth-roofing-company"
        >Fort Worth</a>,
        <a href="http://txroofingsolutions.com/roofing-arlington-tx">Arlington</a>,
        <a href="http://txroofingsolutions.com/flower-mound-roofing/">Flower Mound</a>,
        <a href="http://txroofingsolutions.com/roofer-keller-tx">Keller</a>, Coppell, Grapevine and the surrounding areas. In addition to offering roofing services, we complete repairs on fencing, decking, flooring, siding, gutters and interior restoration.
        <a
          href="http://txroofingsolutions.com/free-inspection"
        >Contact us today to learn more</a> about how we can be of help to you. Our reputation is stellar, thanks to our sincere customer service and fair business practices, and you can read customer testimonials on our site to hear great reviews. Roofing Solutions of Texas promises to continue its commitment to providing outstanding customer service to all clients, past, present and future.
      </p>
      <p>Please call us today to learn more about our trusted roofing solutions.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ReqFree from './ReqFree.vue'

export default {
  name: 'Home',
  components: {
    reqFree: ReqFree
  }
}
</script>

<style>
.mobileHomeShapes {
  position: absolute;
  z-index: 0;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-bottom: 50px solid #28536b;
}

.rectangle {
  width: 100vw;
  height: 950px;
  background: #28536b;
}

.arrow-up-white {
  width: 0;
  height: 0;
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-bottom: 50px solid #ffffff;
  position: absolute;
  top: 950px;
}

.roof-services-mobile {
  display: flex;
  width: 90vw;
  height: 1000px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: unset;
  flex-wrap: wrap;
  z-index: 1;
}

.roof-services-mobile h1 {
  margin-top: 100px;
  margin-bottom: 0px;
  color: white;
  font-size: 38px;
  z-index: 1;
}

.roof-service-mobile {
  padding-top: 30px;
  max-height: 400px;
  color: rgba(255, 255, 255, 0.781);
  text-align: left;
  z-index: 1;
}

.roof-service-mobile a {
  line-height: 60px;
  font-size: 28px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.781);
  font-style: italic;
}

.roof-service-mobile a:hover {
  text-decoration: none;
}

.roof-service-mobile a:hover .go-to-arrow {
  margin-left: 10px;
}

.service-snippet-mobile {
  min-width: 350px;
  max-width: 450px;
  font-weight: 300;
  text-align: left;
  font-size: min(1.17em, 5.8vw);
}

#homeBackImg-mobile {
  position: absolute;
  object-fit: cover;
  object-position: 50% 80%;
  width: 100vw;
  top: 60px;
  right: 0px;
  max-height: 600px;
  height: 120vw;
  z-index: -1;
}

#home-group-mobile {
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  width: 100%;
  max-height: 600px;
  height: calc(120vw - 60px);
  display: flex;
  flex-direction: row;
}

#home-message-mobile {
  text-align: right;
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0px 15px;
}

#home-message-mobile h1 {
  font-size: 5.8vw;
  text-align: left;
  font-style: italic;
}

#home-message-mobile h3 {
  text-align: left;
  margin-top: 0px;
  font-size: 4.8vw;
  font-weight: 300;
}

.textwidget-mobile {
  font-family: "Open Sans", sans-serif;
  padding: 30px 20px 40px 20px;
  max-width: 900px;
  text-align: left;
  color: rgb(82, 82, 82);
  background: #ffffff;
}

.textwidget-mobile h2 {
  font-size: 28px;
}

.textwidget-mobile p {
  font-size: 18px;
  line-height: 1.5;
}

.go-to-arrow {
  filter: invert(49%) sepia(62%) saturate(4309%) hue-rotate(122deg)
    brightness(95%) contrast(102%);
  height: 24px;
  width: 24px;
  margin-left: 5px;
  margin-top: 5px;
  transition: 300ms;
}
</style>
