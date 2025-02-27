Ext.define('TaskManager.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'assignedTo',
        type: 'string'
    }, {
        name: 'scheduleTo',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }, {
        name: 'priority',
        type: 'string'
    }],
    
    data: [{
        id: 1,
        title: 'Blue Cross Account Meeting',
        description: 'Annual contract renewal meeting with Blue Cross',
        assignedTo: 'Michael Scott',
        priority: '1',
        status: 'open',
        scheduleTo: '2025-01-15'
    }, {
        id: 2,
        title: 'Quarterly Sales Report',
        description: 'Prepare Q4 sales figures for corporate',
        assignedTo: 'Dwight K. Schrute',
        priority: '1',
        status: 'ongoing',
        scheduleTo: '2025-01-20'
    }, {
        id: 3,
        title: 'New Client Presentation',
        description: 'Present paper catalog to potential client',
        assignedTo: 'Jim Halpert',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-01-25'
    }, {
        id: 4,
        title: 'Update Client Database',
        description: 'Update contact information for all clients',
        assignedTo: 'Pam Beesly',
        priority: '3',
        status: 'ongoing',
        scheduleTo: '2025-01-28'
    }, {
        id: 5,
        title: 'Monthly Expense Report',
        description: 'Process monthly expense claims',
        assignedTo: 'Angela Martin',
        priority: '2',
        status: 'ongoing',
        scheduleTo: '2025-02-01'
    }, {
        id: 6,
        title: 'Supplier Price Negotiation',
        description: 'Negotiate new rates with paper suppliers',
        assignedTo: 'Michael Scott',
        priority: '1',
        status: 'open',
        scheduleTo: '2025-02-05'
    }, {
        id: 7,
        title: 'Cold Calls - New Territories',
        description: 'Make cold calls to businesses in new territory',
        assignedTo: 'Stanley Hudson',
        priority: '2',
        status: 'ongoing',
        scheduleTo: '2025-02-10'
    }, {
        id: 8,
        title: 'Customer Satisfaction Survey',
        description: 'Conduct quarterly customer satisfaction survey',
        assignedTo: 'Kelly Kapoor',
        priority: '3',
        status: 'open',
        scheduleTo: '2025-02-15'
    }, {
        id: 9,
        title: 'HR Compliance Review',
        description: 'Quarterly HR policy compliance review',
        assignedTo: 'Toby Flenderson',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-02-20'
    }, {
        id: 10,
        title: 'Sales Team Training',
        description: 'New paper products training session',
        assignedTo: 'Dwight K. Schrute',
        priority: '2',
        status: 'open',
        scheduleTo: '2025-02-25'
    }]
});
