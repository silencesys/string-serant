
new Vue({
    el: '#root',
    data: {
        message: null,
        textLength: 0,
        originalMessage: null
    },
    methods: {
        fillOriginalMessage() {
            if (this.originalMessage === null) {
                this.originalMessage = this.message;
            }
        },
        countLength() {
            let string = this.message;
            this.textLength = string.length;
        },
        convertToLowercase() {
            this.fillOriginalMessage();
            this.message = this.message.toLowerCase();
        },
        convertToUppercase() {
            this.fillOriginalMessage();
            this.message = this.message.toUpperCase();
        },
        reset() {
            this.message = this.originalMessage;
        },
        clear() {
            this.originalMessage = '';
            this.message = '';
        }
    }
});