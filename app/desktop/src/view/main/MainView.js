Ext.define('TaskManager.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'main-view',
    cls: 'main-view',
    controller: 'main-view',
    layout: 'vbox',
    responsiveFormulas: {
        small: 'width < 600',
        medium: 'width >= 600 && width <= 820',
        large: 'width >= 800'
    },
    items: [{
        //Vou copiar o Ifood
        xtype: 'menu-view'
    }, {
        xtype: 'container',
        flex: 1,
        layout: 'card',
        responsiveConfig: {
            'small || medium': {
                items: [{
                    xtype: 'carousel-container'
                }]
            },
            large: {
                items: [{
                    xtype: 'kanban-view',
                    height: '100%'
                }, {
                    xtype: 'button',
                    cls: 'floating-circle-button',
                    iconCls: 'x-fa fa-plus',
                    handler: 'onAddNewTask'
                }]
            }
        }
    }]
});
