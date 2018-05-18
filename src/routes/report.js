module.exports = [
    {
        route: 'power-bi/purchasing',
        name: 'power-bi-purchasing',
        moduleId: './modules/power-bi/purchasing/index',
        nav: true,
        title: 'Power BI: Purchasing Reports',
        auth: true,
        settings: {
            group: "reports",
            permission : {"U11": 1, "U17": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'power-bi/purchasing/garment',
        name: 'power-bi-purchasing-garment',
        moduleId: './modules/power-bi/purchasing-garment/index',
        nav: false,
        title: 'Power BI: Garment Purchasing Reports',
        auth: true,
        settings: {
            group: "reports",
            permission: { "P1": 7, "P3": 7, "P4": 7, "P6": 7, "P7": 7, "C9": 1, "PG": 7 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'power-bi/finishing-printing',
        name: 'power-bi-finishing-printing',
        moduleId: './modules/power-bi/finishing-printing/index',
        nav: false,
        title: 'Power BI: Finishing Printing Reports',
        auth: true,
        settings: {
            group: "reports",
            permission: { "C9": 1, "F1": 7, "F2": 7 },
            iconClass: 'fa fa-dashboard'
        }
    }, {
        route: 'power-bi/sales',
        name: 'power-bi-sales',
        moduleId: './modules/power-bi/sales/index',
        nav: false,
        title: 'Power BI: Sales Reports',
        auth: true,
        settings: {
            group: "reports",
            permission: { "A2": 7, "C9": 1, "F1": 7, "F2": 7 },
            iconClass: 'fa fa-dashboard'
        }
    }, {
        route: 'power-bi/inventory',
        name: 'power-bi-inventory',
        moduleId: './modules/power-bi/inventory/index',
        nav: false,
        title: 'Power BI: Inventory Reports',
        auth: true,
        settings: {
            group: "reports",
            permission: { "A2": 7, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'power-bi/dealtracking',
        name: 'power-bi-dealtracking',
        moduleId: './modules/power-bi/dealtracking/index',
        nav: true,
        title: 'Power BI: Deal Tracking',
        auth: true,
        settings: {
            group: "reports",
            permission: { "U11": 1, "U14": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }]
