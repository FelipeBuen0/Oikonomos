Ext.define('TaskManager.view.kanban.KanbanViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kanban-view',
    onAddNewTask () {
        const me = this;
        const viewModel = me.getViewModel();
        TicketsManager.createNewTicket(viewModel);
    },
    onItemTap: function(view, index, target, record) {
        this.showTicketDialog(record);
    },
    showTicketDialog: function(record) {
        Ext.create('Ext.window.Window').show();
    }
});
