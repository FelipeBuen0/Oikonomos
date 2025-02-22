Ext.define('TaskManager.view.carousel.CarouselContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.carousel-container',
    onAddNewTask () {
        const me = this;
        const viewModel = me.getViewModel();
        TicketsManager.createNewTicket(viewModel, {
            height: '100%',
            maximizable: false,
            fullscreen: true,
            modal: true
        });
    }
});
