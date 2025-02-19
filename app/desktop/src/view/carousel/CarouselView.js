Ext.define('TaskManager.view.carousel.CarouselView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'carousel-view',
    cls: 'carousel-view',
    indicator: false,
    items: [{
        xtype: 'container',
        items: [{
            xtype: 'component',
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-open">
                        <span class="title-text">Abertos</span>
                        <span class="counter">{openTasks.count}</span>
                    </div>`
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
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-inProgress">
                        <span class="title-text">Em Progresso</span>
                        <span class="counter">{inProgressTasks.count}</span>
                    </div>`
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
            cls: 'kanban-column-header',
            bind: {
                html: `
                    <div class="column-title status-closed">
                        <span class="title-text">Fechados</span>
                        <span class="counter">{closedTasks.count}</span>
                    </div>`
            }
        }, {
            xtype: 'kanban-item-view',
            bind: {
                store: '{closedTasks}'
            }
        }]
    }]
});
