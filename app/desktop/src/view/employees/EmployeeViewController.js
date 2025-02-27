Ext.define('TaskManager.view.employees.EmployeeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-view',

    /* Section 4.3: Employee Management - Touch-friendly interactions
     * Handles both click and tap events for cross-device compatibility
     */
    onEmployeeChildTap (grid, selected) {
        const me = this;
        me.getViewModel().set('record', selected.get('record').getRecord());
    },
    onAddEmployee () {
        const me = this;
        me.getViewModel().set('record', null);
        me.goToForm();
    },
    onEditEmployee() {
        this.goToForm();
    },
    /* Section 5.1: Layout Switching
     * Navigation between grid and form views
     */
    goToForm() {
        const me = this;
        const view = me.getView();
        view.setActiveItem(1);
    }
});
