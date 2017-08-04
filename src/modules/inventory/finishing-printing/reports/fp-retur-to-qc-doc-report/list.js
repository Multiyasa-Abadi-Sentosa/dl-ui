import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
var moment = require("moment");
var ReturLoader = require('../../../../../loader/retur-to-qc-loader');
var ProductionOrderLoader = require("../../../../../loader/production-order-loader");

@inject(Router, Service)
export class List {
    constructor(router, service) {
        this.service = service;
        this.router = router;
    }
    filterRetur={
        isVoid:false
    };
    
    retur=null;
    destination='';
    productionOrder=null;
    dateFrom = null;
    dateTo = null;

    tableOptions = {
        search: false,
        showToggle: false,
        showColumns: false
    }
    destinationOptions = ['','Pack I', 'Pack II'];

    listDataFlag = false;

    columns = [
       { field: "no", title: "No", sortable:false},
       { field: "returNo", title: "No. retur", sortable:false},
      { field: "date", title: "Tanggal Retur", sortable:false, 
        formatter: (value, data) => {
            return moment(value).format("DD/MM/YYYY");
        }
      },
      { field: "destination", title: "Tujuan", sortable:false},
      { field: "deliveryOrderNo", title: "No. DO", sortable:false},
      { field: "returDesc", title: "Keterangan Retur", sortable:false},
      { field: "orderNo", title: "No. Order", sortable:false},
      { field: "productName", title: "Nama Barang", sortable:false},
      { field: "remark", title: "Keterangan", sortable:false},
      { field: "qty", title: "Jumlah Retur", sortable:false},
      { field: "uom", title: "Satuan", sortable:false},
      { field: "length", title: "Panjang (Meter)", sortable:false},
      { field: "weight", title: "Berat (Kg)", sortable:false},
    ]

    bind() {
        
    }

    fillValues() {
        this.arg.returNo = this.filter.retur ? this.filter.retur.returNo : "";
        this.arg.destination = this.filter.destination ? this.filter.destination : "";
        this.arg.deliveryOrderNo = this.filter.deliveryOrderNo ? this.filter.deliveryOrderNo : "";
        this.arg.productionOrderNo = this.filter.productionOrder ? this.filter.productionOrder.orderNo : "";
        this.arg.dateFrom = this.filter.dateFrom ? moment(this.filter.dateFrom).format("YYYY-MM-DD") : "";
        this.arg.dateTo = this.filter.dateTo ? moment(this.filter.dateTo).format("YYYY-MM-DD") : "";
        this.arg.offset = new Date().getTimezoneOffset() / 60 * -1;
    }

    loader = (info) => {
        var order = {};

        if (info.sort)
            order[info.sort] = info.order;

        this.arg = {
            page: parseInt(info.offset / info.limit, 10) + 1,
            size: info.limit,
            keyword: info.search,
            order: order
        };

        return this.listDataFlag ? (
            this.fillValues(),
            this.service.search(this.arg)
                .then(result => {
                    var index=0;
                    var newData=[];
                    for (var retur of result.data) {
                        for (var item of retur.items) {
                            for (var detail of item.details) {
                                var data = {};
                                index += 1;
                                data.no = index;
                                data.returNo = retur.returNo ? retur.returNo : '';
                                data.date = retur.date ? retur.date : '';
                                data.destination = retur.destination ? retur.destination : '';
                                data.deliveryOrderNo = retur.deliveryOrderNo ? retur.deliveryOrderNo : '';
                                data.returDesc = retur.remark ? retur.remark : '';
                                data.orderNo = item.productionOrderNo ? item.productionOrderNo : '';
                                data.productName = detail.productName ? detail.productName : '';
                                data.remark =detail.remark ? detail.remark : '';
                                data.qty =detail.returQuantity ? detail.returQuantity : '';
                                data.uom =detail.uom ? detail.uom : '';
                                data.length =detail.length ? detail.length : '';
                                data.weight =detail.weight ? detail.weight : '';

                                newData.push(data);
                            }
                        }
                    }
                    return {
                        total: newData.length,
                        data: newData
                    }
            })
        ) : { total: 0, data: {} };
    }

    searching() {
        this.listDataFlag = true;
        this.returTable.refresh();
    }

    reset() {
        this.filter = {};
        this.data = [];
        this.listDataFlag=false;
        this.returTable.refresh();
    }

    ExportToExcel() {
        this.fillValues();
        this.service.generateExcel(this.arg);
    }

    get returLoader() {
        return ReturLoader;
    }

    returView = (retur) => {
        return `${retur.returNo}`;
    }

    get productionOrderLoader() {
        return ProductionOrderLoader;
    }

    productionOrderView = (prodOrder) => {
        return `${prodOrder.orderNo}`;
    }

    autocomplete_change(e) {
        if(e.au.controller.view.bindingContext.value == undefined || e.au.controller.view.bindingContext.value == "")
            e.au.controller.view.bindingContext.value = e.au.controller.view.bindingContext.value == undefined ? "" : undefined;
    }
}
