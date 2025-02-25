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
            defaults: {
                xtype: 'component',
                cls: 'dashboard-column',
                margin: 16
            },
            items: [{
                cls: 'status-overdue',
                bind: {
                    html: `
                        <div class="dashboard-title status-overdue">
                            <div class="dashboard-text">Overdue Tasks</div>
                            <div class="dashboard-counter">{overdueTasks.count}</div>
                        </div>
                    `
                }
            }, {
                xtype: 'user-task-view'
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