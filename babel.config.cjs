module.exports = {
  preset: [
    ['@babel/preset-env', { targets: { node: 'current', esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
