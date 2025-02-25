Ext.define('TaskManager.util.Validation', {
    singleton: true,

    validateSSN: function(ssn) {
        const regex = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
        return regex.test(ssn);
    },

    validatePhoneNumber: function(phone) {
        const regex = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
        return regex.test(phone);
    },

    validateZipCode: function(zip) {
        const regex = /^[0-9]{5}(-[0-9]{4})?$/;
        return regex.test(zip);
    }
});
