Ext.define('TaskManager.view.kanban.items.ItemView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'kanban-item-view',
    itemSelector: '.kanban-item',
    cls: 'kanban-items',
    scrollable: true,
    selectOnFocus: true,
    itemTpl: `
        <div class="kanban-item status-{status}">
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
