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
    setResponsiveMode (context, formulas) {
        if (formulas.small(context)) {
            this._responsiveMode = 'small';
        } else if (formulas.medium(context)) {
            this._responsiveMode = 'medium';
        } else if (formulas.large(context)) {
            this._responsiveMode = 'large';
        }
    },
    onResize (container) {
        const me = this;
        const context = Ext.mixin.Responsive.context;
        const formulas = container.getResponsiveFormulas();
        me.setResponsiveMode(context, formulas);
    },
    
    toggleMenu (button) {
        var menu = Ext.create('TaskManager.view.menu.MenuView');
        menu.showBy(button, 'tr-br');
    },
    onShowDashboard() {
        this.switchView('dashboard-view');
    },
    onShowKanban() {
        const me = this;
        if (me.getResponsiveMode() !== "large") {
            this.switchView('carousel-container');
            return;
        }
        this.switchView('kanban-view');
    },
    onShowEmployees() {
        this.switchView('employee-view');
    },
    switchView(viewXtype) {
        const container = this.lookup('cardContainer');
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