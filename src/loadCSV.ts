import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import csv from "csv-parser";

const prisma = new PrismaClient();

async function loadCsvToTemporaryTable(filePath: string) {
  const results: any[] = [];

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

loadCsvToTemporaryTable(".src/assets/data_test.csv");
