import Vue from 'vue'
import App from './App.vue'
import { Server, Model, Factory } from '@miragejs/server';

Vue.config.productionTip = false

let server = new Server({
  models: {
    user: Model
  },
  factories: {
    user: Factory.extend({
      name(i) {
        return `User ${i}`;
      }
    })
  },

  seeds(server) {
    server.createList('user', 21);
  },

  routes() {
    this.namespace = 'api';

    this.resource('user');

    // this.passthrough('http://localhost:8080/**');
  }
});

window.server = server;

new Vue({
  render: h => h(App),
}).$mount('#app')
