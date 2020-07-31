<template>
  <div class="page home">
    <div id="home-group">
      <div id="home-message">
        <h1>At Roofing Solutions of Texas…</h1>
        <h3>...we recognize that every roofing project has unique or special circumstances that need to be resolved to your satisfaction. With that in mind, Roofing Solutions of Texas wants to help you get a beautiful, long-lasting roof installed at a price that you can afford and appreciate.</h3>
      </div>
      <img src="../assets/roofing4.jpg" id="homeBackImg" />
    </div>
    <reqFree></reqFree>
    <div class="roof-services">
      <div class="roof-service">
        <div class="serv-img-container">
          <div
            class="ct-text"
            v-on:click="$router.push('roofing-contractors-fort-worth')"
          >Roof Replacement</div>
          <img src="../assets/roof-replacement.png" class="service-img" />
        </div>
        <h3
          class="service-snippet"
        >Texas residents know that high temperatures, strong winds, heavy rain and even hail can speed up the need for roof replacement. The next time that you need the roof of your home replaced from damage or even just natural wear and tear after a few decades of use, make sure you turn to the best roofing contractors Fort Worth has to offer: Roofing Solutions of Texas.</h3>
      </div>
      <div class="roof-service">
        <div class="serv-img-container">
          <div class="ct-text" v-on:click="$router.push('roof-repair-fort-worth')">Roof Leak Repair</div>
          <img src="../assets/roof-repair.png" class="service-img" />
        </div>
        <h3
          class="service-snippet"
        >There are dozens of reasons that you might need to have your residential roof repaired. Heavy winds and storms could cause damage; leaks could crop up over time; you could be dealing with shrinkage; or there might be standing water. Whatever problems you encounter with your roof, seek out the best roof repair Fort Worth has to offer: Roofing Solutions of Texas.</h3>
      </div>
    </div>
    <div class="textwidget">
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
import ReqFree from '../components/ReqFree.vue'
export default {
  name: 'Home',
  components: {
    reqFree: ReqFree
  }
}
</script>

<style>
.page.home {
  padding: 0px 0px 0px 0px;
}

#home-group {
  max-height: 350px;
  height: 40vw;
  width: 1000px;
  max-width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

#home-message {
  text-align: right;
  width: 550px;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  text-shadow: 0px 0px 9px rgba(255, 255, 255, 0.219);
}

#home-message h1 {
  font-size: min(35px, 3.2vw);
}

#home-message h3 {
  margin-top: 0px;
  font-size: min(22px, 2.5vw);
  font-weight: 400;
}

hr {
  width: 90vw;
  border: 0.5px solid rgba(0, 0, 0, 0.082);
  margin: 50px 0px 50px 0px;
}

#homeBackImg {
  position: absolute;
  object-fit: cover;
  object-position: 50% 80%;
  width: 100vw;
  top: 70px;
  right: 0px;
  height: 55vw;
  max-height: 450px;
  z-index: -1;
  opacity: 1;
}

.roof-services {
  margin: 30px 30px 30px 30px;
  display: flex;
  width: 90vw;
  justify-content: center;
  flex-wrap: wrap;
}

.roof-service {
  align-items: flex-start;
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
}

.serv-img-container {
  position: relative;
  width: 360px;
  height: 219px;
  text-align: center;
  z-index: 0;
}

.ct-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  color: white;
  font-weight: 700;
  text-shadow: 0px 0px 7px black;
  -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.575);
  width: 360px;
  height: 219px;
  line-height: 219px;
  transition: 0.25s;
  background: rgba(0, 0, 0, 0.205);
}

.ct-text:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  transition: 0.25s;
}

.service-img {
  object-fit: fill;
  width: 360px;
  height: auto;
  margin-left: 0px;
}

.service-snippet {
  min-width: 350px;
  max-width: 450px;
  font-weight: 300;
  margin: 0px 0px 0px 20px;
  text-align: left;
}

.textwidget {
  font-family: "Open Sans", sans-serif;
  padding: 0px 40px 40px 40px;
  max-width: 860px;
  text-align: left;
  color: rgb(82, 82, 82);
}

.textwidget h2 {
  font-size: 28px;
}

.textwidget p {
  font-size: 18px;
  line-height: 1.5;
}

.textwidget a {
  text-decoration: none;
  color: rgb(0, 173, 78);
}

.textwidget a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 810px) {
  .service-snippet {
    display: none !important;
  }
}
</style>
