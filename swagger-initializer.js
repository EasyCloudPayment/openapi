window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
        {name:'OpenBankingAPI',url:"https://openapi.success-ultra.com/open-banking-api.json"},
        {name:'BankGateAPI',url:"https://openapi.success-ultra.com/bank-gate-api.json"},
        {name:'PaymentLinkRegistryAPI',url:"https://openapi.success-ultra.com/payment-link-registry-api.json"}
    ],
    "urls.primaryName": "OpenBankingAPI",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

};