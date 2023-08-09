/**
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */

/**
 * The names of modules to load are stored as a comma-delimited string in the
 * `MODULES` env var.
 */
// const moduleNames = process.env.MODULES.split(',');
/**
 * The array of imported modules.
 */
// const modules = moduleNames.map((name) => require(`./${name}`));

/**
 * This async handler iterates over the given modules and awaits them.
 *
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 *
 */

const { responses, api, utils } = require('/opt/nodejs/index');
const ENVIROMENT = process.env.ENV;




exports.handler = async (event, context, callback) => {
  let idUser;

  console.log(`------event-------: ${JSON.stringify(event)}`);

  try {
    const body = event.request.userAttributes;
    idUser = body.email;
  } catch (e) {
    idUser = event.idUser;
  }
  try {
    console.log(`------ENVIROMENT-------: ${ENVIROMENT}`);
    const dateNow = utils.calculateCurrentDate();
    console.log(`------dateNow-------: ${JSON.stringify(dateNow)}`);

    const createDBAccess = await api.createUserAccess({
      env: ENVIROMENT,
      variables: {
        idUser: idUser,
        module: "login",
        date: dateNow.now,
        day: dateNow.day,
        month: dateNow.month,
        year: dateNow.year,
        hour: dateNow.hourFull,
      }

    });
    console.log(`------createDBAccess-------: ${JSON.stringify(createDBAccess)}`);

    //  return responses.Response(ENVIROMENT, 200, {
    //    message: JSON.stringify(createDBAccess),
    //   });

    // } catch (e) {
    //   return responses.Response(ENVIROMENT, 500, { error: e });
    //}
  } catch (error) {
    console.error(error);
    callback(error);
  }

  // Devolver el evento modificado para que Cognito pueda procesarlo
  callback(null, event);


};
