Ext.define('TaskManager.store.EmployeeStore', {
    extend: 'Ext.data.Store',
    alias: 'store.employeestore',
    
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'street',
        type: 'string'
    }, {
        name: 'district',
        type: 'string'
    }, {
        name: 'country',
        type: 'string'
    }, {
        name: 'houseNumber',
        type: 'string'
    }, {
        name: 'documentType',
        type: 'string'
    }, {
        name: 'documentNumber',
        type: 'string'
    }, {
        name: 'documentNumber',
        type: 'string'
    }, {
        name: 'zipCode',
        type: 'string'
    }, {
        name: 'company',
        type: 'string'
    }, {
        name: 'role',
        type: 'string'
    }, {
        name: 'active',
        type: 'string'
    }, {
        name: 'createdAt',
        type: 'date'
    }, {
        name: 'updatedAt',
        type: 'date'
    }, {
        name: 'ssn', 
        type: 'string'
    }, {
        name: 'emergencyContact', 
        type: 'string'
    }, {
        name: 'emergencyPhone', 
        type: 'string'
    }, {
        name: 'auditLog', 
        type: 'auto'
    }],
    data: [{
        id: 1,
        name: 'Michael Scott',
        email: 'michael.scott@dundermifflin.com',
        phoneNumber: '(570) 555-0001',
        street: 'Mulberry Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '1725',
        documentType: 'SSN',
        documentNumber: '123-45-6789',
        zipCode: '18505',  // Scranton, PA
        company: 'Dunder Mifflin',
        role: 'Regional Manager',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '123-45-6789',
        emergencyContact: 'Holly Flax',
        emergencyPhone: '(570) 555-0002',
        auditLog: []
    }, {
        id: 2,
        name: 'Dwight K. Schrute',
        email: 'dwight.schrute@dundermifflin.com',
        phoneNumber: '(570) 555-0003',
        street: 'Schrute Farms',
        district: 'Rural',
        country: 'USA',
        houseNumber: '1',
        documentType: 'SSN',
        documentNumber: '234-56-7890',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Assistant Regional Manager',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '234-56-7890',
        emergencyContact: 'Mose Schrute',
        emergencyPhone: '(570) 555-0004',
        auditLog: []
    }, {
        id: 3,
        name: 'Jim Halpert',
        email: 'jim.halpert@dundermifflin.com',
        phoneNumber: '(570) 555-0005',
        street: 'Linden Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '423',
        documentType: 'SSN',
        documentNumber: '345-67-8901',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Sales Representative',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '345-67-8901',
        emergencyContact: 'Pam Beesly',
        emergencyPhone: '(570) 555-0006',
        auditLog: []
    }, {
        id: 4,
        name: 'Pam Beesly',
        email: 'pam.beesly@dundermifflin.com',
        phoneNumber: '(570) 555-0006',
        street: 'Linden Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '423',
        documentType: 'SSN',
        documentNumber: '456-78-9012',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Receptionist',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '456-78-9012',
        emergencyContact: 'Jim Halpert',
        emergencyPhone: '(570) 555-0005',
        auditLog: []
    }, {
        id: 5,
        name: 'Angela Martin',
        email: 'angela.martin@dundermifflin.com',
        phoneNumber: '(570) 555-0007',
        street: 'Oak Avenue',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '89',
        documentType: 'SSN',
        documentNumber: '567-89-0123',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Senior Accountant',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '567-89-0123',
        emergencyContact: 'Dwight Schrute',
        emergencyPhone: '(570) 555-0003',
        auditLog: []
    }, {
        id: 6,
        name: 'Oscar Martinez',
        email: 'oscar.martinez@dundermifflin.com',
        phoneNumber: '(570) 555-0008',
        street: 'Pine Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '156',
        documentType: 'SSN',
        documentNumber: '678-90-1234',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Accountant',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '678-90-1234',
        emergencyContact: 'Gil',
        emergencyPhone: '(570) 555-0009',
        auditLog: []
    }, {
        id: 7,
        name: 'Stanley Hudson',
        email: 'stanley.hudson@dundermifflin.com',
        phoneNumber: '(570) 555-0010',
        street: 'Market Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '278',
        documentType: 'SSN',
        documentNumber: '789-01-2345',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Sales Representative',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '789-01-2345',
        emergencyContact: 'Teri Hudson',
        emergencyPhone: '(570) 555-0011',
        auditLog: []
    }, {
        id: 8,
        name: 'Phyllis Vance',
        email: 'phyllis.vance@dundermifflin.com',
        phoneNumber: '(570) 555-0012',
        street: 'Cedar Avenue',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '342',
        documentType: 'SSN',
        documentNumber: '890-12-3456',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Sales Representative',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '890-12-3456',
        emergencyContact: 'Bob Vance',
        emergencyPhone: '(570) 555-0013',
        auditLog: []
    }, {
        id: 9,
        name: 'Toby Flenderson',
        email: 'toby.flenderson@dundermifflin.com',
        phoneNumber: '(570) 555-0014',
        street: 'Birch Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '445',
        documentType: 'SSN',
        documentNumber: '901-23-4567',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Human Resources',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '901-23-4567',
        emergencyContact: 'Sasha Flenderson',
        emergencyPhone: '(570) 555-0015',
        auditLog: []
    }, {
        id: 10,
        name: 'Kelly Kapoor',
        email: 'kelly.kapoor@dundermifflin.com',
        phoneNumber: '(570) 555-0016',
        street: 'Spruce Street',
        district: 'Downtown',
        country: 'USA',
        houseNumber: '167',
        documentType: 'SSN',
        documentNumber: '012-34-5678',
        zipCode: '18505',
        company: 'Dunder Mifflin',
        role: 'Customer Service',
        active: true,
        createdAt: '2005-03-24',
        updatedAt: '2023-01-01',
        ssn: '012-34-5678',
        emergencyContact: 'Ryan Howard',
        emergencyPhone: '(570) 555-0017',
        auditLog: []
    }]
});
