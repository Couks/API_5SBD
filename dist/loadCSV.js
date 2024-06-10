"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs = __importStar(require("fs"));
const csv = __importStar(require("csv-parser"));
const prisma = new client_1.PrismaClient();
async function loadCsvToTemporaryTable(filePath) {
    const results = [];
    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", async () => {
        for (const result of results) {
            await prisma.temporaryOrder.create({
                data: {
                    orderId: result["order-id"],
                    orderItemId: result["order-item-id"],
                    purchaseDate: new Date(result["purchase-date"]),
                    paymentsDate: new Date(result["payments-date"]),
                    buyerEmail: result["buyer-email"],
                    buyerName: result["buyer-name"],
                    cpf: result["cpf"],
                    buyerPhoneNumber: result["buyer-phone-number"],
                    sku: result["sku"],
                    productName: result["product-name"],
                    quantityPurchased: parseInt(result["quantity-purchased"], 10),
                    currency: result["currency"],
                    itemPrice: parseFloat(result["item-price"]),
                    shipServiceLevel: result["ship-service-level"],
                    recipientName: result["recipient-name"],
                    shipAddress1: result["ship-address-1"],
                    shipAddress2: result["ship-address-2"],
                    shipAddress3: result["ship-address-3"],
                    shipCity: result["ship-city"],
                    shipState: result["ship-state"],
                    shipPostalCode: result["ship-postal-code"],
                    shipCountry: result["ship-country"],
                    iossNumber: result["ioss-number"],
                },
            });
        }
        console.log("CSV data loaded into temporary table.");
    });
}
loadCsvToTemporaryTable("path/to/your/csvfile.csv");
