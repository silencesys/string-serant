import 'bulma/css/bulma.css'
import Clipboard from 'v-clipboard'
import String    from './core/String.js'

window.Vue = require('vue');

Vue.use(Clipboard)

const app = new Vue({
    el: '#root',
    data: {
        string: new String ({
            content: null,
            length: 0,
            notEqual: false
        })
    },
    methods: {
        copyToClipboard()
        {
            this.$clipboard(this.string.content);
        }
    },
    watch: {
        'string.content': function() {
            if (this.string.originalContent !== null) {
                this.string.areStringsEqual();
            }
        }
    }
});