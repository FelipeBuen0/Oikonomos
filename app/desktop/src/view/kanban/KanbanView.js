Ext.define('TaskManager.view.kanban.KanbanView', {
    extend: 'Ext.Container',
    xtype: 'kanban-view',
    controller: 'kanban-view',
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
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-open">
                        <span class="title-text">Open</span>
                        <span class="counter">{openTasks.count}</span>
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
                    <div class="column-title status-ongoing">
                        <span class="title-text">Ongoing</span>
                        <span class="counter">{ongoingTasks.count}</span>
                    </div>
                `
            }
        }, {
            xtype: 'kanban-item-view',
            bind: {
                store: '{ongoingTasks}'
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
                        <span class="counter">{closedTasks.count}</span>
                    </div>
                `
            }
        }, {
            xtype: 'kanban-item-view',
            bind: {
                store: '{closedTasks}'
            }
        }]
    }, {
        xtype: 'button',
        ui: 'round flat',
        cls: 'floating-circle-button',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddNewTask'
    }]
});
