
const {
    API_ID_QA,
    API_KEY_QA,
    API_ENDPOINT_QA,
    API_ID_PROD,
    API_KEY_PROD,
    API_ENDPOINT_PROD,
} = require("../constant");

const paramsQA = {
    type: "qa",
    message: ">>>>>>>> QA <<<<<<<<<<<<",
    API_ID: API_ID_QA,
    API_KEY: API_KEY_QA,
    API_ENDPOINT: API_ENDPOINT_QA,
}
const paramsPROD = {
    type: "prod",
    message: ">>>>>>>> PRODUCTION <<<<<<<<<<<<",
    API_ID: API_ID_PROD,
    API_KEY: API_KEY_PROD,
    API_ENDPOINT: API_ENDPOINT_PROD,
}

const getEnviroment = (ENVIROMENT) => ENVIROMENT === "prod" ? paramsPROD : paramsQA

module.exports = {
    getEnviroment
};