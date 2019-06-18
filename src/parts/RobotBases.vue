<template>
  <div>
    <h2>Bases</h2>The Base is critical to the mobility of your robot. Be
    sure to choose a base that will work well with the terrain
    where your robot needs to operate.
    They come in a variety of shapes and functions.
    <div v-for="(base, idx) in bases" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>
        
<script>
import parts from "../data/parts";

export default {
  name: "RobotBases",
  data() {
    return { arms: parts.bases };
  },
};
</script>
