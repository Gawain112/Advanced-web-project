<template>
  <div class="home">
    
    
    <h1>Cardiomyopathy</h1>

    <div class="text-justify">
    
    <p>Cardiomyopathy is a disease of the heart muscle that makes it harder for your heart to pump blood to the rest of your body. 
      The most common forms of cardiomyopathy are Hypertrophic Cardiomyopathy, Dilated Cardiomyopathy and Arrhythmogenic right ventricular 
      Cardiomyopathy. These cardiomyopathies occur due to mutations in genes that encode certain proteins in the cells of the heart.</p>

    <p>Many research groups, clinicians, medical centres and labs perform experiments on heart cells from patients and animals to better 
      understand the mechanisms that cause these cardiomyopathies. The aim is disease prevention and the development of therapeutic responses.</p>

    <p>The data from these experiments are scattered in published papers in different journals and sitting on the hard drives of disparate and 
      disconnected research groups and medical centres. That's where we come in. Here you can search external databases and input your own data 
      and have it visually presented to you in a graph</p>

    </div>

    <Intro class="text-center" msg="More About Cardiomyopathy" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Home.vue";

export default {
  name: "Home",
  components: {
    Intro,
  },
};
</script>
