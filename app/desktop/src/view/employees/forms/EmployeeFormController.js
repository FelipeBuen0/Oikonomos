Ext.define('TaskManager.view.employees.forms.EmployeeFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-form',
    onSaveEmployee: function() {
        const form = this.lookup('employeeform');
        if (form.validate()) {
            const values = form.getValues();
            // Continue with save logic
        }
    },
    
    onCancelEdit: function() {
        const me = this;
        const view = me.getView();
        view.reset();
        view.up('employee-view').setActiveItem(0);
    }
});