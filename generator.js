const type_app = require('./modules/type_app_format.js');
const app_rules = require('./modules/rules.js');
const app_ideas = require('./modules/ideas.js');

console.log(app_rules.rule.test[1]);

function randomAppType() {
    random_num = Math.floor(Math.random() * 3);
    return type_app.type[random_num];
}

function randomIdea() {
    random_num = Math.floor(Math.random() * app_ideas.idea.length);
    return app_ideas.idea[random_num];
}

appType = randomAppType();
newIdea = randomIdea();

console.log(`Your app type is: ${appType}`);
console.log(`Your idea keyword is: ${newIdea}`);

if (appType === "Game") {
    console.log(type_app.format.game(newIdea, "Test Game Rule"));
} else if (appType === "Website") {
    console.log(type_app.format.website(newIdea, "Test Website Rule"));
} else if (appType === "Generator") {
    console.log(type_app.format.generator(newIdea, "Test Generator Rule"));
}