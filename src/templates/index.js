import coreOrderNewTemplate from "./orders/new.js";
import coreOrderNewShopOwnerTemplate from "./orders/new-shop-owner.js";

export default [
  {
    language: "pt",
    title: "Confirmamos a sua encomenda",
    name: "orders/new",
    template: coreOrderNewTemplate,
    subject: "Recebemos a sua encomenda - {{order.referenceId}}"
  },
  {
    language: "pt",
    title: "Tem uma nova encomenda",
    name: "orders/shop-owner/new",
    template: coreOrderNewShopOwnerTemplate,
    subject: "{{shopName}} tem uma nova encomenda ({{order.referenceId}})"
  }
];
