import { execSync } from "child_process";

console.log("deploy preview start");

const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf-8" });
console.log(output);

console.log("deploy preview end");
