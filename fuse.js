const pug = require('pug');
const {
  FuseBox,
  SassPlugin,
  PostCSSPlugin,
  CSSPlugin,
  WebIndexPlugin
} = require('fuse-box');

const fuse = FuseBox.init({
  package: {
    name: 'brandApplause',
    main: 'index.js'
  },
  homeDir: 'src',
  target: 'browser@es5',
  output: 'build/$name.js',
  plugins: [
    WebIndexPlugin({
      templateString: pug.renderFile('./src/index.pug', { pretty: true })
    }),
    [
      SassPlugin({ indentedSyntax: true }),
      PostCSSPlugin([require('autoprefixer')]),
      CSSPlugin({ group: 'bundle.css' })
    ],
    CSSPlugin()
  ]
});

fuse.dev();
fuse
  .bundle('app')
  .instructions(' > index.js')
  .hmr({ reload: true })
  .watch();
fuse.run();
