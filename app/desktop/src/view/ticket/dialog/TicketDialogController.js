Ext.define('TaskManager.view.ticket.dialog.TicketDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ticket-dialog',

    onCancel() {
        this.getView().close();
    },

    onSubmit() {
        const me = this;
        const viewModel = me.getViewModel();
        const record = viewModel.get('record');
        const values = record.getData();
        TicketsManager.insertTicket(values, store)
                      .then(() => {
                          dialog.close();
                      })
                      .catch(err => {
                          Ext.Msg.alert('Error', 'Failed to create task');
                      });
    }
});
