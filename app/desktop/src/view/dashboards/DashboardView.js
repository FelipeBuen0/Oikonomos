Ext.define('TaskManager.view.dashboards.DashboardView', {
    extend: 'Ext.Container',
    xtype: 'dashboard-view',
    controller: 'dashboard-view',
    viewModel: 'dashboard-view',
    cls: 'dashboard-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    responsiveConfig: {
        'small || medium': {
            items: [{
                xtype: 'component',
                cls: 'status-overdue dashboard-column',
                bind: {
                    html: `
                        <div class="dashboard-title status-overdue">
                            <div class="dashboard-text">Overdue Tasks</div>
                            <div class="dashboard-counter">{overdueTasks.count}</div>
                        </div>
                    `
                }
            }, {
                xtype: 'user-task-view',
                bind: {
                    store: '{overdueTasks}'
                },
                margin: 16
            }, {
                xtype: 'component',
                cls: 'status-open dashboard-column',
                bind: {
                    html: `
                        <div class="dashboard-title status-open">
                            <div class="dashboard-text">Open Tasks</div>
                            <div class="dashboard-counter">{openTasks.count}</div>
                        </div>
                    `
                }
            }, {
                xtype: 'user-task-view',
                bind: {
                    store: '{openTasks}'
                },
                margin: 16
            }]
        },
        large: {
            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    margin: 8,
                    flex: 1,
                },
                flex: 1,
                items: [{
                    xtype: 'user-task-grid'
                }, {
                    xtype: 'overdue-task-grid'
                }]
            }]
        }
    }
});