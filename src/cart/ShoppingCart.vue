<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Card",
  computed: {
      cart(){
          this.$store.state.cart;
      },
  }
};
</script>

<style>
td,th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.saleItems {
  margin-top: 50px;
  font-size: 18px;
  color: red;
}
</style>