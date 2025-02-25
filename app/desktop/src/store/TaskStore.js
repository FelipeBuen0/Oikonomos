Ext.define('TaskManager.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    
    fields: ['id', 'title', 'description', 'assignedTo', 'scheduleTo', 'status', 'priority'],
    
    data: [{
        id: 1,
        title: 'Implement login', 
        description: 'Implement authentication system', 
        assignedTo: 'John Smith',
        priority: '3', 
        status: 'open',
        scheduleTo: '2025-01-15'
    }, {
        id: 2, 
        title: 'Create documentation', 
        description: 'Document all features', 
        assignedTo: 'Jane Doe',
        priority: '2', 
        status: 'closed',
        scheduleTo: '2025-10-15'
    }, {
        id: 3,
        title: 'Update UI design',
        description: 'Modernize user interface components',
        assignedTo: 'Mike Johnson',
        priority: '1',
        status: 'ongoing',
        scheduleTo: '2025-01-20'
    }, {
        id: 4,
        title: 'Fix performance issues',
        description: 'Optimize database queries and front-end rendering',
        assignedTo: 'Sarah Wilson',
        priority: '3',
        status: 'open',
        scheduleTo: '2025-01-28'
    }, {
        id: 5,
        title: 'Add export functionality',
        description: 'Implement data export to PDF and Excel',
        assignedTo: 'John Smith',
        priority: '2',
        status: 'ongoing',
        scheduleTo: '2025-04-10'
    }, {
        id: 6,
        title: 'Implement user roles',
        description: 'Add role-based access control system',
        assignedTo: 'Mike Johnson',
        priority: '1',
        status: 'ongoing',
        scheduleTo: '2025-05-15'
    }, {
        id: 7,
        title: 'Database backup system',
        description: 'Create automated backup solution',
        assignedTo: 'Sarah Wilson',
        priority: '2',
        status: 'ongoing',
        scheduleTo: '2025-04-25'
    }, {
        id: 8,
        title: 'Mobile responsiveness',
        description: 'Ensure application works on mobile devices',
        assignedTo: 'Jane Doe',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-06-01'
    }, {
        id: 9,
        title: 'Security audit',
        description: 'Perform complete security assessment',
        assignedTo: 'John Smith',
        priority: '1',
        status: 'open',
        scheduleTo: '2025-05-20'
    }, {
        id: 10,
        title: 'API documentation',
        description: 'Document all API endpoints and usage',
        assignedTo: 'Mike Johnson',
        priority: '3',
        status: 'open',
        scheduleTo: '2025-07-10'
    }, {
        id: 11,
        title: 'Email notification system',
        description: 'Implement email alerts for important events',
        assignedTo: 'Sarah Wilson',
        priority: '2',
        status: 'ongoing',
        scheduleTo: '2025-06-15'
    }, {
        id: 12,
        title: 'User dashboard',
        description: 'Create personalized user dashboard',
        assignedTo: 'Jane Doe',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-08-01'
    }, {
        id: 13,
        title: 'Error logging system',
        description: 'Implement comprehensive error tracking',
        assignedTo: 'John Smith',
        priority: '3',
        status: 'open',
        scheduleTo: '2025-07-20'
    }, {
        id: 14,
        title: 'Payment integration',
        description: 'Add payment gateway integration',
        assignedTo: 'Mike Johnson',
        priority: '1',
        status: 'open',
        scheduleTo: '2025-09-05'
    }, {
        id: 15,
        title: 'Unit test suite',
        description: 'Develop comprehensive unit tests',
        assignedTo: 'Sarah Wilson',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-08-15'
    }, {
        id: 16,
        title: 'Search functionality',
        description: 'Implement advanced search features',
        assignedTo: 'Jane Doe',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-09-20'
    }, {
        id: 17,
        title: 'Performance monitoring',
        description: 'Set up application performance monitoring',
        assignedTo: 'John Smith',
        priority: '3',
        status: 'open',
        scheduleTo: '2025-10-01'
    }, {
        id: 18,
        title: 'User guide creation',
        description: 'Create comprehensive user documentation',
        assignedTo: 'Mike Johnson',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-09-15'
    }, {
        id: 19,
        title: 'Database optimization',
        description: 'Optimize database queries and indexes',
        assignedTo: 'Sarah Wilson',
        priority: '1',
        status: 'open',
        scheduleTo: '2025-10-15'
    }, {
        id: 20,
        title: 'Analytics dashboard',
        description: 'Implement analytics and reporting dashboard',
        assignedTo: 'Jane Doe',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-11-01'
    }]
});
