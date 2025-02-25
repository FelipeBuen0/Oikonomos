Ext.define('TaskManager.view.dashboards.dataview.UserTaskView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'user-task-view',
    cls: 'user-task-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: '100%',
    flex: 1,
    scrollable: true,
    bind: {
        store: '{overdueTasks}'
    },
    itemTpl: new Ext.XTemplate(`
        <div class="task-item">
            <div class="task-header">
                <div class="task-status">
                    <i class="status-{[this.getStatus(values)]} fas {[this.getIcon(values)]}"></i>
                </div>
                <div class="task-assignee">{assignedTo}</div>
            </div>
            <div class="task-title">{title}</div>
        </div>
    `, {
        getStatus: function(values) {
            if (values.scheduleTo < Ext.Date.format(new Date(), 'Y-m-d')) {
                return 'overdue';
            }
            return values.status;
        },
        getIcon: function(values) {
            const iconMap = {
                'open': 'fa-folder-open',
                'ongoing': 'fa-spinner fa-spin',
                'overdue': 'fa-clock',
                'closed': 'fa-check-circle'
            };
            if (values.scheduleTo < Ext.Date.format(new Date(), 'Y-m-d')) {
                return iconMap['overdue'];
            }
            return iconMap[values.status] || 'fa-question-circle';
        }
    }),

    itemCls: 'task-dataview-item'
});
