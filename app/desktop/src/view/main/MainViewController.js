Ext.define('TaskManager.controller.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',
    privates: {
        _responsiveMode: 'large'
    },
    onFocusLeave (menu) {
        if (!menu.collapsed) {
            menu.close();
        }
    },
    getResponsiveMode() {
        return this._responsiveMode;
    },
    setResponsiveMode (value) {
        this._responsiveMode = value;
    },
    onResize (container) {
        const me = this;
        const context = Ext.mixin.Responsive.context;
        const formulas = container.getResponsiveFormulas();
        if (formulas.small(context)) {
            me.setResponsiveMode('small');
        } else if (formulas.medium(context)) {
            me.setResponsiveMode('medium');
        } else if (formulas.large(context)) {
            me.setResponsiveMode('large');
        }
    },

    toggleMenu (button) {
        var menu = Ext.create('TaskManager.view.menu.MenuView');
        menu.showBy(button, 'tr-br');
    },
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
    },
    onAddNewTask () {
        const me = this;
        const viewModel = me.getViewModel();
        Ext.create({
            xtype: 'ticket-dialog',
            viewModel: {
                parent : viewModel
            }
        }).show();
    }
});