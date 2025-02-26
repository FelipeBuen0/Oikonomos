Ext.define('TaskManager.controller.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',
    onFocusLeave (menu) {
        if (!menu.collapsed) {
            menu.close();
        }
    },
    
    toggleMenu (button) {
        var menu = Ext.create('TaskManager.view.menu.MenuView');
        menu.showBy(button, 'tr-br');
    },
    onShowDashboard() {
        this.switchView('dashboard-view');
    },
    onShowTicketView() {
        this.switchView('ticket-view');
    },
    onShowEmployees() {
        this.switchView('employee-view');
    },
    switchView(viewXtype) {
        const container = this.lookup('cardContainer');
        const view = container.down(viewXtype);
        debugger
        if (view) {
            container.setActiveItem(view);
        } else {
            const newView = container.add({
                xtype: viewXtype
            });
            container.setActiveItem(newView);
        }
    }
});