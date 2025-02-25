Ext.define('TaskManager.view.employees.forms.EmployeeForm', {
    extend: 'Ext.form.Panel',
    xtype: 'employee-form',
    controller: 'employee-form',
    // title: 'Employee Details',
    padding: 8,
    scrollable: true,
    reference: 'employeeForm',
    responsiveConfig: ViewportUtil.applyResponsive({
        items: [{
            xtype: 'toolbar',
            cls: 'toolbar-menu',
            items: [{
                xtype: 'component',
                cls: 'title',
                html: 'Employees Details'
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                required: true
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                required: true
            }, {
                xtype: 'textfield',
                name: 'phoneNumber',
                label: 'Phone Number',
                inputMask: '(999) 999-9999'
            }, {
                xtype: 'selectfield',
                name: 'documentType',
                label: 'Document Type',
                options: [
                    { text: 'SSN', value: 'SSN' }
                ],
                required: true
            }, {
                xtype: 'textfield',
                name: 'ssn',
                label: 'SSN',
                inputMask: '999-99-9999',
                required: true,
                validators: {
                    type: 'format',
                    matcher: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
                    message: 'Invalid SSN format (XXX-XX-XXXX)'
                }
            }, {
                xtype: 'containerfield',
                label: 'Emergency Contact',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    name: 'emergencyContact',
                    flex: 1,
                    required: true
                }, {
                    xtype: 'textfield',
                    name: 'emergencyPhone',
                    flex: 1,
                    margin: '0 0 0 5',
                    inputMask: '(999) 999-9999',
                    required: true
                }]
            }, {
                xtype: 'textfield',
                name: 'company',
                label: 'Company',
                value: 'Dunder Mifflin',
                readOnly: true,
                required: true
            }, {
                xtype: 'selectfield',
                name: 'role',
                label: 'Role',
                options: [
                    { text: 'Regional Manager', value: 'Regional Manager' },
                    { text: 'Assistant Regional Manager', value: 'Assistant Regional Manager' },
                    { text: 'Sales Representative', value: 'Sales Representative' },
                    { text: 'Receptionist', value: 'Receptionist' },
                    { text: 'Senior Accountant', value: 'Senior Accountant' },
                    { text: 'Accountant', value: 'Accountant' },
                    { text: 'Human Resources', value: 'Human Resources' },
                    { text: 'Customer Service', value: 'Customer Service' },
                    { text: 'Quality Assurance', value: 'Quality Assurance' },
                    { text: 'Supplier Relations', value: 'Supplier Relations' },
                    { text: 'Temp', value: 'Temp' }
                ],
                required: true
            }]
        }, {
            xtype: 'fieldset',
            title: 'Address',
            items: [{
                xtype: 'textfield',
                name: 'zipCode',
                label: 'Zip Code',
                inputMask: '99999'
            }, {
                xtype: 'textfield',
                name: 'street',
                label: 'Street'
            }, {
                xtype: 'textfield',
                name: 'houseNumber',
                label: 'House Number'
            }, {
                xtype: 'textfield',
                name: 'district',
                label: 'District'
            }, {
                xtype: 'textfield',
                name: 'country',
                label: 'Country'
            }]
        }],
        buttons: [{
            text: 'Save',
            handler: 'onSaveEmployee'
        }, {
            text: 'Cancel',
            handler: 'onCancelEdit'
        }]
    }, null, {
        items: [{
            xtype: 'toolbar',
            cls: 'toolbar-menu',
            items: [{
                xtype: 'component',
                cls: 'title',
                html: 'Employees Details'
            }, {
                text: 'Save',
                handler: 'onSaveEmployee',
                iconCls: 'x-fa fa-save'
            }, {
                text: 'Cancel',
                handler: 'onCancelEdit',
                iconCls: 'x-fa fa-times'
            }]
        }, {
            xtype: 'fieldset',
            margin: 8,
            layout: {
                type: 'hbox',
                align: 'stretch',
                wrap: true
            },
            defaults: {
                margin: 8,
            },
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                width: 256,
                required: true
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                width: 256,
                required: true
            }, {
                xtype: 'textfield',
                name: 'phoneNumber',
                label: 'Phone Number',
                inputMask: '(999) 999-9999',
                width: 128
            }, {
                xtype: 'selectfield',
                name: 'documentType',
                label: 'Document Type',
                width: 128,
                options: [
                    { text: 'SSN', value: 'SSN' }
                ],
                required: true
            }, {
                xtype: 'textfield',
                name: 'ssn',
                label: 'SSN',
                inputMask: '999-99-9999',
                width: 128,
                required: true,
                validators: {
                    type: 'format',
                    matcher: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
                    message: 'Invalid SSN format (XXX-XX-XXXX)'
                }
            }, {
                xtype: 'containerfield',
                label: 'Emergency Contact',
                layout: 'hbox',
                width: 384,
                items: [{
                    xtype: 'textfield',
                    name: 'emergencyContact',
                    width: 256,
                    required: true
                }, {
                    xtype: 'textfield',
                    name: 'emergencyPhone',
                    width: 128,
                    margin: '0 0 0 5',
                    inputMask: '(999) 999-9999',
                    required: true
                }]
            }, {
                xtype: 'textfield',
                name: 'company',
                label: 'Company',
                value: 'Dunder Mifflin',
                width: 128,
                readOnly: true,
                required: true
            }, {
                xtype: 'selectfield',
                name: 'role',
                label: 'Role',
                width: 256,
                options: [
                    { text: 'Regional Manager', value: 'Regional Manager' },
                    { text: 'Assistant Regional Manager', value: 'Assistant Regional Manager' },
                    { text: 'Sales Representative', value: 'Sales Representative' },
                    { text: 'Receptionist', value: 'Receptionist' },
                    { text: 'Senior Accountant', value: 'Senior Accountant' },
                    { text: 'Accountant', value: 'Accountant' },
                    { text: 'Human Resources', value: 'Human Resources' },
                    { text: 'Customer Service', value: 'Customer Service' },
                    { text: 'Quality Assurance', value: 'Quality Assurance' },
                    { text: 'Supplier Relations', value: 'Supplier Relations' },
                    { text: 'Temp', value: 'Temp' }
                ],
                required: true
            }, {
                xtype: 'textfield',
                name: 'zipCode',
                label: 'Zip Code',
                inputMask: '99999',
                width: 128
            }, {
                xtype: 'textfield',
                name: 'street',
                label: 'Street',
                width: 256
            }, {
                xtype: 'textfield',
                name: 'houseNumber',
                label: 'House Number',
                width: 128
            }, {
                xtype: 'textfield',
                name: 'district',
                label: 'District',
                width: 128
            }, {
                xtype: 'textfield',
                name: 'country',
                label: 'Country',
                width: 128
            }],
        }]
    })
});