var typesOfApp = ["Game", "Website", "Generator"];

var formats = {
    game(idea, rule) {
        return `Make a game about ${idea}, with the rule "${rule}".`;
    },
    website(idea, rule) {
        return `Build a website based on ${idea}, but your rule is "${rule}".`;
    },
    generator(idea, rule) {
        return `Create a generator that outputs ${idea}, with the rule "${rule}".`;
    }
};

module.exports = {type: typesOfApp, format: formats};