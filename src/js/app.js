import 'bulma/css/bulma.css'
import Clipboard from 'v-clipboard'
import String    from './core/String.js'

window.Vue = require('vue');

Vue.use(Clipboard)

const app = new Vue({
    el: '#root',
    data: {
        string: new String ({
            content: '',
            length: 0,
            isContentEqual: true,
            replace: {
                what: '',
                with: ''
            }
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
            if (this.string.originalContent !== undefined) {
                this.string.areStringsEqual();
            }
        }
    }
});