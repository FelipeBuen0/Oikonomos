Ext.define('TaskManager.view.employees.EmployeeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-view',
    onEmployeeSelect (grid, records) {
        const me = this;
        debugger
        const form = me.lookup('employeeForm');
        form.setRecord(records[0]);
        me.onEditEmployee();
    },
    onAddEmployee () {
        const me = this;
        const form = me.lookup('employeeForm');
        form.setRecord(null);
        me.goToForm();
    },
    onEditEmployee() {
        this.goToForm();
    },
    goToForm() {
        const me = this;
        const view = me.getView();
        view.setActiveItem(1);
    }
});
