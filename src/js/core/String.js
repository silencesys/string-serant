class String {
    /**
     * Construct
     * @param  {object} data {content: null, length: 0}
     * @return void
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.originalContent = null;
    }

    /**
     * Update lenght of the content.
     */
    updateLength()
    {
        if (this.content !== null) {
            return this.length = this.content.length;
        }
    }

    /**
     * Convert string to lowercase letters.
     */
    convertToLowerCase()
    {
        let message = this.content;
        this.updateOriginalContent(message);

        this.content = message.toLowerCase();
    }

    /**
     * Convert string to uppercase letters.
     */
    convertToUpperCase()
    {
        let message = this.content;
        this.updateOriginalContent(message);

        this.content = message.toUpperCase();
    }

    /**
     * Replace string with original.
     */
    pasteOriginal()
    {
        this.content = this.originalContent;
    }

    /**
     * Clear string data.
     */
    clear()
    {
        this.content = null;
        this.originalContent = null;
        this.length = 0;
        this.notEqual = false;
    }

    /**
     * Update original content with current string.
     * @param  {string} message
     */
    updateOriginalContent(message) {
        if (this.originalContent === null) {
            this.originalContent = message;
        }
    }

    /**
     *  set original content to conten value, works only when ctrl+v is pressed
     */
    setOriginalContent() {
        this.originalContent = this.content;
        this.notEqual = false;
    }

    areStringsEqual()
    {
        if (this.content !== this.originalContent) {
            return this.notEqual = true;
        }

        return this.notEqual = false;
    }
}

export default String;