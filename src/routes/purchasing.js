module.exports = [ 
    {
        route: 'pr',
        name: 'purchase-request',
        moduleId: './modules/purchasing/purchase-request/index',
        nav: true,
        title: 'Purchase Request',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U01": 1,"U02": 1,"U03": 1,"U04": 1,"U05": 1,"U06": 1,"U07": 1,"U08": 1,"U09": 1,"U10": 1,"U11": 1,"U12": 1,"U13": 1,"U14": 1,"U15": 1,"U16": 1,"U17": 1,"U18": 1,"U19": 1,"U20": 1,"U21": 1,"U22": 1,"U23": 1,"U24": 1,"U25": 1,"U26": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'pr/monitoring',
        name: 'purchase-request-monitoring',
        moduleId: './modules/purchasing/monitoring-purchase-request/index',
        nav: true,
        title: 'Monitoring Purchase Request',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U01": 1,"U02": 1,"U03": 1,"U04": 1,"U05": 1,"U06": 1,"U07": 1,"U08": 1,"U09": 1,"U10": 1,"U11": 1,"U12": 1,"U13": 1,"U14": 1,"U15": 1,"U16": 1,"U17": 1,"U18": 1,"U19": 1,"U20": 1,"U21": 1,"U22": 1,"U23": 1,"U24": 1,"U25": 1,"U26": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'monitoring-purchase-request-all-unit',
        name: 'monitoring-purchase-request-all-unit',
        moduleId: './modules/purchasing/monitoring-purchase-request-all-unit/index',
        nav: true,
        title: 'Monitoring Purchase Request Semua Unit',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po',
        name: 'purchase-order',
        moduleId: './modules/purchasing/purchase-order/index',
        nav: true,
        title: 'Purchase Order',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po-internal/monitoring',
        name: 'purchase-order-internal-monitoring',
        moduleId: './modules/purchasing/monitoring-purchase-order-internal/index',
        nav: true,
        title: 'Monitoring Purchase Order Internal',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po-external',
        name: 'purchase-order-external',
        moduleId: './modules/purchasing/purchase-order-external/index',
        nav: true,
        title: 'Purchase Order External',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/monitoring/all',
        name: 'purchase-order-monitoring',
        moduleId: './modules/purchasing/monitoring-purchase-order-all-user/index',
        nav: true,
        title: 'Monitoring Purchase All',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/monitoring',
        name: 'purchase-order-monitoring',
        moduleId: './modules/purchasing/monitoring-purchase-order/index',
        nav: true,
        title: 'Monitoring Purchase',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/reports/periode/unit',
        name: 'purchase-order-reports-periode-unit',
        moduleId: './modules/purchasing/reports/purchase-order-report/unit-report/index',
        nav: true,
        title: 'Laporan Total Pembelian per Unit',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/reports/periode/category',
        name: 'purchase-order-reports-periode-category',
        moduleId: './modules/purchasing/reports/purchase-order-report/category-report/index',
        nav: true,
        title: 'Laporan Total Pembelian per Kategori',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/reports/periode/unit-category',
        name: 'purchase-order-reports-periode-unit-category',
        moduleId: './modules/purchasing/reports/purchase-order-report/unit-category-report/index',
        nav: true,
        title: 'Laporan Total Pembelian per Unit per Kategori',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/reports/periode/supplier',
        name: 'purchase-order-reports-periode-supplier',
        moduleId: './modules/purchasing/reports/purchase-order-report/supplier-report/index',
        nav: true,
        title: 'Laporan Total Pembelian per Supplier',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'delivery-order',
        name: 'delivery-order',
        moduleId: './modules/purchasing/delivery-order/index',
        nav: true,
        title: 'Surat Jalan',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'do/monitoring',
        name: 'delivery-order-monitoring',
        moduleId: './modules/purchasing/monitoring-delivery-order/index',
        nav: true,
        title: 'Monitoring Surat Jalan',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'receipt-note/unit',
        name: 'receipt-note-unit',
        moduleId: './modules/purchasing/unit-receipt-note/index',
        nav: true,
        title: 'Bon Terima Unit',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U01": 1,"U02": 1,"U03": 1,"U04": 1,"U05": 1,"U06": 1,"U07": 1,"U08": 1,"U09": 1,"U10": 1,"U11": 1,"U12": 1,"U13": 1,"U14": 1,"U15": 1,"U16": 1,"U17": 1,"U18": 1,"U19": 1,"U20": 1,"U21": 1,"U22": 1,"U23": 1,"U24": 1,"U25": 1,"U26": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'receipt-note/unit/monitoring',
        name: 'receipt-note-unit-monitoring',
        moduleId: './modules/purchasing/unit-receipt-note-monitoring/index',
        nav: true,
        title: 'Monitoring Bon Terima Unit',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U01": 1,"U02": 1,"U03": 1,"U04": 1,"U05": 1,"U06": 1,"U07": 1,"U08": 1,"U09": 1,"U10": 1,"U11": 1,"U12": 1,"U13": 1,"U14": 1,"U15": 1,"U16": 1,"U17": 1,"U18": 1,"U19": 1,"U20": 1,"U21": 1,"U22": 1,"U23": 1,"U24": 1,"U25": 1,"U26": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'report/bon-unit-blm-spb',
        name: 'bon-unit-blm-spb',
        moduleId: './modules/purchasing/reports/bon-unit-blm-spb/index',
        nav: true,
        title: 'Laporan Bon Terima Unit Belum Dibuat SPB',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'unit-payment-order',
        name: 'unit-payment-order',
        moduleId: './modules/purchasing/unit-payment-order/index',
        nav: true,
        title: 'Surat Perintah Bayar',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },    
    {
        route: 'unit-payment-note/price-correction',
        name: 'unit-payment-price-correction-note',
        moduleId: './modules/purchasing/unit-payment-price-correction-note/index',
        nav: true,
        title: 'Koreksi Harga Pembelian',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'unit-payment-note/price-correction/monitoring',
        name: 'unit-payment-price-correction-note-monitoring',
        moduleId: './modules/purchasing/koreksi-harga/index',
        nav: true,
        title: 'Monitoring Koreksi Harga',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'unit-payment-note/quantity-correction',
        name: 'unit-payment-quantity-correction-note',
        moduleId: './modules/purchasing/unit-payment-quantity-correction-note/index',
        nav: true,
        title: 'Koreksi Jumlah Pembelian',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'correction-quantity',
        name: 'unit-payment-quantity-koreksi',
        moduleId: './modules/purchasing/monitoring-correction-quantity/index',
        nav: true,
        title: 'Monitoring Koreksi Jumlah',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'generating-data',
        name: 'generating-data',
        moduleId: './modules/purchasing/generating-data/index',
        nav: true,
        title: 'Generating Data',
        auth: true,
        settings: {
            group: "purchasing",
            permission: {"U11" : 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'purchase-request-purchase-order-duration-report',
        name: 'purchase-request-purchase-order-duration-report',
        moduleId: './modules/purchasing/reports/duration-reports/purchase-request-purchase-order-duration-report/index',
        nav: true,
        title: 'Laporan Durasi PR - PO Internal',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'purchase-request-purchase-order-external-duration-report',
        name: 'purchase-request-purchase-order-external-duration-report',
        moduleId: './modules/purchasing/reports/duration-reports/purchase-request-purchase-order-external-duration-report/index',
        nav: true,
        title: 'Laporan Durasi PR - PO Eksternal',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'purchase-order-purchase-order-external-duration-report',
        name: 'purchase-order-purchase-order-external-duration-report',
        moduleId: './modules/purchasing/reports/duration-reports/purchase-order-purchase-order-external-duration-report/index',
        nav: true,
        title: 'Laporan Durasi PO Internal - PO Eksternal',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'purchase-order-external-delivery-order-duration-report',
        name: 'purchase-order-external-delivery-order-duration-report',
        moduleId: './modules/purchasing/reports/duration-reports/purchase-order-external-delivery-order-duration-report/index',
        nav: true,
        title: 'Laporan Durasi PO Eksternal - Surat Jalan',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'po/monitoring/price',
        name: 'purchase-order-monitoring-price',
        moduleId: './modules/purchasing/monitoring-price/index',
        nav: true,
        title: 'Monitoring Price',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
 {
        route: 'po/reports/ketepatan/staff',
        name: 'purchase-order-reports-ketepatan-staff',
        moduleId: './modules/purchasing/reports/purchase-order-report/staff-report/index',
        nav: true,
        title: 'Laporan Ketepatan kedatangan Barang per Staff',
        auth: true,
        settings: {
            group: "purchasing",
            permission: { "U11": 1,"U17": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }
    ]