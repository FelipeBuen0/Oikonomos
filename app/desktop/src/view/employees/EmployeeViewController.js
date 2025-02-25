Ext.define('TaskManager.view.employees.EmployeeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-view',
    onEmployeeChildTap (grid, selected) {
        const me = this;
        debugger
        const form = me.lookup('employeeForm');
        form.setRecord(selected.get('record'));
    },
    onAddEmployee () {
        const me = this;
        const form = me.lookup('employeeForm');
        debugger
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
