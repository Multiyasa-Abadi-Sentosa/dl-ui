import { inject, bindable, computedFrom, BindingEngine } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';
import { Service } from './../service';

@inject(Service, BindingEngine, BindingSignaler)
export class ShipmentDetail {

    constructor(service, bindingSignaler, bindingEngine) {
        this.service = service;
        this.signaler = bindingSignaler;
        this.bindingEngine = bindingEngine;
    }

    async activate(context) {
        this.data = context.data;
        this.error = context.error;
        this.options = context.options;
        this.context = context.context;
        this.selectedProductionOrder = this.data.selectedProductionOrder;
        this.selectedBuyerName = this.context.options.selectedBuyerName;

        if (this.data.productionOrderId) {
            this.selectedProductionOrder = await this.service.getProductionOrderById(this.data.productionOrderId)
        }
    }

    controlOptions = {
        control: {
            length: 12
        }
    }

    productionOrderFields = ["_id", "orderNo", "orderType.name", "designCode", "designNumber", "details.colorType"];

    itemColumns = ["Macam Barang", "Design", "Satuan", "Kuantiti Satuan", "Panjang Total", "Berat Satuan", "Berat Total"];

    @bindable selectedProductionOrder;
    async selectedProductionOrderChanged(newVal, oldVal) {
        if (this.selectedProductionOrder && this.selectedProductionOrder._id) {
            this.data.selectedProductionOrder = this.selectedProductionOrder;
            this.data.productionOrderId = this.selectedProductionOrder._id;
            this.data.productionOrderNo = this.selectedProductionOrder.orderNo;
            this.data.productionOrderType = this.selectedProductionOrder.orderType.name;
            this.data.designCode = this.selectedProductionOrder.designCode;
            this.data.designNumber = this.selectedProductionOrder.designNumber;
            this.data.colorType = this.selectedProductionOrder.details[0].colorType;

            //get products by buyer and production order number where stock balance is greater than 0
            if (!this.data.items && this.selectedBuyerName && this.selectedProductionOrder) {
                var filter = {
                    "properties.buyerName": this.selectedBuyerName,
                    "properties.productionOrderNo": this.selectedProductionOrder.orderNo
                }

                var info = { filter: JSON.stringify(filter) };
                this.productResults = await this.service.searchProducts(info);
                this.products = this.productResults && this.productResults.data.length > 0 ? this.productResults.data.map((product) => {
                    return product;
                }) : [];
                this.productCodes = this.products.length > 0 ? this.products.map((product) => {
                    return product.code;
                }) : [];
                if (this.productCodes.length > 0) {
                    var filterInventory = {
                        "productCode": {
                            "$in": this.productCodes
                        },
                        "quantity": {
                            "$gt": 0
                        }
                    }
                    var infoInventory = { filter: JSON.stringify(filterInventory) };
                    this.inventoryResults = await this.service.searchInventory(infoInventory);
                    this.inventoryDatas = this.inventoryResults && this.inventoryResults.data.length > 0 ? this.inventoryResults.data.map((result) => {
                        return result;
                    }) : [];

                    this.shipmentProducts = [];
                    if (this.inventoryDatas.length > 0 && this.products.length > 0) {
                        for (var i = 0; i < this.inventoryDatas.length; i++) {
                            for (var j = 0; j < this.products.length; j++) {
                                if (this.inventoryDatas[i].productCode === this.products[j].code) {
                                    var productObj = {
                                        productId: this.products[j]._id ? this.products[j]._id : null,
                                        productCode: this.products[j].code ? this.products[j].code : "",
                                        productName: this.products[j].name ? this.products[j].name : "",
                                        designCode: this.products[j].properties && this.products[j].properties.designCode ? this.products[j].properties.designCode : "",
                                        designNumber: this.products[j].properties && this.products[j].properties.designNumber ? this.products[j].properties.designNumber : "",
                                        colorType: this.products[j].properties && this.products[j].properties.colorName ? this.products[j].properties.colorName : "",
                                        uomId: this.products[j].uom && this.products[j].uom._id ? this.products[j].uom._id : null,
                                        uomUnit: this.products[j].uom && this.products[j].uom.unit ? this.products[j].uom.unit : "",
                                        quantity: this.inventoryDatas[i].quantity ? this.inventoryDatas[i].quantity : 0,
                                        length: this.products[j].properties && this.products[j].properties.length ? this.products[j].properties.length : "",
                                        weight: this.products[j].properties && this.products[j].properties.weight ? this.products[j].properties.weight : ""
                                    };
                                    this.shipmentProducts.push(productObj);
                                    productObj = {};
                                    break;
                                }

                            }
                        }

                    }
                    this.data.items = this.shipmentProducts
                }
            }
        } else {
            this.data.selectedProductionOrder = {};
            this.data.productionOrderId = {};
            this.data.productionOrderNo = "";
            this.data.productionOrderType = "";
            this.data.designCode = "";
            this.data.designNumber = "";
            this.data.colorType = "";
            this.data.items = [];
        }
    }

    get productionOrderLoader() {
        return (keyword) => {
            var info = { keyword: keyword, select: this.productionOrderFields };
            return this.service.searchProductionOrder(info)
                .then((result) => {
                    return result.data;
                });
        }
    }

    removeItems() {
        this.bind();
    }
}