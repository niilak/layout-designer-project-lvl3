var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

const scripts = () => {
  return src([
    "./node_modules/jquery/dist/jquery.min.js",
    // Здесь остальные скрипты
  ]).pipe(dest("./dist/js/"));
};

const sass2css = () => {
  return src([
    "app/scss/app.scss",
    // Путь к главному файлу scss, который будет компилироваться
  ])
    .pipe(sass())
    .pipe(concat("app.css"))
    .pipe(dest("./dist/styles/"));

  // Обработка через плагин sass, указание конечного файла и его месторасположение
};

// Компиляция Pug. Принцип работы такой же, как и у компиляции SASS
const pug2html = () => {
  return src(["app/pages/index.pug", "app/pages/chat.pug"])
    .pipe(pug())
    .pipe(dest("./dist/"));
};

// Создание svg спрайта из иконок
const svg2sprite = () => {
  const config = {
    mode: {
      stack: {
        // Activate the «css» mode
        sprite: "../sprite.svg",
      },
    },
  };

  return src(["./app/images/icons/*.svg"])
    .pipe(svgSprite(config))
    .pipe(dest("./dist/images/icons/"));
};
