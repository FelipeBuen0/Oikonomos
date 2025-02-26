Ext.define('TaskManager.view.dashboards.grid.UserTaskGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'user-task-grid',
    height: '100%',
    cls: 'alter-grid',
    striped: true,
    columnMenu: null,
    rowLines: false,
    headerBorder: false,
    title: 'User Tasks',
    bind: {
        store: '{openTasks}'
    },
    columns: [{
        text: 'Assigned To',
        dataIndex: 'assignedTo',
        flex: 1,
        cell: {
            encodeHtml: false
        },
        renderer (value) {
            return `<div>
                        <i class="status-open fas fa-folder-open"></i>
                        <span style="margin-left: 8px">${value}</span>
                    </div>`;
        }
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }]
});