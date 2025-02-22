Ext.define('TaskManager.view.ticket.TicketDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ticket-dialog',

    onCancel: function() {
        this.getView().close();
    },

    onSubmit: function() {
        const dialog = this.getView();
        const form = this.lookup('ticketForm');
        const store = this.getViewModel().getParent().getStore('tasks');
        if (form.validate()) {
            const values = form.getValues();
            TicketsManager.insertTicket(values, store)
                .then(() => {
                    dialog.close();
                    Ext.Msg.alert('Success', 'Ticket created successfully');
                })
                .catch(err => {
                    Ext.Msg.alert('Error', 'Failed to create task');
                });
        }
    }
});
