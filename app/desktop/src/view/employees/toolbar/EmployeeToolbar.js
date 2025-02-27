Ext.define('TaskManager.view.employees.toolbar.EmployeeToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'employee-toolbar',
    cls: 'toolbar-menu',
    responsiveConfig: ViewportUtil.applyResponsive({
        items: [{
            xtype: 'component',
            cls: 'title',
            html: 'Employees',
        }, '->', {
            xtype: 'button',
            handler: 'onAddEmployee',
            iconCls: 'x-fa fa-plus',
            width: 64
        }, {
            xtype: 'button',
            handler: 'onEditEmployee',
            iconCls: 'x-fas fa-pen-square',
            width: 64,
            bind: {
                disabled: '{!record}'
            }
        }]
    }, null, {
        items: [{
            xtype: 'component',
            cls: 'title',
            html: 'Employees',
        }, '->', {  
            xtype: 'button',
            text: 'Add Employee',
            handler: 'onAddEmployee',
            iconCls: 'x-fa fa-plus'
        }, {
            xtype: 'button',
            text: 'Edit Employee',
            handler: 'onEditEmployee',
            iconCls: 'x-fas fa-pen-square',
            bind: {
                disabled: '{!record}'
            }
        }]
    })
});