Ext.define('TaskManager.view.employees.forms.EmployeeForm', {
    extend: 'Ext.form.Panel',
    xtype: 'employee-form',
    controller: 'employee-form',
    // title: 'Employee Details',
    padding: 8,
    scrollable: true,
    reference: 'employeeForm',
    
    /* Section 2.1: ResponsiveConfig Implementation
     * Demonstrates viewport-based configuration using ViewportUtil
     */
    responsiveConfig: ViewportUtil.applyResponsive({
        // Mobile Configuration (width < 641px)
        // Section 5.1: Layout Switching - Single column layout for mobile
        items: [{
            xtype: 'toolbar',
            cls: 'toolbar-menu',
            items: [{
                xtype: 'button',
                iconCls: 'x-fa fa-arrow-left',
                handler: 'onBackButton'
            }, {
                xtype: 'component',
                cls: 'title',
                html: 'Employees Details'
            }]
        }, {
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                bind: {
                    value: '{record.name}'
                },
                required: true
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                bind: {
                    value: '{record.email}'
                },
                required: true
            }, {
                xtype: 'textfield',
                name: 'phoneNumber',
                label: 'Phone Number',
                inputMask: '(999) 999-9999',
                bind: {
                    value: '{record.phoneNumber}'
                }
            }, {
                xtype: 'selectfield',
                name: 'documentType',
                label: 'Document Type',
                options: [
                    { text: 'SSN', value: 'SSN' }
                ],
                bind: {
                    value: '{record.documentType}'
                },
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
                },
                bind: {
                    value: '{record.ssn}'
                }
            }, {
                xtype: 'containerfield',
                label: 'Emergency Contact',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    name: 'emergencyContact',
                    flex: 1,
                    bind: {
                        value: '{record.emergencyContact}'
                    },
                    required: true
                }, {
                    xtype: 'textfield',
                    name: 'emergencyPhone',
                    flex: 1,
                    bind: {
                        value: '{record.emergencyPhone}'
                    },
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
                xtype: 'combobox',
                name: 'role',
                label: 'Role',
                valueField: 'value',
                displayField: 'text',
                bind: {
                    store: '{roles}',
                    value: '{record.role}'
                },
                required: true
            }, {
                xtype: 'textfield',
                name: 'zipCode',
                label: 'Zip Code',
                inputMask: '99999',
                valueField: 'value',
                displayField: 'text',
                bind: {
                    value: '{record.zipCode}'
                }
            }, {
                xtype: 'textfield',
                name: 'street',
                label: 'Street',
                bind: {
                    value: '{record.street}'
                }
            }, {
                xtype: 'textfield',
                name: 'houseNumber',
                label: 'House Number',
                bind: {
                    value: '{record.houseNumber}'
                }
            }, {
                xtype: 'textfield',
                name: 'district',
                label: 'District',
                bind: {
                    value: '{record.district}'
                }
            }, {
                xtype: 'textfield',
                name: 'country',
                label: 'Country',
                bind: {
                    value: '{record.country}'
                }
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
        // Desktop Configuration (width >= 1007px)
        // Section 5.1: Layout Switching - Multi-column layout for desktop
        // Section 4.3: Employee Management - Responsive form layout example
        items: [{
            // Section 5.2: Component Adaptation - Toolbar transformation
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
            // Section 5.2: Component Adaptation - Field arrangements
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
                // Section 4.3: Mobile-friendly data entry - Optimized field widths
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                width: 256,
                bind: {
                    value: '{record.name}'
                },
                required: true
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                width: 256,
                bind: {
                    value: '{record.email}'
                },
                required: true
            }, {
                xtype: 'textfield',
                name: 'phoneNumber',
                label: 'Phone Number',
                inputMask: '(999) 999-9999',
                bind: {
                    value: '{record.phoneNumber}'
                },
                width: 128
            }, {
                xtype: 'selectfield',
                name: 'documentType',
                label: 'Document Type',
                width: 128,
                options: [
                    { text: 'SSN', value: 'SSN' }
                ],
                bind: {
                    value: '{record.documentType}'
                },
                required: true
            }, {
                xtype: 'textfield',
                name: 'ssn',
                label: 'SSN',
                inputMask: '999-99-9999',
                bind: {
                    value: '{record.ssn}'
                },
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
                    bind: {
                        value: '{record.emergencyContact}'
                    },
                    width: 256,
                    required: true
                }, {
                    xtype: 'textfield',
                    name: 'emergencyPhone',
                    margin: '0 0 0 5',
                    inputMask: '(999) 999-9999',
                    bind: {
                        value: '{record.emergencyPhone}'
                    },
                    width: 128,
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
                xtype: 'combobox',
                name: 'role',
                label: 'Role',
                width: 256,
                valueField: 'value',
                displayField: 'text',
                bind: {
                    store: '{roles}',
                    value: '{record.role}'
                },
                required: true
            }, {
                xtype: 'textfield',
                name: 'zipCode',
                label: 'Zip Code',
                inputMask: '99999',
                bind: {
                    value: '{record.zipCode}'
                },
                width: 128
            }, {
                xtype: 'textfield',
                name: 'street',
                label: 'Street',
                bind: {
                    value: '{record.street}'
                },
                width: 256
            }, {
                xtype: 'textfield',
                name: 'houseNumber',
                label: 'House Number',
                bind: {
                    value: '{record.houseNumber}'
                },
                width: 128
            }, {
                xtype: 'textfield',
                name: 'district',
                label: 'District',
                bind: {
                    value: '{record.district}'
                },
                width: 128
            }, {
                xtype: 'textfield',
                name: 'country',
                label: 'Country',
                bind: {
                    value: '{record.country}'
                },
                width: 128
            }],
        }]
    })
});