<template>
  <div>
    <h2>arms</h2>The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in parts.arms" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>
        
<script>
//import parts from "../data/parts";
import getPartsMixin from './get-parts-mixin';

export default {
  name: "RobotArms",
  // data() {
  //   return { arms: parts.arms };
  // }
  mixins: [getPartsMixin],
};
</script>
