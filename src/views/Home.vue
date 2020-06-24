<template>
  <div class="page">
    <div id="home-group">
      <div id="home-message">
        <h1>At Roofing Solutions of Texas…</h1>
        <h3>...we recognize that every roofing project has unique or special circumstances that need to be resolved to your satisfaction. With that in mind, Roofing Solutions of Texas wants to help you get a beautiful, long-lasting roof installed at a price that you can afford and appreciate.</h3>
      </div>
      <img src="../assets/roofing3.jpg" id="homeBackImg"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style>

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1200px;
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

#homeBackImg{
  position: absolute;
  object-fit: cover;
  width: 100vw;
  top: 170px;
  right: 0px;
  height: 40vw;
  max-height: 350px;
  z-index: -1;
  opacity: 1;
}
</style>
