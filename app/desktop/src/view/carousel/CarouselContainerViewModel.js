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
        inProgressTasks: {
            source: '{tasks}',
            filters: [{
                property: 'status',
                value: 'in_progress'
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
