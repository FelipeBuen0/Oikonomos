Ext.define('TaskManager.view.employees.EmployeeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employee-view',
    stores: {
        employees: {
            type: 'employeestore'
        }
    },
});
