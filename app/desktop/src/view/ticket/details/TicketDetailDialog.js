Ext.create('Ext.window.Window', {
    title: 'Ticket Details',
    modal: true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'textfield',
            name: 'title', 
            fieldLabel: 'Title', 
            value: record.get('title') 
        }, { 
            xtype: 'textarea', 
            name: 'description', 
            fieldLabel: 'Description', 
            value: record.get('description') 
        }, { 
            xtype: 'datefield', 
            name: 'scheduleTo', 
            fieldLabel: 'Schedule To', 
            value: record.get('scheduleTo') 
        }, { 
            xtype: 'combobox', 
            name: 'status', 
            fieldLabel: 'Status', 
            store: ['Open', 'In Progress', 'Closed'], 
            value: record.get('status') 
        }, { 
            xtype: 'combobox', 
            name: 'priority', 
            fieldLabel: 'Priority', 
            store: ['Low', 'Medium', 'High'], 
            value: record.get('priority') 
        }],
        buttons: [{
            text: 'Save',
            handler: function(btn) {
                var form = btn.up('form').getForm();
                if (form.isValid()) {
                    form.updateRecord(record);
                    btn.up('window').close();
                }
            }
        }, {
            text: 'Cancel',
            handler: function(btn) {
                btn.up('window').close();
            }
        }]
    }]
})