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
        large: {
            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    xtype: 'component',
                    cls: 'dashboard-column',
                    flex: 1,
                    margin: 8
                },
                items: [{
                    xtype: 'component',
                    cls: 'status-open',
                    bind: {
                        html: `
                            <div class="column-title status-open">
                                <div class="dashboard-text">Open Tasks</div>
                                <div class="dashboard-counter">{openTasks.count}</div>
                            </div>
                        `
                    }
                }, {
                    xtype: 'component',
                    cls: 'status-ongoing',
                    bind: {
                        html: `
                            <div class="column-title status-ongoing">
                                <div class="dashboard-text">Ongoing Tasks</div>
                                <div class="dashboard-counter">{ongoingTasks.count}</div>
                            </div>
                        `
                    }
                }, {
                    xtype: 'component',
                    cls: 'status-closed',
                    bind: {
                        html: `
                            <div class="column-title status-closed">
                                <div class="dashboard-text">Closed Tasks</div>
                                <div class="dashboard-counter">{closedTasks.count}</div>
                            </div>
                        `
                    }
                }, {
                    xtype: 'component',
                    cls: 'status-overdued',
                    bind: {
                        html: `
                            <div class="column-title status-overdue">
                                <div class="dashboard-text">Overdue Tasks</div>
                                <div class="dashboard-counter">{overdueTasks.count}</div>
                            </div>
                        `
                    }
                }]
            }, {
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