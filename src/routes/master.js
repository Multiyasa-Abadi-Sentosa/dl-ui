module.exports = [
    {
        route: 'buyers',
        name: 'buyers',
        moduleId: './modules/master/buyer/index',
        nav: true,
        title: 'Buyer',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1, "A2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'suppliers/budgeting',
        name: 'suppliers/budgeting',
        moduleId: './modules/master/supplier-budgeting/index',
        nav: true,
        title: 'Supplier',
        auth: true,
        settings: {
            group: "master",
            permission: { "C5": 1, "C9": 1, "P1": 7, "P3": 7, "P4": 7, "P6": 7, "P7": 7, "PG": 7 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'suppliers',
        name: 'suppliers',
        moduleId: './modules/master/supplier/index',
        nav: true,
        title: 'Supplier',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG": 1 },
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
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-products/budgeting',
        name: 'garment-products/budgeting',
        moduleId: './modules/master/garment-product-budgeting/index',
        nav: true,
        title: 'Barang Garment',
        auth: true,
        settings: {
            group: "master",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-products',
        name: 'garment-products',
        moduleId: './modules/master/garment-product/index',
        nav: true,
        title: 'Barang Garment',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "S4": 1, "C3": 1, "E": 1, "K": 1, "S1": 1, "S2": 1, "S3": 1, "U1": 1, "F1": 1, "F2": 1, "L3": 1, "LK": 1, "L8": 1, "L2": 1, "C2": 1, "A2": 1, "C1": 1, "B5": 1, "L1": 1, "B4": 1, "B3": 1, "C4": 1, "OJ": 1, "A1": 1, "B9": 1, "A4": 1, "P1A": 1, "C2A": 1, "C2B": 1, "FP": 1, "PI": 1, "P": 1, "FC": 1, "GU": 1, "GS": 1, "PG": 1, "C1A": 1, "C1B": 1, "KK": 1, "B1": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-buyers',
        name: 'garment-buyers',
        moduleId: './modules/master/garment-buyer/index',
        nav: true,
        title: 'Buyer Garment',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "S4": 1, "C3": 1, "E": 1, "K": 1, "S1": 1, "S2": 1, "S3": 1, "U1": 1, "F1": 1, "F2": 1, "L3": 1, "LK": 1, "L8": 1, "L2": 1, "C2": 1, "A2": 1, "C1": 1, "B5": 1, "L1": 1, "B4": 1, "B3": 1, "C4": 1, "OJ": 1, "A1": 1, "B9": 1, "A4": 1, "P1A": 1, "C2A": 1, "C2B": 1, "FP": 1, "PI": 1, "P": 1, "FC": 1, "GU": 1, "GS": 1, "PG": 1, "C1A": 1, "C1B": 1, "KK": 1, "B1": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-categories',
        name: 'garment-categories',
        moduleId: './modules/master/garment-category/index',
        nav: true,
        title: 'Kategori Garment',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "S4": 1, "C3": 1, "E": 1, "K": 1, "S1": 1, "S2": 1, "S3": 1, "U1": 1, "F1": 1, "F2": 1, "L3": 1, "LK": 1, "L8": 1, "L2": 1, "C2": 1, "A2": 1, "C1": 1, "B5": 1, "L1": 1, "B4": 1, "B3": 1, "C4": 1, "OJ": 1, "A1": 1, "B9": 1, "A4": 1, "P1A": 1, "C2A": 1, "C2B": 1, "FP": 1, "PI": 1, "P": 1, "FC": 1, "GU": 1, "GS": 1, "PG": 1, "C1A": 1, "C1B": 1, "KK": 1, "B1": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-suppliers/budgeting',
        name: 'garment-suppliers/budgeting',
        moduleId: './modules/master/garment-supplier-budgeting/index',
        nav: true,
        title: 'Supplier Garment',
        auth: true,
        settings: {
            group: "master",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'garment-suppliers',
        name: 'garment-suppliers',
        moduleId: './modules/master/garment-supplier/index',
        nav: true,
        title: 'Supplier Garment',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "S4": 1, "C3": 1, "E": 1, "K": 1, "S1": 1, "S2": 1, "S3": 1, "U1": 1, "F1": 1, "F2": 1, "L3": 1, "LK": 1, "L8": 1, "L2": 1, "C2": 1, "A2": 1, "C1": 1, "B5": 1, "L1": 1, "B4": 1, "B3": 1, "C4": 1, "OJ": 1, "A1": 1, "B9": 1, "A4": 1, "P1A": 1, "C2A": 1, "C2B": 1, "FP": 1, "PI": 1, "P": 1, "FC": 1, "GU": 1, "GS": 1, "PG": 1, "C1A": 1, "C1B": 1, "KK": 1, "B1": 1 },
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
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'products',
        name: 'products',
        moduleId: './modules/master/product/index',
        nav: true,
        title: 'Barang',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "S4": 1, "C3": 1, "E": 1, "K": 1, "S1": 1, "S2": 1, "S3": 1, "U1": 1, "F1": 1, "F2": 1, "L3": 1, "LK": 1, "L8": 1, "L2": 1, "C2": 1, "A2": 1, "C1": 1, "B5": 1, "L1": 1, "B4": 1, "B3": 1, "C4": 1, "OJ": 1, "A1": 1, "B9": 1, "A4": 1, "P1A": 1, "C2A": 1, "C2B": 1, "FP": 1, "PI": 1, "P": 1, "FC": 1, "GU": 1, "GS": 1, "PG": 1, "C1A": 1, "C1B": 1, "KK": 1, "B1": 1 },
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
            permission: { "C9": 1 },
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
            permission: { "C9": 1 },
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
            permission: { "C9": 1 },
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
            permission: { "C9": 1 },
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
            permission: { "C9": 1 },
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
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }

    },
    {
        route: 'machine-types',
        name: 'machine-types',
        moduleId: './modules/master/machine-type/index',
        nav: true,
        title: 'Jenis Mesin',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1 },
        }
    },
    {
        route: 'machines',
        name: 'machines',
        moduleId: './modules/master/machine/index',
        nav: true,
        title: 'Mesin',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'

        }
    },
    {
        route: 'instruksi',
        name: 'instruksi',
        moduleId: './modules/master/instruksi/index',
        nav: true,
        title: 'Instruksi',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'step',
        name: 'step',
        moduleId: './modules/master/step/index',
        nav: true,
        title: 'Step',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
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
            permission: { "C9": 1, "A1": 1, "A2": 1, "PGA": 1, "PA": 1, "PM": 1, "PE": 1 },
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
            permission: { "C9": 1, "A1": 1, "A2": 1, "PGA": 1, "PA": 1, "PM": 1, "PE": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'duration-estimations',
        name: 'duration-estimations',
        moduleId: './modules/master/fp-duration-estimation/index',
        nav: true,
        title: 'Estimasi Durasi Produksi',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1, "A1": 1, "A2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'bad-output-reasons',
        name: 'bad-output-reasons',
        moduleId: './modules/master/bad-output-reason/index',
        nav: true,
        title: 'Keterangan Bad Output',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1 },
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
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment/garment-currency',
        name: 'kurs-currency',
        moduleId: './modules/garment-purchasing/garment-currency/index',
        nav: true,
        title: 'Kurs Mata Uang',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'storage',
        name: 'storage',
        moduleId: './modules/master/storage/index',
        nav: true,
        title: 'Storage',
        auth: true,
        settings: {
            group: "master",
            permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'holiday',
        name: 'holiday',
        moduleId: './modules/master/holiday-budgeting/index',
        nav: true,
        title: 'Hari Libur',
        auth: true,
        settings: {
            group: "master",
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'spinning-production-lot',
        name: 'spinning-production-lot',
        moduleId: './modules/master/spinning-production-lot/index',
        nav: true,
        title: 'Nomor Lot Produksi',
        auth: true,
        settings: {
            group: "master",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },

    {
        route: 'yarn-material',
        name: 'yarn-material',
        moduleId: './modules/master/yarn-material/index',
        nav: true,
        title: 'Nomor Benang Material',
        auth: true,
        settings: {
            group: "master",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }

    },

    {
        route: 'material-construction',
        name: 'material-construction',
        moduleId: './modules/master/material-construction/index',
        nav: true,
        title: 'Konstruksi Material',
        auth: true,
        settings: {
            group: "master",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },

    {

        route: 'term-of-payment',
        name: 'term-of-payment',
        moduleId: './modules/master/term-of-payment/index',
        nav: true,
        title: 'Term of Payment',
        auth: true,
        settings: {
            group: "master",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },

    {
        route: 'comodity',
        name: 'comodity',
        moduleId: './modules/master/comodity/index',
        nav: true,
        title: 'Komoditas',
        auth: true,
        settings: {
            group: "master",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },

] 

