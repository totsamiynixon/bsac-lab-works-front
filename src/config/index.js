const devConfig = {
  apiUrl: "http://localhost:1080"
};
const stagingConfig = {
  apiUrl: "http://localhost:1080"
};
const prodConfig = {
  apiUrl: "http://localhost:1080"
};

const config = {};
if (process.env.NODE_ENV == "development") {
  Object.assign(config, devConfig);
} else if (process.env.NODE_ENV == "staging") {
  Object.assign(config, stagingConfig);
} else {
  Object.assign(config, prodConfig);
}
export default config;
