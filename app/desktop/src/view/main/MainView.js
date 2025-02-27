Ext.define('TaskManager.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'main-view',
    cls: 'main-view',
    controller: 'main-view',
    layout: 'vbox',
    /* Section 5.1: Layout Switching
     * Card layout for main content switching
     */
    responsiveFormulas: ViewportUtil.getResponsiveFormulas(),
    items: [{
        xtype: 'menu-view'
    }, {
        xtype: 'container',
        reference: 'cardContainer',
        flex: 1,
        layout: 'card',
        items: [{
           xtype: 'dashboard-view' 
        }]
    }]
});
