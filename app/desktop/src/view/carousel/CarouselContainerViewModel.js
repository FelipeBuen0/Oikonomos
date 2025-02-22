Ext.define('TaskManager.view.carousel.CarouselContainerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.carousel-container',

    stores: {
        tasks: {
            type: 'taskstore'
        },
        openTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'open'
            }]
        },
        ongoingTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'ongoing'
            }]
        },
        closedTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'closed'
            }]
        }
    }
});
