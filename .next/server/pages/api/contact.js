"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/contact.js

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    const { name , email , message  } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Missing fields"
        });
    }
    // Step 1: Create transporter
    const transporter = external_nodemailer_default().createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: "info@casaclad.ca",
            pass: "Pcls@2024"
        }
    });
    try {
        // Step 2: Send the email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "info@casaclad.ca",
            subject: "New Contact Form Submission",
            text: message,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        console.error("Email send error:", err);
        return res.status(500).json({
            message: "Error sending email"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6184));
module.exports = __webpack_exports__;

})();