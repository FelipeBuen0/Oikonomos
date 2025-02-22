Ext.define('TaskManager.view.dashboards.DashboardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-view',

    init: function() {
        // Initial setup when the view is created
        this.loadTasks();
    },

    loadTasks: function() {
        // Get the ViewModel
        var viewModel = this.getViewModel();
        
        // Load the tasks store
        var store = viewModel.getStore('tasks');
        if (store) {
            store.load({
                callback: function(records, operation, success) {
                    if (success) {
                        this.updateTaskCounts();
                    }
                },
                scope: this
            });
        }
    },

    updateTaskCounts: function() {
        var store = this.getViewModel().getStore('tasks');
        var viewModel = this.getViewModel();

        if (store) {
            // Count tasks by status
            var openCount = store.queryBy(function(record) {
                return record.get('status') === 'Open';
            }).getCount();

            var ongoingCount = store.queryBy(function(record) {
                return record.get('status') === 'Ongoing';
            }).getCount();

            var closedCount = store.queryBy(function(record) {
                return record.get('status') === 'Closed';
            }).getCount();

            // Update the ViewModel data
            viewModel.set({
                openTasksCount: openCount,
                ongoingTasksCount: ongoingCount,
                closedTasksCount: closedCount
            });
        }
    },

    onStoreDataChanged: function() {
        // Update counts when store data changes
        this.updateTaskCounts();
    }
});