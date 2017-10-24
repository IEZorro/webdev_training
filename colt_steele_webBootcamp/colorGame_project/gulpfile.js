const browsersync = require('browser-sync'),
  gulp          = require('gulp')
  vf            = require('vinyl-file'),
  vss           = require('vinyl-source-stream'),
  vb            = require('vinyl-buffer');

gulp.task('start',function(){
const start = () => {
  const server = browsersync.create();
  server.init({
    baseDir: 'app/color_game.html'
  });
  return server.watch('app/css/*.css', (event, file) => {
    if (evt === 'change' && file.indexOf('.css') === -1)
        server.reload();
    if (evt === 'change' && file.indexOf('.css') !== -1)
      vf.readSync(file)
        .pipe(vss(file))
        .pipe(vb())
        .pipe(server.stream());
  });
};})
