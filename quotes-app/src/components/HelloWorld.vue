<template>
  <div class="Main">
    <div class="navbar">
    <p id="Logo">QuoteVerse</p>
    <router-link to="/" id="Home">Home</router-link>
    <router-link to="/quotes" id="Quotes">Quotes</router-link>
    <router-link to="/authors" id="Authors">Authors</router-link>
  </div>

  <div class="content">
    <img src="./Images/Einstein.png" id="Einstein">
    <h4 class="title1">Albert Einstein</h4>
    <h4 class="title2">QuoteVerse is the best quote website!</h4>
    <img src="./Images/book1.png" id="book1">
    <img src="./Images/book1.png" id="book2">
  </div>

  </div>  
</template>

<script>

</script>

<style scoped>
  .Main {
    background: linear-gradient(45deg, #182552 0%, #5D4C93 23.80%, #EE6583 50.35%, #FFCC63 80.98%, #FFF 100%);
    backdrop-filter: blur(50px);
    width: 1920px;
    height: 100vh;
  }

  #Logo {
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 60px;
    margin-top: 35px;
  }

  #Home {
    color: #FFF;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    left: 400px;
    top: 55px;
    text-decoration: none;
  }

  #Quotes {
    color: #FFF;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    left: 550px;
    top: 55px;
    text-decoration: none;
  }

  #Authors {
    color: #FFF;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    left: 720px;
    top: 55px;
    text-decoration: none;
  }

  #Einstein {
    width: 419px;
    height: 590px;
    margin-left: 100px;
    margin-top: 50px;
    border-radius: 61px;
    box-shadow: 0px 4px 26px 9px rgba(0, 0, 0, 0.25);
  }

  .title1 {
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px #000;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    bottom: 580px;
    right: 200px;
  }

  .title2 {
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px #000;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    bottom: 580px;
    right: 38px;
  }

  #book1 {
    width: 300px;
    height: 370px;
    transform: rotate(15.423deg);
    mix-blend-mode: overlay;
    position: absolute;
    top: 500px;
    left: 700px;
    animation: books-animation 2s infinite alternate;
  }

  @keyframes books-animation {
    0% {
      top: 500px;
      left: 700px;
    }

    100% {
      top: 480px;
      left: 720px;
    }
  }

  #book2 {
    width: 318.916px;
    height: 383.046px;
    transform: rotate(-28.722deg);
    mix-blend-mode: overlay;
    position: absolute;
    top: 100px;
    left: 1500px;
    animation: books-animation2 2s infinite alternate;
  }

  @keyframes books-animation2 {
    0% {
      top: 100px;
      left: 1500px;
    }

    100% {
      top: 60px;  
      left: 1500px;
    }
  }
</style>