const util = require("util");


// const { createThingsUser, updateThingsUser } = require("./mutations/thingsUser");
// const { listUsers } = require("./graphql/mutations");
const { listUsers } = require("./queries/users");
const { createUsers, updateUsers, setUserAccess } = require("./mutations/users");

const API = require('../utils/api');

const createUser = async ({ env, variables }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const setDBUserAPI = await API({
                env,
                _query: createUsers,
                _variables: {
                    input: {
                        ...variables
                    }
                },
            })

            console.log(`-- setDBUserAPI -- ${JSON.stringify(setDBUserAPI)}`);

            resolve({ ...setDBUserAPI });

        } catch (err) {
            console.log("----ERROR TRY-CATH - createUser()----", err);
            reject(JSON.stringify(err));
        }
    })
}
const updateUser = async ({ env, variables }) => {
    return new Promise(async (resolve, reject) => {

        try {
            const setDBUserAPI = await API({
                env,
                _query: updateUsers,
                _variables: {
                    input: {
                        ...variables
                    }
                },
            })

            console.log(`-- setDBUserAPI -- ${JSON.stringify(setDBUserAPI)}`);

            resolve({ ...setDBUserAPI });

        } catch (err) {
            console.log("----ERROR TRY-CATH - createUser()----", err);
            reject(JSON.stringify(err));
        }
    })
}

const getUsers = async ({ env, variables = {} }) => {

    // variables :  filter: { 
    //     thingsThingsUserId: { eq: `${idD}` },
    //     isActive: { eq: true }
    //   }

    // QUERY
    const getAPIUser = await API({
        env,
        _query: listUsers,
        ...variables,
        // _variables: {
        //     filter: {
        //         ...variables,
        //     }
        // },
    });
    console.log(`-- getAPIUser -- ${JSON.stringify(getAPIUser)}`);

    return getAPIUser
};


// ACCESS
const createUserAccess = async ({ env, variables }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const setDBUserAPI = await API({
                env,
                _query: setUserAccess,
                _variables: {
                    input: {
                        ...variables
                    }
                },
            })

            console.log(`-- createUserAccess -- ${JSON.stringify(setDBUserAPI)}`);

            resolve({ ...setDBUserAPI });

        } catch (err) {
            console.log("----ERROR TRY-CATH - createUserAccess()----", err);
            reject(JSON.stringify(err));
        }
    })
}



module.exports = {
    createUser,
    updateUser,
    getUsers,
    createUserAccess
}