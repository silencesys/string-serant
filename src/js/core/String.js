/**
 * This class is helper for basic string transforms. It could be extended or
 * reduced, most of the stuff could be done in Vue.js itself.
 *
 * @author Martin Rocek
 */
class String {
    /**
     * Construct String class
     *
     * @param  {object}
     * @return void
     */
    constructor(data) {
        this.options = {
            // content of the textarea
            content: '',
            // length of the content of the textarea
            length: 0,
            // original string from the textarea element
            originalContent: '',
            // are strings in textarea and originalContent equal
            isContentEqual: true,
            // Replace substring with and what
            replace: {
                what: '',
                with: ''
            },
            information: ''
        };

        this.options = Object.assign(this.options, data);

        // this for allow us to call string.fieldName in our template
        for (let field in this.options) {
            this[field] = data[field];
        }

        this.success = false;
    }

    /**
     * Update lenght of the content.
     */
    updateLength()
    {
        if (this.content !== null) {
            return this.length = this.content.length;
        }

        return this.lenght = 0;
    }

    /**
     * Convert string to lowercase letters.
     *
     * @return {string}
     */
    convertToLowerCase()
    {
        let message = this.content;

        this.updateOriginalContent(message);

        return this.content = message.toLowerCase();
    }

    /**
     * Convert string to uppercase letters.
     *
     * @return {string}
     */
    convertToUpperCase()
    {
        let message = this.content;

        this.updateOriginalContent(message);

        return this.content = message.toUpperCase();
    }

    /**
     * Replace substrings inside main string with given words.
     *
     * @return {string}
     */
    replaceSubstrings()
    {
        var regEx = new RegExp(this.replace.what, "ig");

        this.updateOriginalContent(this.content);

        if (this.content = this.content.replace(regEx, this.replace.with)) {
            this.showSuccess('Words were replaced');
        }

        return this.content;
    }

    /**
     * Replace content with value of the original content. This means that
     * modified string will be replaced by original string.
     *
     * @return {string}
     */
    pasteOriginal()
    {
        return this.content = this.originalContent;
    }

    /**
     * Reset data object inside this class.
     *
     * @return void
     */
    clear()
    {
        this.content = '';
        this.originalContent = '';
        this.length = 0;
        this.isContentEqual = true;
    }

    /**
     * Update original content value with message string.
     *
     * @param  {string} message
     * @return {string}
     */
    updateOriginalContent(message) {
        if (
            this.originalContent === undefined
            || this.originalContent.length <= 0
        ) {
            return this.originalContent = message;
        }
    }

    /**
     *  Replace content of the originalContent value with current value from
     *  content field.
     *
     * @return void
     */
    replaceOriginalContent() {
        this.originalContent = this.content;
        this.isContentEqual  = true;

        this.showSuccess();
    }

    showSuccess(message) {
        this.success = true;
        this.information = message;

        let self = this;

        setTimeout(function() {
            self.success = false;
            self.information = '';
        }, 2500);
    }

    /**
     * Determine whether content and originalContent strings are equal, if not
     * set isContentEqual field to false.
     *
     * @return {bool}
     */
    areStringsEqual()
    {
        if (this.content !== this.originalContent && this.originalContent !== undefined) {
            return this.isContentEqual = false;
        }

        return this.isContentEqual = true;
    }
}

export default String;