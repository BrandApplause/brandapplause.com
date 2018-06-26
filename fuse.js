const {
  FuseBox,
  HTMLPlugin,
  SassPlugin,
  CSSPlugin,
  WebIndexPlugin
} = require("fuse-box");
const fuse = FuseBox.init({
  package: {
    name: "brandApplause",
    main: "index.js"
  },
  homeDir: "src",
  target: "browser@es5",
  output: "build/$name.js",
  plugins: [
    WebIndexPlugin({ template: "src/index.html" }),
    HTMLPlugin(),
    [SassPlugin({indentedSyntax: true}), CSSPlugin()]
  ]
});
fuse.dev();
fuse
  .bundle("app")
  .instructions(" > index.js")
  .hmr({ reload: true })
  .watch();
fuse.run();
