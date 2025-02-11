Ext.define('TaskManager.view.navigation.NavigationView', {
    extend: 'Ext.menu.Menu',
    xtype: 'nav-view',
    cls: 'navigation-sidebar',
    width: 250,
    collapsible: true,
    scrollable: true,
    items: [{
        xtype: 'button',
        text: 'Dashboard',
        iconCls: 'x-fa fa-home',
        margin: '0 0 10 0',
        handler: 'onShowDashboard',
        width: '100%'
    }, {
        xtype: 'button',
        text: 'Pending Tasks',
        iconCls: 'x-fa fa-tasks',
        handler: 'onShowPendingTasks',
        margin: '0 0 10 0',
        width: '100%'
    }, {
        xtype: 'button',
        text: 'Completed Tasks',
        iconCls: 'x-fa fa-check-circle',
        handler: 'onShowCompletedTasks',
        margin: '0 0 10 0',
        width: '100%'
    }, {
        xtype: 'button',
        text: 'Show Employees',
        iconCls: 'x-fa fa-users',
        handler: 'onShowEmployees',
        margin: '0 0 10 0',
        width: '100%'
    }]
});