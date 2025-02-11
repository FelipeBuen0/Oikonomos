Ext.define('TaskManager.view.kanban.items.ItemView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'kanban-item-view',

    cls: 'kanban-items',
    scrollable: true,
    itemSelector: '.kanban-item',
    selectOnFocus: true,
    
    itemTpl: `
        <div class="kanban-item status-{status}">
            <div class="status-bar"></div>
            <div class="content">
                <div class="header">
                    <div class="title">{title}</div>
                    <div class="priority priority-{priority}" data-qtip="Prioridade: {[this.getPriorityLabel(values.priority)]}"></div>
                </div>
                <div class="description">{description}</div>
                <div class="footer">
                    <div class="date">{[Ext.Date.format(values.scheduleTo, 'd/m/Y') || '']}</div>
                </div>
            </div>
        </div>
    `,

    listeners: {
        itemdblclick: 'onItemDblClick',
        itemtap: 'onItemTap'
    },

    initComponent: function() {
        this.tpl = new Ext.XTemplate(this.itemTpl, {
            getPriorityLabel: function(priority) {
                return {
                    '1': 'Baixa',
                    '2': 'Média',
                    '3': 'Alta'
                }[priority] || 'Não definida';
            }
        });
        this.callParent();
    }
});
