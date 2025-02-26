Ext.define('TaskManager.view.ticket.TicketView', {
    extend: 'Ext.Container',
    xtype: 'ticket-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    responsiveConfig: ViewportUtil.applyResponsive({
        items: [{
            xtype: 'carousel-container',
            flex: 1
        }]
    }, null, {
        items: [{
            xtype: 'kanban-view',
        }]  
    })
});