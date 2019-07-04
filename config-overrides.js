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
  addBabelPresets
} = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  })
);
