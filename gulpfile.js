const { src, dest, series } = require("gulp");

// Обробляємо html файли
function html() {
    return src("app/**/*.html")  
          .pipe(dest("build/")); 
}

// Обробляємо файли зображень
function img() {
    return src("app/img/*.{png,jpg,jpeg,gif}", 
               { base: "app" })                
          .pipe(dest("build/"));  
}

// Збирання проекту
exports.build = series(html, img);