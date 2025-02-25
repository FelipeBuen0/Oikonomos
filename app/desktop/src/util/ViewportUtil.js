Ext.define('TaskManager.util.ViewportUtil', {
    alternateClassName: ['ViewportUtil'],
    singleton: true,

    // Use this method for quick responsive configurations
    applyResponsive(small, medium, large) {
        return {
            'width < 641': small,
            'width >= 641 && width < 1007': medium ? medium : small,
            'width >= 1007': large,
        };
    },

    // Use this method to create custom responsive formulas
    getResponsiveFormulas() {
        return {
            small(context) {
                return context.width < 641; 
            },
            medium(context) {
                return context.width >= 641 && context.width < 1007;
            },
            large(context) {
                return context.width >= 1007;
            }
        };
    }
});