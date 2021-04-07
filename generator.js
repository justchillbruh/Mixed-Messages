const type_app = require('./modules/type_app_format.js');
const app_rules = require('./modules/rules.js');
const app_ideas = require('./modules/ideas.js');

function randomAppType() {
    random_num = Math.floor(Math.random() * 3);
    return type_app.type[random_num];
}

function randomIdea() {
    random_num = Math.floor(Math.random() * app_ideas.idea.length);
    return app_ideas.idea[random_num];
}

randomRule = (aType) => {
    random_num = Math.floor(Math.random() * aType.length);
    return aType[random_num];
}

appType = randomAppType();
newIdea = randomIdea();

if (appType === "Game") {
    theRule = randomRule(app_rules.rule.game);
    console.log(type_app.format.game(newIdea, theRule));
} else if (appType === "Website") {
    theRule = randomRule(app_rules.rule.website);
    console.log(type_app.format.website(newIdea, theRule));
} else if (appType === "Generator") {
    theRule = randomRule(app_rules.rule.generator);
    console.log(type_app.format.generator(newIdea, theRule));
}