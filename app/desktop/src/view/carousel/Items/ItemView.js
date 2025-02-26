Ext.define('TaskManager.view.carousel.items.ItemView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'carousel-item-view',
    itemSelector: '.carousel-item',
    cls: 'carousel-items',
    scrollable: true,
    selectOnFocus: true,
    itemTpl: `
        <div class="carousel-item status-{status}">
            <div class="status-bar"></div>
            <div class="content">
                <div class="header">
                    <div class="title">{title}</div>
                    <div class="priority priority-{priority}"></div>
                </div>
                <div class="description">{description}</div>
                <div class="footer">
                    <div class="date">{scheduleTo:date}</div>
                </div>
            </div>
        </div>
    `,
    listeners: {
        itemtap: 'onItemTap'
    }
});
