<template>
    <div>
        <h2>Torsos</h2>
        The torso is the central part of your robot that holds everything
        together. Choosing the right torso will help ensure your robot
        functions well with the parts you coose.
        <div v-for="(torso, idx) in parts.torsos" :key="idx">
            <h4>{{torso.title}}</h4>
            <div>{{torso.description}}</div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
//import parts from '../data/parts';
import getPartsMixin from './get-parts-mixin';
export default {
    name: 'RobotTorsos',
    // data() {
    //     return { torsos: parts.torsos };
    // },
    mixins: [getPartsMixin],
};
</script>