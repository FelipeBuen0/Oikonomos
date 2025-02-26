Ext.define('TaskManager.view.main.menu.MenuView', {
    extend: 'Ext.Toolbar',
    xtype: 'menu-view',
    cls: 'toolbar-menu',
    responsiveConfig: {
        'small || medium': {
            padding: 0,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            docked: 'bottom',
            defaults: {
                xtype: 'button',
                iconAlign: 'top',
                ui: 'flat',
                flex: 1
            },
            items: [{
                iconCls: 'x-fa fa-home icon-color',
                margin: 0,
                handler: 'onShowDashboard'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-tasks icon-color',
                handler: 'onShowTicketView'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-users icon-color',
                handler: 'onShowEmployees'
            }]
        },
        large: {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            padding: 8,
            docked: 'top',
            defaults: {
                xtype: 'button'
            },
            items: [{
                text: 'Dashboard',
                iconCls: 'x-fa fa-home icon-color',
                margin: '8 0 8 0',
                handler: 'onShowDashboard'
            }, {
                text: 'Kanban',
                iconCls: 'x-fa fa-tasks icon-color',
                handler: 'onShowTicketView',
                margin: '8 0 8 0'
            }, {
                text: 'Employees',
                iconCls: 'x-fa fa-users icon-color',
                handler: 'onShowEmployees',
                margin: '8 0 8 0'
            }, '->', {
                xtype: 'component',
                html: '<div class="title">Task Manager</div>'
            }]
        }
    }
});
