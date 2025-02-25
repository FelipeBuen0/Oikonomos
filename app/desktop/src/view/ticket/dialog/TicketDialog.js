Ext.define('TaskManager.view.ticket.dialog.TicketDialog', {
    extend: 'Ext.Dialog',
    xtype: 'ticket-dialog',
    controller: 'ticket-dialog',
    viewModel: 'ticket-dialog',
    title: 'Create New Ticket',
    closable: true,
    maximizable: true,
    width: '40%',
    height: '60%',
    layout: 'fit',
    responsiveConfig: {
        'small || medium': {
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
                        text: 'Ongoing',
                        value: 'ongoing'
                    }]
                }, {
                    xtype: 'datefield',
                    label: 'Schedule To',
                    name: 'scheduleTo',
                    minDate: new Date(),
                    required: true
                }]
            }]
        },
        large: {
            items: [{
                xtype: 'formpanel',
                reference: 'ticketForm',
                layout: 'vbox',
                defaults: {
                    margin: '10 10 5 10'
                },
                items: [{
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'textfield',
                        label: 'Title',
                        name: 'title',
                        required: true
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
                    }]
                }, {
                    xtype: 'textareafield',
                    label: 'Description',
                    name: 'description',
                    required: true,
                    height: 100
                }, {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'datefield',
                        label: 'Schedule To',
                        name: 'scheduleTo',
                        minDate: new Date(),
                        required: true
                    }, {
                        xtype: 'selectfield',
                        label: 'Status',
                        name: 'status',
                        required: true,
                        options: [{
                            text: 'Open',
                            value: 'open'
                        }, {
                            text: 'Ongoing',
                            value: 'ongoing'
                        }]
                    }]
                }]
            }]          
        }
    },
    buttons: [{
        text: 'Cancel',
        handler: 'onCancel'
    }, {
        text: 'Create',
        ui: 'action',
        handler: 'onSubmit'
    }]
});
