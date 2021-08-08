stylelint: 
	npx stylelint ./app/scss/**/*.scss;

sass:
	sass --watch ./app/scss/style.scss ./app/css/style.css
	npx stylelint --fix ./app/css/style.css

pug:
	pug ./app/pug/* --pretty -o -w ./build/