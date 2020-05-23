let project_folder="dist";
let source_folder="src";

let parh={
    build:{
        html: project_folder+"/",
        css: project_folder+"/css/",
        js: project_folder+"/js/",
        img: project_folder+"/img/",
        fonts: project_folder+"/fonts/",
    },
    src: {
        html: project_folder+"/",
        css: project_folder+"/scss/style.scss",
        js: project_folder+"/js/script.js",
        img: project_folder+"/img/**/*.{jpn,png,svg,gif,ico,webp}",
        fonts: project_folder+"/fonts/*.ttf",
    },
    src: {
        html: source_folder+"/",
        css: source_folder+"/scss/style.scss",
        js: source_folder+"/js/script.js",
        img: source_folder+"/img/**/*.{jpn,png,svg,gif,ico,webp}",
        fonts: source_folder+"/fonts/*.ttf",
    },
    watch: {
        html: source_folder+"/**/*.html",
        css: source_folder+"/scss/**/*.scss",
        js: source_folder+"/js/**/*.js",
        img: source_folder+"/img/**/*.{jpn,png,svg,gif,ico,webp}",
    },
    clean:"./" + project_folder +"/"
}

let {src, dest } + require('gulp'),
    gulp = require('gulp'),
