Ext.define('TaskManager.view.employees.EmployeeView', {
    extend: 'Ext.Container',
    xtype: 'employee-view',
    controller: 'employee-view',
    viewModel: 'employee-view',
    reference: 'employeeCtn',
    layout: {
        type: 'card',
    },
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'employee-toolbar',
            margin: 8
        }, {
            xtype: 'employee-grid',
            margin: 8,
            flex: 1,
            bind: {
                store: '{employees}'
            }
        }]
    }, {
        xtype: 'employee-form',
    }]
});
