/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["en", "it"],
    catalogs: [
      {
        path: "src/locales/{locale}/messages",
        include: ["src"],
      },
    ],
    format: "po",
  };