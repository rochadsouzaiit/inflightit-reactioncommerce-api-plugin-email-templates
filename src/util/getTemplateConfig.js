/**
 * @summary Returns a template source for SSR consumption
 * @param {Object} context App context
 * @param {String} shopId Shop ID
 * @param {String} templateName Email template name
 * @param {String} language Email language
 * @returns {Object} returns source
 */
export default async function getTemplateConfig(context, shopId, templateName, language) {
  const { Shops, Templates } = context.collections;

  const shop = await Shops.findOne({
    _id: shopId
  }, {
    projection: {
      language: 1
    }
  });
  if (!shop) throw new Error(`Shop with ID ${shopId} not found`);

  const { language: shopLanguage } = shop;
  let templateDoc;

  // check database for a matching template
  templateDoc = await Templates.findOne({
    language: language || shopLanguage,
    name: templateName,
    shopId,
    type: "email"
  });

  if (templateDoc) return templateDoc;

  // Add fallback for primary store
  const primaryShop = await Shops.findOne({
    shopType: "primary"
  }, {
    projection: {
      id: 1
    }
  });

  if (!primaryShop) throw new Error(`No email template ${templateName} found in primary store for language ${language || shopLanguage}`);

  templateDoc = await Templates.findOne({
    language: language || shopLanguage,
    name: templateName,
    shopId: primaryShop._id,
    type: "email"
  });


  if (!templateDoc) throw new Error(`No email template ${templateName} found for language ${language || shopLanguage}`);

  return templateDoc;
}
