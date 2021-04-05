const type_app = require('./modules/type_app_format.js');
const app_rules = require('./modules/rules.js');
const app_ideas = require('./modules/ideas.js');

console.log(app_rules.rule.test[1]);
console.log(app_ideas.idea[1]);

function randomAppType() {
    random_num = Math.floor(Math.random() * 3);
    return type_app.type[random_num];
}

app_type = randomAppType();
console.log(`Your app type is: ${app_type}`);

if (app_type === "Game") {
    console.log(type_app.format.game("Test Game Idea", "Test Game Rule"));
} else if (app_type === "Website") {
    console.log(type_app.format.website("Test Website Idea", "Test Website Rule"));
} else if (app_type === "Generator") {
    console.log(type_app.format.generator("Test Generator Idea", "Test Generator Rule"));
}