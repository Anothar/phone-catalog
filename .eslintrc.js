module.exports = {
  extends: [
    "prettier",
  ],
  "plugins": ["prettier"],
  rules: {
    "prettier/prettier": "error" ,
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": ["state"]
      }
    ],
    "no-console": "off",
  }
};
