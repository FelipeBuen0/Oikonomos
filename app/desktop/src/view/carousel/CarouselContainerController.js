Ext.define('TaskManager.view.carousel.CarouselContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.carousel-container',
    onAddNewTask() {
        console.log('Insertion of a new task...');
        // TicketsManager.insertTicket({
        //     title: 'New Task',
        //     description: 'Description of the new task',
        //     status: 'open',
        //     priority: '3',
        //     scheduleTo: new Date() + 30
        // }, this.getViewModel().getStore('tasks'));
    }
    
});
