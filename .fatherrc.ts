export default {
  entry: 'src/components/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  disableTypeCheck: false,
  runtimeHelpers: true,
  include: /node_modules/,
  nodeResolveOpts: {
    modulesOnly: true,
  },
};