
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "/public/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      // the name of the generated manifest file
      filename: "manifest.webmanifest",

      // we aren't using webpack to generate our html so we
      // set inject to false
      inject: false,

      // set fingerprints to `false` to make the names of the generated
      // files predictable making it easier to refer to them in our code
      fingerprints: false,

      name: "Images App",
      short_name: "Images App",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",

      icons: [
        {
          src: path.resolve(
            __dirname,
            "/icons/icon-512x512.png"
            ),
          // the plugin will generate an image for each size
          // included in the size array
          size: [72, 96, 128, 144, 152, 192, 384, 512]
        }
      ]
    })
  ]
};

module.exports = config;
