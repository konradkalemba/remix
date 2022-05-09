// process.env.NODE_ENV is provided by Remix at compile time
interface ProcessEnv {
  NODE_ENV: "development" | "production" | "test";
}
interface Process {
  env: ProcessEnv;
}
var process: Process;
