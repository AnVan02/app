import Vue from 'nativescript-vue';

import AppnghenhacCK from './components/Appnghenhac';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <AppnghenhacCK />
        </Frame>`,

    components: {
        AppnghenhacCK
    }
}).$start();