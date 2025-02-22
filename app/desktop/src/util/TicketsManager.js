Ext.define('TaskManager.util.TicketsManager', {
    alternateClassName: ['TicketsManager'],
    singleton: true,
    insertTicket(ticketData, store) {
        //<debug>
        debugger;
        //</debug>
        return new Promise((resolve) => {
            ticketData.id = parseInt(Ext.id(null, ' ')) + 100;
            store.add(ticketData);
            store.sync();
            resolve(ticketData);
        });
    },

    updateTicket(ticketId, ticketData, store) {
        return new Promise((resolve, reject) => {
            const record = store.getById(ticketId);

            if (!record) {
                reject('Record not found');
                return;
            }

            record.set(ticketData);
            store.sync();
            resolve(record.getData());
        });
    },

    deleteTicket(ticketId, store) {
        return new Promise((resolve, reject) => {
            const record = store.getById(ticketId);

            if (!record) {
                reject('Record not found');
                return;
            }

            store.remove(record);
            store.sync();
            resolve(true);
        });
    },
    createNewTicket(viewModel, options = {}) {
        if (Ext.isDefined(viewModel)) {
            const defaultConfig = {
                xtype: 'ticket-dialog',
                viewModel: {
                    parent: viewModel
                }
            };

            // Merge default config with provided options
            const config = Ext.platformTags.desktop ? 
                defaultConfig : 
                Ext.merge({}, defaultConfig, options);

            return Ext.create(config).show();
        }
    }
});
