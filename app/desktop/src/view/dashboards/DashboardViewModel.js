// filepath: /d:/git/personal/sencha_projects/task-manager/app/desktop/src/view/dashboards/DashboardViewModel.js
Ext.define('TaskManager.view.dashboards.DashboardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard-view',

    stores: {
        tasks: {
            type: 'taskstore'
        },
        openTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'open'
            }]
        },
        ongoingTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'ongoing'
            }]
        },
        closedTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'closed'
            }]
        },
        overdueTasks: {
            source: '{tasks}',
            filters: [{
                property: 'scheduleTo',
                operator: '<',
                value: Ext.Date.format(new Date(), 'Y-m-d')
            }]
        }
    }
});