const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = async () => {
  const initialConfig = await getDefaultConfig(__dirname);
  const {
    resolver: { sourceExts, assetExts, extraNodeModules },
  } = initialConfig;
  const aliases = {
    ':atoms': `${__dirname}/src/components/atoms`,
    ':pages': `${__dirname}/src/components/screens`,
    ':services': `${__dirname}/src/services`,
    ':hooks': `${__dirname}/src/hooks`,
    ':utils': `${__dirname}/src/utils`,
    ':molecules': `${__dirname}/src/components/molecules`,
    ':helpers': `${__dirname}/src/helpers`,
    ':store': `${__dirname}/src/store`,
    ':colors': `${__dirname}/src/colors`,
    ':enums': `${__dirname}/src/enums`,
    ':types': `${__dirname}/src/types`,
    ':assets': `${__dirname}/src/assets`,
    ':constants': `${__dirname}/src/constants`,
    ':screens': `${__dirname}/src/screens`,
    ':helper': `${__dirname}/src/helper`,
  };
  const extraModules = { ...extraNodeModules, ...aliases };

  return mergeConfig(initialConfig, {
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules: extraModules,
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      unstable_allowRequireContext: true,
    },
  });
};
