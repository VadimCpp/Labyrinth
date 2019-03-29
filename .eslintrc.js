module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "arrow-body-style": "off",
        "import/prefer-default-export": "off",
        "comma-dangle":"off",
        "no-use-before-define": "off",
        "react/prop-types": "off",
        "react/jsx-filename-extension": "off",
        "react/prefer-stateless-function": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/accessible-emoji": "off",
        "no-case-declarations": "off",
        "react/sort-comp": "off",
        "react/destructuring-assignment": "off",
        "no-restricted-syntax": "off",
        "padded-blocks": "off",
        "no-param-reassign": "warn",
        "global-require": "off",
        "no-plusplus": [
          "error",
          {
            "allowForLoopAfterthoughts": true
          }
        ],
        "import/no-unresolved": [
          "error",
          {
            "ignore": [ ".png" ]
          }
        ],
        "max-len": ["error", { "code": 120 }]
    },
};