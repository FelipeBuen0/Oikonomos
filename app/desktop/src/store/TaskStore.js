Ext.define('TaskManager.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    
    fields: ['id', 'title', 'description', 'status', 'priority'],
    
    data: [{ 
        id: 1,
        title: 'Implementar login',
        description: 'Implementar sistema de autenticação',
        priority: '3',
        status: 'open'
    }, {
        id: 2,
        title: 'Criar documentação',
        description: 'Documentar todas as funcionalidades',
        priority: '2',
        status: 'in_progress'
    }, {
        id: 3,
        title: 'Corrigir bugs',
        description: 'Resolver bugs reportados',
        priority: '1',
        status: 'closed'
    }]
});
