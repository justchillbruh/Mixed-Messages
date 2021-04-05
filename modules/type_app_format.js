var typesOfApp = ["Game", "Website", "Generator"];

var formats = {
    game(idea, rule) {
        return `Make a game with the theme/idea keyword "${idea}", and with the rule "${rule}".`;
    },
    website(idea, rule) {
        return `Build a website based on the keyword "${idea}", but your rule is "${rule}".`;
    },
    generator(idea, rule) {
        return `Create a generator that outputs something related to "${idea}", with the rule "${rule}".`;
    }
};

module.exports = {type: typesOfApp, format: formats};