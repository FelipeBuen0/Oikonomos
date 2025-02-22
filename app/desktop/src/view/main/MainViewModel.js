Ext.define('TaskManager.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-view',

    stores: {
        tasks: {
            type: 'taskstore'
        }
    }
});
