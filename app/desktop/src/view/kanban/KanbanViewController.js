Ext.define('TaskManager.view.kanban.KanbanViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kanban-view',
    onAddNewTask () {
        const me = this;
        const viewModel = me.getViewModel();
        TicketsManager.createNewTicket(viewModel);
    },
    /* Section 4.2: Touch-friendly interactions
     * Handles both tap and click events for cross-device compatibility
     */
    onItemTap(view, index, target, record) {
        this.showTicketDialog(record);
    },
    showTicketDialog(record) {
        Ext.create('Ext.window.Window').show();
    }
});
