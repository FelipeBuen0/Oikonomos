Ext.define('TaskManager.view.carousel.CarouselView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'carousel-view',
    requires: [
        'TaskManager.store.TaskStore',
        'TaskManager.view.kanban.KanbanViewModel'
    ],
    viewModel: 'kanban-view',
    cls: 'carousel-view',
    
    items: [{
        xtype: 'container',
        items: [{
            xtype: 'component',
            margin: 16,
            cls: 'kanban-column-header',
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
        items: [{
            xtype: 'component',
            margin: 16,
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-closed">
                        <span class="title-text">Fechados</span>
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
