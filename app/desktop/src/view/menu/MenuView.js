Ext.define('TaskManager.view.menu.MenuView', {
    extend: 'Ext.Toolbar',
    xtype: 'menu-view',
    responsiveConfig: {
        'small || medium': {
            cls: 'menu-view',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            docked: 'bottom',
            items: [{
                xtype: 'button',
                text: 'Kanban',
                iconCls: 'x-fa fa-home',
                margin: '0 0 10 0',
                handler: 'onShowKanban'
            }, {
                xtype: 'button',
                text: 'Tasks',
                iconCls: 'x-fa fa-tasks',
                handler: 'TasksMenu',
                margin: '0 0 10 0'
            }, {
                xtype: 'button',
                text: 'Show Employees',
                iconCls: 'x-fa fa-users',
                // handler: 'onShowEmployees',
                margin: '0 0 10 0'
            }]
        },
        large: {
            cls: 'menu-view',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
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
