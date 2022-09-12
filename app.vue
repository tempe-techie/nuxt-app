<template>
  <div>
    <h1>Nuxt app</h1>
  </div>
</template>

<script>
import { Orbis } from "@orbisclub/orbis-sdk";

export default {
  name: "App",

  created() {
    console.log("hello hello");
    this.connectOrbis();
  },

  methods: {
    async connectOrbis() {
      let orbis = new Orbis();
      let res = await orbis.connect();
      /** Check if connection is successful or not */
      if(res.status == 200) {
        console.log("DID LOL: " + res.did);
      } else {
        console.log("Error connecting to Ceramic: ", res);
      }
    }
  },

  setup() {
    
  },
}
</script>
