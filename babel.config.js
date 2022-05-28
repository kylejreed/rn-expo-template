module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@utils": "./src/utils",
            "@views": "./src/views",
            "@stores": "./src/stores",
          },
        },
      ],
    ],
  }
}
