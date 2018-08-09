module.exports = [
    {
        route: 'suppliers/budgeting',
        name: 'suppliers/budgeting',
        moduleId: './modules/master/supplier-budgeting/index',
        nav: true,
        title: 'Supplier',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1, "U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'uoms',
        name: 'uoms',
        moduleId: './modules/master/uom/index',
        nav: true,
        title: 'Satuan',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'products/budgeting',
        name: 'products/budgeting',
        moduleId: './modules/master/product-budgeting/index',
        nav: true,
        title: 'Barang',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1, "U04": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'products',
        name: 'products',
        moduleId: './modules/master/product/index',
        nav: true,
        title: 'View Data Barang',
        auth: true,
        settings: {
            group: "master",
            permission: { "U01": 1,"U02": 1,"U05": 1,"U06": 1,"U07": 1,"U08": 1,"U09": 1,"U10": 1,"U12": 1,"U13": 1,"U14": 1,"U15": 1,"U16": 1,"U17": 1,"U18": 1,"U19": 1,"U20": 1,"U21": 1,"U22": 1,"U23": 1,"U24": 1,"U25": 1,"U26": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'vats',
        name: 'vats',
        moduleId: './modules/master/vat/index',
        nav: true,
        title: 'Pajak PPH',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'budgets',
        name: 'budgets',
        moduleId: './modules/master/budget/index',
        nav: true,
        title: 'Budget',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'currencies',
        name: 'currencies',
        moduleId: './modules/master/currency/index',
        nav: true,
        title: 'Mata Uang',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'divisions',
        name: 'divisions',
        moduleId: './modules/master/division/index',
        nav: true,
        title: 'Divisi',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'categories',
        name: 'categories',
        moduleId: './modules/master/category/index',
        nav: true,
        title: 'Kategori',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'units',
        name: 'units',
        moduleId: './modules/master/unit/index',
        nav: true,
        title: 'Unit',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'companies',
        name: 'companies',
        moduleId: './modules/master/company/index',
        nav: true,
        title: 'Perusahaan',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1, "U14": 1, "U15": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'contacts',
        name: 'contacts',
        moduleId: './modules/master/contact/index',
        nav: true,
        title: 'Kontak',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1, "U14": 1, "U15": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'deal-tracking-reasons',
        name: 'deal-tracking-reasons',
        moduleId: './modules/master/deal-tracking-reason/index',
        nav: true,
        title: 'Alasan Deal Tracking',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'storage',
        name: 'storage',
        moduleId: './modules/master/storage/index',
        nav: false,
        title: 'Storage',
        auth: true,
        settings: {
            group: "master",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }    
] 