Ext.define('TaskManager.view.employees.EmployeeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employee-view',
    stores: {
        employees: {
            type: 'employeestore'
        },
        roles: {
            data: [{ 
                text: 'Regional Manager', 
                value: 'Regional Manager' 
            }, { 
                text: 'Assistant Regional Manager', 
                value: 'Assistant Regional Manager' 
            }, { 
                text: 'Sales Representative', 
                value: 'Sales Representative' 
            }, { 
                text: 'Receptionist', 
                value: 'Receptionist' 
            }, { 
                text: 'Senior Accountant', 
                value: 'Senior Accountant' 
            }, { 
                text: 'Accountant', 
                value: 'Accountant' 
            }, { 
                text: 'Human Resources', 
                value: 'Human Resources' 
            }, { 
                text: 'Customer Service', 
                value: 'Customer Service' 
            }, { 
                text: 'Quality Assurance', 
                value: 'Quality Assurance' 
            }, { 
                text: 'Supplier Relations', 
                value: 'Supplier Relations' 
            }, { 
                text: 'Temp', 
                value: 'Temp' 
            }]
        }
    },
    data: {
        record: null
    }
});
