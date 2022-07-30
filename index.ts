import colors from "colors";

async function info(text: string) {
  console.log(`${colors.green.bold("INFO")} ${text}`);
}

async function warn(text: string) {
  console.log(`${colors.yellow.bold("WARN")} ${text}`);
}

async function success(text: string) {
  console.log(`${colors.green.bold("SUCCESS")} ${text}`);
}

async function error(text: string) {
  console.log(`${colors.red.bold("ERROR")} ${text}`);
}

async function event(text: string) {
  console.log(`${colors.yellow.magenta("EVENT")} ${text}`);
}

info("hello world");
warn("hello world");
success("hello world");
error("hello world");
event("hello world");

// @ts-ignore
module.exports = { info, warn, success, error, event };
