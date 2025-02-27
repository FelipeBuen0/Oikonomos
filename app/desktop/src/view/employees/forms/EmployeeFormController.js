Ext.define('TaskManager.view.employees.forms.EmployeeFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-form',
    onBackButton() {
        this.returnToGrid();
    },

    onSaveEmployee() {
        const me = this;
        const viewModel = me.getViewModel();
        const record = viewModel.get('record')
        if (!Ext.isDefined(record.id)) {
            let store = viewModel.getStore('employees');
            Id = parseInt(Ext.id(null, ' ')) + 100;
            record.id = Id;
            record.company = 'Dunder Mifflin';
            store.insert(0, record);
            store.sync();
        }
        this.returnToGrid();
    },
    returnToGrid () {
        const me = this;
        const view = me.getView();
        view.up('employee-view').setActiveItem(0);
    },
    onCancelEdit() {
        this.returnToGrid();
    }
});