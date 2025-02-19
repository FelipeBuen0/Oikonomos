Ext.define('TaskManager.view.main.menu.MenuView', {
    extend: 'Ext.Toolbar',
    xtype: 'menu-view',
    responsiveConfig: {
        'small || medium': {
            cls: 'menu-view',
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
                text: 'Kanban',
                margin: 0,
                handler: 'onShowKanban'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-tasks icon-color',
                text: 'Tasks',
                handler: 'TasksMenu'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-users icon-color',
                text: 'Users',
                // handler: 'onShowEmployees'
            }]
        },
        large: {
            cls: 'menu-view',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            padding: 8,
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Kanban',
                iconCls: 'x-fa fa-home',
                margin: '0 0 10 0',
                handler: 'onShowKanban'
            }, {
                xtype: 'button',
                text: 'Pending Tasks',
                iconCls: 'x-fa fa-tasks',
                handler: 'onShowPendingTasks',
                margin: '0 0 10 0'
            }, {
                xtype: 'button',
                text: 'Completed Tasks',
                iconCls: 'x-fa fa-check-circle',
                handler: 'onShowCompletedTasks',
                margin: '0 0 10 0'
            }, {
                xtype: 'button',
                text: 'Show Employees',
                iconCls: 'x-fa fa-users',
                handler: 'onShowEmployees',
                margin: '0 0 10 0'
            }, '->', {
                xtype: 'component',
                html: '<div class="title">Task Manager</div>'
            }]
        }
    }
});
