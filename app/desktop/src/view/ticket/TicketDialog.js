Ext.define('TaskManager.view.ticket.TicketDialog', {
    extend: 'Ext.Dialog',
    xtype: 'ticket-dialog',
    
    controller: 'ticket-dialog',
    viewModel: 'ticket-dialog',
    
    title: 'Create New Ticket',
    closable: true,
    maximizable: true,
    width: 400,
    height: 500,
    
    layout: 'fit',
    
    items: [{
        xtype: 'formpanel',
        reference: 'ticketForm',
        layout: 'vbox',
        defaults: {
            margin: '10 10 5 10'
        },
        items: [{
            xtype: 'textfield',
            label: 'Title',
            name: 'title',
            required: true
        }, {
            xtype: 'textareafield',
            label: 'Description',
            name: 'description',
            required: true,
            height: 100
        }, {
            xtype: 'selectfield',
            label: 'Priority',
            name: 'priority',
            required: true,
            options: [{
                text: 'Low',
                value: 1
            }, {
                text: 'Medium',
                value: 2
            }, {
                text: 'High',
                value: 3
            }]
        }, {
            xtype: 'selectfield',
            label: 'Status',
            name: 'status',
            required: true,
            options: [{
                text: 'Open',
                value: 'open'
            }, {
                text: 'In Progress',
                value: 'in_progress'
            }, {
                text: 'Closed',
                value: 'closed'
            }]
        }]
    }],

    buttons: [{
        text: 'Cancel',
        handler: 'onCancel'
    }, {
        text: 'Create',
        ui: 'action',
        handler: 'onSubmit'
    }]
});
