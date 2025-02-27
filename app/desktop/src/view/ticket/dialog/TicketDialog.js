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
    /* Section 2.2: ResponsiveFormulas
     * Implementing reusable responsive rules from ViewportUtil
     */
    responsiveFormulas: ViewportUtil.getResponsiveFormulas(),
    /* Section 5.2: Component Adaptation
     * Demonstrates form field arrangements based on screen size
     */
    responsiveConfig: {
        /* Section 2.2: ResponsiveFormulas
        *  Using ResponsiveConfig with the values declared in ViewportUtil.
        */
        small: {
            // Mobile/Tablet: Vertical stacked layout
            items: [{
                xtype: 'formpanel',
                reference: 'ticketForm',
                layout: 'vbox',
                defaults: {
                    margin: '8 8 4 8'
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
                    height: 256
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
        medium: {
            items: [{
                xtype: 'formpanel',
                reference: 'ticketForm',
                layout: 'vbox',
                defaults: {
                    margin: '8 8 4 8'
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
                    height: 256
                }, {
                    xtype: 'formpanel',
                    reference: 'ticketForm',
                    layout: 'vbox',
                    defaults: {
                        margin: '8 8 4 8'
                    },
                    items: [{
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
            // Desktop: Horizontal field arrangement with groups
            items: [{
                xtype: 'formpanel',
                reference: 'ticketForm',
                layout: 'vbox',
                defaults: {
                    margin: 16
                },
                items: [{
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        margin : 8
                    },
                    items: [{
                        xtype: 'textfield',
                        label: 'Title',
                        name: 'title',
                        flex: 1,
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
                    height: 100,
                    margin: 24,
                    required: true
                }, {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        margin : 8
                    },
                    items: [{
                        xtype: 'datefield',
                        label: 'Schedule To',
                        name: 'scheduleTo',
                        minDate: new Date(),
                        required: true,
                        flex: 1
                    }, {
                        xtype: 'selectfield',
                        label: 'Status',
                        name: 'status',
                        flex: 1,
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
