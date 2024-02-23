const util = require("util");
const { getResumeDashboard, getResumeIdProcess } = require("./queries/resume");
const { updateResumeDashboard, createResumeIdProcess } = require("./mutations/resume");

const API = require('../utils/api');

const increaseResume = async ({ env, idTypeOfPost, eventID }) => {
    return new Promise(async (resolve, reject) => {

        try {
            const getDBResumeAPI = await API({
                env,
                _query: getResumeDashboard,
                _variables: { "id": idTypeOfPost },
            })

            const getDBResumeProcessAPI = await API({
                env,
                _query: getResumeIdProcess,
                _variables: { "id": eventID },
            })

            console.log(`-- getDBResumeAPI --`, JSON.stringify(getDBResumeAPI));
            console.log(`-- getDBResumeProcessAPI --`, JSON.stringify(getDBResumeProcessAPI));

            // const existProcess = getDBResumeProcessAPI?.data?.getResumeIdProcess?.id || "";

            const existProcess = getDBResumeProcessAPI?.data?.getResumeIdProcess;

            if (getDBResumeProcessAPI?.data?.getResumeIdProcess?.id) {
                console.log(`-- PROCCESS ID REPETIDO --`);
                reject(JSON.stringify({ msg: "PROCCESS ID REPETIDO" }));

            } else {
                // la propiedad existe
                const newCount = getDBResumeAPI?.data?.getResumeDashboard?.count || 0;
                const setDBResumeAPI = await API({
                    env,
                    _query: updateResumeDashboard,
                    _variables: {
                        input: {
                            "id": idTypeOfPost,
                            "count": parseInt(newCount) + 1,
                        }
                    },
                })
                //INSERT DEL ID PROCCESS
                const createDBProcessAPI = await API({
                    env,
                    _query: createResumeIdProcess,
                    _variables: {
                        input: {
                            "id": eventID,
                        }
                    },
                })

                console.log(`-- setDBResumeAPI -- ${JSON.stringify(setDBResumeAPI)}`);
                console.log(`-- createDBProcessAPI -- ${JSON.stringify(createDBProcessAPI)}`);

                resolve({ msg: `Contador INcrementado para: ${idTypeOfPost}` })
                // resolve({
                //     idProcess: createDBProcessAPI.data.createResumeIdProcess.id,
                //     id: setDBResumeAPI.data.updateParameters.id,
                //     correlative: setDBResumeAPI.data.updateParameters.correlative
                // });
            }

            // eventIDCreated = getDBResumeAPI?.data?.getResumeDashboard?.lasteventID || 0;

            console.log(`-- existProcess --`, JSON.stringify(existProcess));

            // if (typeof existProcess !== "undefined" || existProcess !== "-") {
            //     // No es nulo
            //     console.log(`-- PROCCESS ID REPETIDO --`);
            //     reject(JSON.stringify({ msg: "PROCCESS ID REPETIDO" }));

            // } else {
            // if(existProcess){


            //     } else {

            //         console.log(`-- PROCCESS ID REPETIDO --`);
            //         reject(JSON.stringify({ msg: "PROCCESS ID REPETIDO" }));

            // }



        } catch (err) {
            console.log("----ERROR TRY-CATH - increaseResume()----", err);
            reject(JSON.stringify(err));
        }
    })
}





module.exports = {
    increaseResume
}