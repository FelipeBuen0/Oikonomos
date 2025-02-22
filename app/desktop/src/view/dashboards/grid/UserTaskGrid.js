Ext.define('TaskManager.view.dashboards.grid.UserTaskGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'user-task-grid',
    height: '100%',
    cls: 'modern-grid',
    striped: true,
    columnMenu: null,
    rowLines: false,
    headerBorder: false,
    title: 'User Tasks',
    bind: {
        store: '{tasks}'
    },
    columns: [{
        text: 'Assigned To',
        dataIndex: 'assignedTo',
        flex: 1,
        cell: {
            encodeHtml: false
        },
        renderer(value, record) {
            const iconMap = {
                'open': 'fa-folder-open',
                'ongoing': 'fa-spinner fa-spin',
                'overdue': 'fa-clock',
                'closed': 'fa-check-circle'
            };
            let status = record.get('status');
            let iconClass = iconMap[record.get('status')] || 'fa-question-circle';
            if (record.get('scheduleTo') < Ext.Date.format(new Date(), 'Y-m-d')) {
                status = 'overdue';
                iconClass = iconMap['overdue'];
            }
            return `<div class="status-${status}">
                        <i class="fas ${iconClass}"></i>
                        <span style="margin-left: 8px">${value}</span>
                    </div>`;
        }
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1,
        cell: {
            encodeHtml: false   
        },
        renderer(value, record) {
            return `<div>
                        <span class="priority priority-${record.get('priority')}" style="display: inline-block"></span>
                        <span style="display: inline-block">&nbsp;${value}</span>
                    </div>`;
        }
    }]
});