lint: 
	npx stylelint ./app/scss/**/*.scss;

sass:
	sass --watch ./app/scss/style.scss ./build/css/style.css
	npx stylelint --fix ./app/css/style.css

pug:
	pug -w ./app/pug/* --pretty -o ./build/


deploy:
	npx surge ./build/
