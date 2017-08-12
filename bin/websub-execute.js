#! /usr/bin/env node
var EventSource = require('eventsource');
var shelljs = require("shelljs");
var argv = require('yargs').boolean('i').default({
    "i": false
}).describe('u', "EventSource URL.")
    .describe('i', "Execute on launch.")
    .usage('Usage: $0 [-s shell] [-h] [-i] -- [command]')
    .help('h')
    .alias('u', 'url')
    .alias('h', 'help')
    .alias('s', 'shell')
    .alias('i', 'initial-execute')
    .argv;

var executeCommand = argv._.join(" ");

var exec_params = {
    silent: false
};

if (argv.shell) {
    exec_params.shell = argv.shell;
}

const url = argv.url;

const hubUrl = "https://websub-to-eventsource.herokuapp.com/events?from=" + encodeURIComponent(url);

const es = new EventSource(hubUrl);
es.on("message", function (e) {
    if (e.data === url) {
        console.log("Received event! Executing...");
        execute();
    }
});

require('console-stamp')(console);

function execute() {
    console.log("Executing: '" + executeCommand + "'.");
    shelljs.exec(executeCommand, exec_params);
}

if (argv['i']) {
    execute();
}
