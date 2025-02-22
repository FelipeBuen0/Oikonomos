Ext.define('TaskManager.view.kanban.KanbanViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kanban-view',
    onAddNewTask () {
        const me = this;
        const viewModel = me.getViewModel();
        TicketsManager.createNewTicket(viewModel);
    }
});
