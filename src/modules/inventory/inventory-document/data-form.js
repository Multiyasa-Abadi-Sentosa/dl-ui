import { inject, bindable, containerless, computedFrom, BindingEngine } from 'aurelia-framework'
import { Service } from "./service";
var StorageLoader = require('../../../loader/storage-loader');
var BuyerLoader = require('../../../loader/garment-buyers-loader');

@containerless()
@inject(Service, BindingEngine)
export class DataForm {
    @bindable readOnly = false;
    @bindable data = {};
    @bindable error = {};
    @bindable title;

    controlOptions = {
        label: {
            length: 4
        },
        control: {
            length: 5
        }
    }

    storageFields = ["code", "name"];
    constructor(service, bindingEngine) {
        this.service = service;
        this.bindingEngine = bindingEngine;
    }

    async bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;
        if (this.data.storageId) {
            this.selectedStorage = await this.service.getStorageById(this.data.storageId, this.storageFields);
        }
        if (this.data.buyerId){
            this.selectedbuyer = await this.service.getBuyerById(this.data.buyerId, this.storageFields);
        }
    }

    @computedFrom("data._id")
    get isEdit() {
        return (this.data._id || '').toString() != '';
    }

    types = ["IN", "OUT", "ADJ"];

    itemsColumns = [
        { header: "Barang", value: "product" },
        { header: "Jumlah", value: "quantity" },
        { header: "Satuan", value: "product.uom" },
        { header: "Keterangan", value: "remark" }
    ]

    @bindable selectedStorage;
    selectedStorageChanged(newValue, oldValue) {
        if (this.selectedStorage && this.selectedStorage._id) {
            this.data.storageId = this.selectedStorage._id;
            this.data.storageCode = this.selectedStorage.code;
            this.data.storageName = this.selectedStorage.name;
        }
        else {
            this.data.storageId = 0;
            this.data.storageCode = "";
            this.data.storageName = "";
        }
    }

    @bindable selectedbuyer;
    selectedbuyerChanged(newValue, oldValue) {
        if (this.selectedbuyer && this.selectedbuyer.Id) {
            this.data.buyerId = this.selectedbuyer.Id;
            this.data.buyerCode = this.selectedbuyer.Code;
            this.data.buyerName = this.selectedbuyer.Name;
        }
        else {
            this.data.storageId = 0;
            this.data.storageCode = "";
            this.data.storageName = "";
        }
    }

    storageView = (storage) => {
        return `${storage.unit.name} - ${storage.name}`
    }

    buyerView = (buyer) => {
        return `${buyer.Name}`
    }

    get storageLoader() {
        return StorageLoader;
    }

    get buyerLoader(){
        return BuyerLoader;
    }

    get addItems() {
        return (event) => {
            this.data.items.push({})
        };
    }
}