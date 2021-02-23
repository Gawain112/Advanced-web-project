<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <p>
      For more information about Cardiomyopathy, we recommend checking out these sites:
    </p>
      <ul>
        <li>
          <a
            href="https://www.nhs.uk/conditions/cardiomyopathy/"
            target="_blank"
            rel="noopener">NHS
            </a>
        </li>
        <li>
          <a
            href="https://www.cardiomyopathy.org/"
            target="_blank"
            rel="noopener"
            >Cardiomyopathy UK - The Heart Muscle Charity</a
          >
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
