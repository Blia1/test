<template>
  <div class="navbar-component">
    <nav class="navbar" :class="{ 'sticky': isSticky }">
      <div class="logo">
        <h4 class="logo-text">FREEDOM DAY</h4>
      </div>
      <div class="navbarNav">
        <div class="navbar-nav">
          <ul class="nav-item">
            <li v-for="section in sections" :key="section.id" class="nav-link">
              <a @click="scrollToSection(section.id)" id="nav-item-1">{{ section.label1 }}</a>
              <a @click="scrollToSection(section.id)" id="nav-item-2">{{ section.label2 }}</a>
              <a @click="scrollToSection(section.id)" id="nav-item-3">{{ section.label3 }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      sections: [
        { id: 'home', label1: 'Home' },
        { id: 'articles-section', label2: 'Articles' },
        { id: 'videos', label3: 'videos' },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = -250;
        const scrollToY = section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: scrollToY, behavior: 'smooth' });
      }
    },
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.navbarNav {
  position: fixed;
  top: 0;
  left: 900;
  right: 0;
}

.navbar-nav {
  margin-top: 10px;
  margin-right: 30px;
  gap: 50px;
}


.nav-link {
  background-color: rgba(255, 0, 0, 0.3);
  border-radius: 50px;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 30px;
  transition: background-color 0.3s;
  cursor: pointer;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  font-family: 'Bebas Neue', sans-serif;
}

.logo-text {
  font-size: 48px;
  position: absolute;
  margin-top: 30px;
  margin-left: 110px;
  background-color: rgba(255, 0, 0, 0.3);
  border-radius: 50px;
  width: 300px;
  color: #212529;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.nav-link:hover {
  background-color: rgba(255, 0, 0, 0.7);
}
</style>
