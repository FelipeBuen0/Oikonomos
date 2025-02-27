Ext.define('TaskManager.view.ticket.TicketView', {
    extend: 'Ext.Container',
    xtype: 'ticket-view',
    
    /* Section 4.2: Kanban/Ticket View
     * Demonstrates mobile carousel vs desktop kanban board pattern
     */
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    /* Section 5.1: Layout Switching
     * Mobile: Carousel layout for touch-friendly interactions
     * Desktop: Full kanban board layout
     */
    responsiveConfig: ViewportUtil.applyResponsive({
        // Mobile view (width < 641px)
        items: [{
            xtype: 'carousel-container',
            flex: 1
        }]
    }, null, {
        // Desktop view (width >= 1007px)
        items: [{
            xtype: 'kanban-view',
        }]  
    })
});