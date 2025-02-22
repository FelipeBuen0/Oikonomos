Ext.define('TaskManager.view.dashboards.grid.OverdueTaskGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'overdue-task-grid',
    height: '100%',
    cls: 'modern-grid',
    striped: true,
    columnMenu: null,
    rowLines: false,
    headerBorder: false,
    title: 'Overdue Tasks',
    bind: {
        store: '{overdueTasks}'
    },

    columns: [{
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
    }, {
        text: 'Schedule To',
        dataIndex: 'scheduleTo',
        flex: 1,
        cell: {
            encodeHtml: false
        },
        renderer(value) {
            return `<div class="status-overdue">
                        <i class="fas fa-clock"></i>
                        <span style="margin-left: 8px">${value}</span>
                    </div>`;
        }
    }]
});
