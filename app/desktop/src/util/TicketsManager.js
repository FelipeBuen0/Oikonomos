Ext.define('TaskManager.util.TicketsManager', {
    alternateClassName: ['TicketsManager'],
    singleton: true,

    insertTicket(ticketData, store) {
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
    }
});
