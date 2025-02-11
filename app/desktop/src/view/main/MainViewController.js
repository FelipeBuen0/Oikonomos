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

    // Handlers para cada item do menu
    onShowKanban() {
        this.switchView('kanban-view');
    },

    onShowPendingTasks() {
        this.switchView('kanban-view');
    },

    onShowCompletedTasks() {
        this.switchView('completed-tasks-view');
    },

    onShowEmployees() {
        this.switchView('employees-view');
    },

    // Método central para troca de views
    switchView(viewXtype) {
        const container = this.getView().down('container[layout=card]');
        const view = container.down(viewXtype);
        
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