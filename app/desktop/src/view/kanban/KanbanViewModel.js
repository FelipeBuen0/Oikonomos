Ext.define('TaskManager.view.kanban.KanbanViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.kanban-view',
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
        inProgressTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'in_progress'
            }]
        },
        closedTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'closed'
            }]
        }
    },

    formulas: {
        openTasksCount: {
            bind: '{openTasks}',
            get: function(store) {
                return store ? store.getCount() : 0;
            }
        },
        inProgressTasksCount: {
            bind: '{inProgressTasks}',
            get: function(store) {
                return store ? store.getCount() : 0;
            }
        },
        closedTasksCount: {
            bind: '{closedTasks}',
            get: function(store) {
                return store ? store.getCount() : 0;
            }
        }
    }
});
