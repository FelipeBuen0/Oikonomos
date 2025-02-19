Ext.define('TaskManager.view.carousel.CarouselContainer', {
    extend: 'Ext.Container',
    xtype: 'carousel-container',
    controller: 'carousel-container',
    viewModel: 'carousel-container',
    cls: 'carousel-container',
    layout: 'fit',
    items: [{
        xtype: 'carousel-view'
    }, {
        xtype: 'button',
        cls: 'floating-circle-button',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddNewTask'
    }]
});