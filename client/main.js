import { Meteor } from 'meteor/meteor';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueMeteorTracker from 'vue-meteor-tracker';

// Import App vue file - main entry point
import App from '/imports/App.vue';
// Import main HTML page containing <div id="app"></div>
import './main.html';

// Import Routes definitions
import { routes } from '/imports/routes.js';

// Import Layouts
import DefaultLayout from '/imports/00Layouts/DefaultLayout.vue';

// Initiate code on app startup
Meteor.startup(() => {
  Vue.use(VueRouter);
  Vue.use(VueMeteorTracker);
  
  // Initialise Routes
  const router = new VueRouter({
    routes,
    mode: 'history'
  });

  // Initialise Vue instance
  new Vue({
    el: '#app',
    router,
    components: {
      'default-layout': DefaultLayout
    },
    ...App
  });

});