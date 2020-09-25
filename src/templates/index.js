import coreOrderNewTemplate from "./orders/new.js";

export default [
  {
    language: "pt",
    title: "Encomenda - Nova encomenda",
    name: "orders/new",
    template: coreOrderNewTemplate,
    subject: "Recebemos a sua encomenda - {{order.referenceId}}"
  }
];
