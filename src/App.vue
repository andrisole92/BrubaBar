<template>
  <div id="app">

    <kanban-board :stages="stages" :blocks="blocks">
      <div v-for="block in blocks" :slot="block.id">
        <div>
          <strong>id:</strong> {{ block.id }}
        </div>
        <div>
          {{ block.title }}
        </div>
        <div>
          <b-button-group horizontal>
            <b-button variant="success" v-on:click="nextStage(block.id)">{{ successButtonTitle(block.status)}}</b-button>
            <b-button variant="danger">Cancel</b-button>
          </b-button-group>
        </div>
      </div>
    </kanban-board>

  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      stages: ['Pending', 'In Progress', 'Ready'],
      blocks: [
        {
          id: 1,
          status: 'Pending',
          title: 'Test',
        },
      ],
    }
  },
  methods: {
    nextStage: function (id) {
      debug.vue('nextStage, id: '+id);
      let b = this.blocks.find(b => b.id === Number(id));
      b.status = this.stages[this.stages.indexOf(b.status)+1];
    },
    successButtonTitle(stage){
      switch (stage){
        case "Pending":
          return "Accept";
          break;
        case "In Progress":
          return "Ready";
          break;
        case "Ready":
          return "Done";
          break;
        default:
          return "Done";
          break;
      }

    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
  @import './assets/css/kanban.scss';
  @import './assets/css/colors.scss';

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
  color: #42b983;
}
</style>
