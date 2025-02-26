Ext.define('TaskManager.view.carousel.CarouselContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.carousel-container',
    initViewModel (vm) {
        debugger
    },
    onAddNewTask () {
        const me = this;
        const viewModel = me.getViewModel();
        TicketsManager.createNewTicket(viewModel);
    }
});
