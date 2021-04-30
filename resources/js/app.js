require("./bootstrap");


import {app, plugin} from '@inertiajs/inertia-vue'
import {InertiaProgress} from "@inertiajs/progress";
import Vue from "vue";
import VueMeta from "vue-meta";

Vue.use(plugin)

Vue.use(VueMeta);

Vue.prototype.$route = (...args) => route(...args).url();

InertiaProgress.init();


const el = document.getElementById('app')

new Vue({
    metaInfo: {
        titleTemplate: title => (title ? `${title} - LaraVC` : "LaraVC"),
        // link: [{ rel: "shortcut icon", href: "/logo/logo.svg" }]
    },
    render: h => h(app, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el)
