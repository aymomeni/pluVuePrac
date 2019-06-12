<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectedHeadIndex].src" title="left arm">
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[selectedLeftArmIndex].src" title="left arm">
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[selectedTorsoIndex].src" title="left arm">
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[selectedRightArmIndex].src" title="left arm">
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[selectedBaseIndex].src" title="left arm">
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from "../data/parts";
export default {
  name: "RobotBuilder",
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0
    };
  },
  methods: {
    selectNextHead() {
      if (this.selectedHeadIndex < availableParts.heads.length - 1) {
        // eslint-disable-next-line
        console.log("next head clicked");
        this.selectedHeadIndex += 1;
      }
    },
    selectPreviousHead() {
      if (this.selectedHeadIndex > 0) {
        // eslint-disable-next-line
        console.log("previous head clicked");
        this.selectedHeadIndex -= 1;
      }
    },
    selectNextRightArm() {
      if (this.selectedRightArmIndex < availableParts.arms.length - 1) {
        // eslint-disable-next-line
        console.log("next right arm clicked");
        this.selectedRightArmIndex += 1;
      }
    },
    selectPreviousRightArm() {
      if (this.selectedRightArmIndex > 0) {
        // eslint-disable-next-line
        console.log("previous right arm clicked");
        this.selectedRightArmIndex -= 1;
      }
    },
    selectNextLeftArm() {
      if (this.selectedLeftArmIndex < availableParts.arms.length - 1) {
        // eslint-disable-next-line
        console.log("next left arm clicked");
        this.selectedLeftArmIndex += 1;
      }
    },
    selectPreviousLeftArm() {
      if (this.selectedLeftArmIndex > 0) {
        // eslint-disable-next-line
        console.log("previous left arm clicked");
        this.selectedLeftArmIndex -= 1;
      }
    },
    selectNextTorso() {
      if (this.selectedTorsoIndex < availableParts.torsos.length - 1) {
        // eslint-disable-next-line
        console.log("next torso clicked");
        this.selectedTorsoIndex += 1;
      }
    },
    selectPreviousTorso() {
      if (this.selectedTorsoIndex > 0) {
        // eslint-disable-next-line
        console.log("previous torso clicked");
        this.selectedTorsoIndex -= 1;
      }
    },
    selectNextBase() {
      if (this.selectedBaseIndex < availableParts.bases.length - 1) {
        // eslint-disable-next-line
        console.log("next base clicked");
        this.selectedBaseIndex += 1;
      }
    },
    selectPreviousBase() {
      if (this.selectedBaseIndex > 0) {
        // eslint-disable-next-line
        console.log("previous base clicked");
        this.selectedBaseIndex -= 1;
      }
    },
  },
};
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>