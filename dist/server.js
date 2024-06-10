"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderRoutes_1 = require("./presentation/routes/OrderRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", OrderRoutes_1.orderRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
