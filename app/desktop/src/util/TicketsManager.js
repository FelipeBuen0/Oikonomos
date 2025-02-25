Ext.define('TaskManager.util.TicketsManager', {
    alternateClassName: ['TicketsManager'],
    singleton: true,
    insertTicket(ticketData, store) {
        return new Promise((resolve) => {
            ticketData.id = parseInt(Ext.id(null, ' ')) + 100;
            store.insert(0, ticketData);
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
    createNewTicket(viewModel) {
        //ExtJS will merge the configs with the ones already defined.
        const mobileConfig = {
            height: '100%',
            width: '100%',
            maximizable: false,
            fullscreen: true,
            modal: true
        };
        const desktopConfig = {
            closable: true,
            maximizable: true,
            width: '40%',
            height: '60%',
            layout: 'fit'
        }
        if (Ext.isDefined(viewModel)) {
            return Ext.create({
                xtype: 'ticket-dialog',
                viewModel: {
                    parent: viewModel
                },
                responsiveConfig: ViewportUtil.applyResponsive(mobileConfig, null, desktopConfig)
            }).show()
        }
    }
});
