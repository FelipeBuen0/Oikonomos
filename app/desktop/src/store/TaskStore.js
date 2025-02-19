Ext.define('TaskManager.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    
    fields: ['id', 'title', 'description', 'status', 'priority'],
    
    data: [{
        id: 1,
        title: 'Implement login', 
        description: 'Implement authentication system', 
        priority: '3', 
        status: 'open' 
    }, {
        id: 2, 
        title: 'Create documentation', 
        description: 'Document all features', 
        priority: '2', 
        status: 'closed' 
    }, { 
        id: 3, 
        title: 'Fix bugs', 
        description: 'Resolve reported bugs', 
        priority: '1', 
        status: 'closed' 
    }, { 
        id: 4, 
        title: 'Review code', 
        description: 'Review code from other developers', 
        priority: '2', 
        status: 'open' 
    }, { 
        id: 5, 
        title: 'Update dependencies', 
        description: 'Update libraries and dependencies', 
        priority: '3', 
        status: 'open' 
    }, { 
        id: 6, 
        title: 'Test features', 
        description: 'Write unit tests', 
        priority: '1', 
        status: 'open' 
    }, { 
        id: 7, 
        title: 'Refactor code', 
        description: 'Improve code structure', 
        priority: '2', 
        status: 'open' 
    }, { 
        id: 8, 
        title: 'Plan sprint', 
        description: 'Plan tasks for the next sprint', 
        priority: '3', 
        status: 'open' 
    }, { 
        id: 9, 
        title: 'Configure CI/CD', 
        description: 'Configure continuous integration', 
        priority: '1', 
        status: 'open' 
    }, { 
        id: 10, 
        title: 'Deploy', 
        description: 'Deploy to production', 
        priority: '2', 
        status: 'open' 
    }, { 
        id: 11, 
        title: 'Monitor system', 
        description: 'Monitor system performance', 
        priority: '3', 
        status: 'open' 
    }, { 
        id: 12, 
        title: 'Analyze logs', 
        description: 'Analyze error logs', 
        priority: '1', 
        status: 'open' 
    }, { 
        id: 13, 
        title: 'Create integration tests', 
        description: 'Write integration tests', 
        priority: '2', 
        status: 'in_progress' 
    }, { 
        id: 14, 
        title: 'Implement cache', 
        description: 'Add cache to improve performance', 
        priority: '3', 
        status: 'in_progress' 
    }, { 
        id: 15, 
        title: 'Improve UI', 
        description: 'Enhance user interface', 
        priority: '1', 
        status: 'in_progress' 
    }, { 
        id: 16, 
        title: 'Optimize queries', 
        description: 'Optimize database queries', 
        priority: '2', 
        status: 'in_progress' 
    }, { 
        id: 17, 
        title: 'Configure development environment', 
        description: 'Set up local environment', 
        priority: '3', 
        status: 'in_progress' 
    }, { 
        id: 18, 
        title: 'Write API documentation', 
        description: 'Document API endpoints', 
        priority: '1', 
        status: 'in_progress' 
    }, { 
        id: 19, 
        title: 'Implement OAuth authentication', 
        description: 'Add OAuth support', 
        priority: '2', 
        status: 'in_progress' 
    }, { 
        id: 20, 
        title: 'Perform load tests', 
        description: 'Test system under load', 
        priority: '3', 
        status: 'in_progress' 
    }, { 
        id: 21, 
        title: 'Configure backups', 
        description: 'Set up automatic backups', 
        priority: '1', 
        status: 'in_progress' 
    }, { 
        id: 22, 
        title: 'Review security', 
        description: 'Review system security', 
        priority: '2', 
        status: 'closed' 
    }, { 
        id: 23, 
        title: 'Improve documentation', 
        description: 'Enhance existing documentation', 
        priority: '3', 
        status: 'in_progress' 
    }, { 
        id: 24, 
        title: 'Implement logging', 
        description: 'Add logging to the system', 
        priority: '1', 
        status: 'closed' 
    }, { 
        id: 25, 
        title: 'Fix vulnerabilities', 
        description: 'Resolve security vulnerabilities', 
        priority: '2', 
        status: 'closed' 
    }, { 
        id: 26, 
        title: 'Update operating system', 
        description: 'Update server OS', 
        priority: '3', 
        status: 'closed' 
    }, { 
        id: 27, 
        title: 'Migrate database', 
        description: 'Migrate database to new version', 
        priority: '1', 
        status: 'closed' 
    }, { 
        id: 28, 
        title: 'Deactivate obsolete features', 
        description: 'Remove unused features', 
        priority: '2', 
        status: 'closed' 
    }, { 
        id: 29, 
        title: 'Perform audit', 
        description: 'Audit code and processes', 
        priority: '3', 
        status: 'closed' 
    }, { 
        id: 30, 
        title: 'Implement new metrics', 
        description: 'Add new monitoring metrics', 
        priority: '1', 
        status: 'closed' 
    }]
});
