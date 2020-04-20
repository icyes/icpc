// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };

const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  useBabelRc,
  addBabelPresets,
  addBabelPlugins,
  addPostcssPlugins
} = require('customize-cra');


const debugeLessLoader = () => config => {

  config.devtool = "source-map";
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
  setTimeout(() => {
    // if (loaders[4])
    console.log('config----relus', loaders[loaders.length - 3]);
  }, 2000)
  loaders[loaders.length - 3].use[2].options.modules = true;
  loaders[loaders.length - 3].use[2].options.localIdentName = '[local]';
  return config;
}

module.exports = override(
  debugeLessLoader(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  }),
  addPostcssPlugins([require('autoprefixer')({})]),
  ...addBabelPresets(
    [
      "@babel/preset-env", {
        "targets": {
          "browsers": ["> 0.25%, ie >= 8,not dead,ie 8,ie 9,ie 10"]
        },
        // "useBuiltIns": "usage"
      }

    ], "@babel/preset-react"
  ),
  ...addBabelPlugins(
    ["@babel/plugin-transform-runtime", {
      "corejs": 3
    }],
    ["transform-es5-property-mutators"],
    "@babel/plugin-transform-object-assign",
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }]
  )
);
