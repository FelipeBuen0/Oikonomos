Ext.define('TaskManager.view.carousel.CarouselView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'carousel-view',
    cls: 'carousel-view',
    indicator: false,
    items: [{
        xtype: 'container',
        items: [{
            xtype: 'component',
            cls: 'carousel-column-header',
            bind: {
                html: `
                    <div class="column-title status-open">
                        <span class="title-text">Open</span>
                        <span class="counter">{openTasks.count}</span>
                    </div>`
            }
        }, {
            xtype: 'carousel-item-view',
            bind: {
                store: '{openTasks}'
            }
        }]
    }, {
        xtype: 'container',
        items: [{
            xtype: 'component',
            cls: 'carousel-column-header',
            bind: {
                html: `
                    <div class="column-title status-ongoing">
                        <span class="title-text">Ongoing</span>
                        <span class="counter">{ongoingTasks.count}</span>
                    </div>`
            }
        }, {
            xtype: 'carousel-item-view',
            bind: {
                store: '{ongoingTasks}'
            }
        }]
    }, {
        xtype: 'container',
        items: [{
            xtype: 'component',
            cls: 'carousel-column-header',
            bind: {
                html: `
                    <div class="column-title status-closed">
                        <span class="title-text">Closed</span>
                        <span class="counter">{closedTasks.count}</span>
                    </div>`
            }
        }, {
            xtype: 'carousel-item-view',
            bind: {
                store: '{closedTasks}'
            }
        }]
    }]
});
