<template>
  <panel title="JXR">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <a href="https://www.jxrconstructors.com/" target=""><img src="../assets/jxr_logo.png" href="https://www.jxrconstructors.com/"/></a>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a
            href="https://www.jxrconstructors.com/#about-us"
            target="_blank"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://www.jxrconstructors.com/jxr-constructors-experience/"
            target="_blank"
          >
            Experience
          </a>
        </li>
      </ul>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'root',
  components: {
    Panel
  },
  data () {
    return {
      msg: 'Welcome to JXR CONSTRUCTORS INC. '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1976d2;
}
</style>
