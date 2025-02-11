Ext.define('TaskManager.Application', {
    extend: 'Ext.app.Application',
    name: 'TaskManager',
    requires: [
        'TaskManager.*',
        'Ext.field.*',
        'Ext.list.Tree',
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.Dialog',
        'Ext.form.Panel',
        'Ext.data.TreeStore',
        'Ext.field.InputMask',
        'Ext.data.validator.Length',
        'Ext.field.Number',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Editable',
        'Ext.grid.rowedit.Plugin',
        'Ext.carousel.Carousel',
        'Ext.data.summary.Average',
        'Ext.data.summary.Max',
        'Ext.grid.plugin.SummaryRow',
        'Ext.field.Display',
        'Ext.Responsive'
    ],
    defaultToken: 'home',
    launch () {
        const currentView = Ext.Viewport.add({
            xtype: 'main-view'
        });
        Ext.Viewport.setActiveItem(currentView);
    },
    
    onAppUpdate () {
        Ext.Msg.confirm('Atualização de aplicação',
            'A aplicação possui uma atualização, deseja atualizar agora?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    
});
