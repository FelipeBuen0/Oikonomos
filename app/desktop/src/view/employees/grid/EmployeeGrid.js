Ext.define('TaskManager.view.employees.grid.EmployeeGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'employee-grid',
    cls: 'alter-grid',
    striped: true,

    requires: [
        'Ext.grid.column.Template'
    ],

    responsiveConfig: ViewportUtil.applyResponsive({
        // Phone configuration
        listeners: {
            childdoubletap: 'onChildDoubleTapSelect'
        },
        margin: 0,
        columns: [{
            xtype: 'templatecolumn',
            text: 'Details',
            flex: 1,
            cell: {
                cls: 'employee-condensed-cell',
                encodeHtml: false
            },
            tpl: `
                <div class="employee-card">
                    <div class="employee-header">
                        <div class="employee-name">{name}</div>
                        <div class="employee-role">{role}</div>
                    </div>
                    <div class="employee-details">
                        <div class="detail-row">
                            <i class="fas fa-envelope"></i>
                            <span>{email}</span>
                        </div>
                        <div class="detail-row">
                            <i class="fas fa-phone"></i>
                            <span>{phoneNumber}</span>
                        </div>
                        <div class="detail-row">
                            <i class="fas fa-building"></i>
                            <span>{company}</span>
                        </div>
                    </div>
                </div>
            `
        }]
    }, null, {
        // Desktop/Tablet configuration
        listeners: {
            select: 'onEmployeeSelect'
        },
        columns: [{ 
            text: 'Name', 
            dataIndex: 'name', 
            flex: 1 
        }, { 
            text: 'Email', 
            dataIndex: 'email', 
            flex: 1 
        }, { 
            text: 'Phone', 
            dataIndex: 'phoneNumber', 
            flex: 1 
        }, { 
            text: 'Role', 
            dataIndex: 'role', 
            flex: 1 
        }, { 
            text: 'Company', 
            dataIndex: 'company', 
            flex: 1 
        }]
    })
});