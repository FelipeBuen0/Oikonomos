Ext.define('TaskManager.view.kanban.KanbanView', {
    extend: 'Ext.Container',
    xtype: 'kanban-view',    
    requires: [
        'TaskManager.store.TaskStore',
        'TaskManager.view.kanban.KanbanViewModel'
    ],
    viewModel: 'kanban-view',
    cls: 'kanban-view',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        flex: 1,
        margin: '0 8 0 0',
        items: [{
            xtype: 'component',
            margin: 16,
            cls: ' kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-open">
                        <span class="title-text">Abertos</span>
                        <span class="counter">{openTasksCount}</span>
                    </div>
                `
            }
        }, {
            xtype: 'kanban-item-view',
            bind: {
                store: '{openTasks}'
            }
        }]
    }, {
        xtype: 'container',
        flex: 1,
        margin: '0 8 0 0',
        items: [{
            xtype: 'component',
            margin: 16,
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-inProgress">
                        <span class="title-text">Em Progresso</span>
                        <span class="counter">{inProgressTasksCount}</span>
                    </div>
                `
            }
        }, {
            xtype: 'kanban-item-view',
            bind: {
                store: '{inProgressTasks}'
            }
        }]
    }, {
        xtype: 'container',
        flex: 1,
        items: [{
            xtype: 'component',
            margin: 16,
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-closed">
                        <span class="title-text">Closed</span>
                        <span class="counter">{closedTasksCount}</span>
                    </div>
                `
            }
        }, {
            xtype: 'kanban-item-view',
            bind: {
                store: '{closedTasks}'
            }
        }]
    }]
});
