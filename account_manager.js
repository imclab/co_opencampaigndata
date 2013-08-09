/**
 * Logic for user accounts, throttling, and user account activity logging.
 *
 * Logic for creating and retrieving user accounts as well as tracking user
 * account activity, limiting queries per second if necessary to prevent abuse.
 * Note that logic for actual communication with the database resides in
 * account_db_facade, making this a decorator for that module.
 *
 * @author A. Samuel Pottinger (samnsparky, http://gleap.org)
 * @license GNU GPLv3
**/

var MAX_QPM = 6000;


/**
 * Get the account record for a user with the given email address.
 *
 * Get the existing account record for a user with the given email address or
 * creating a new account record if one does not already exists.
 *
 * @param {String} email The email address of the user for whom an account
 *      record is being requested.
 * @return {Q.promise} Promise that resolves to the Account record for the user
 *      with the given email address.
**/
exports.getOrCreateUserByEmail = function(email)
{

};


/**
 * Determine if an account can make the given query.
 *
 * Determine if a user account can make the given request given throttling
 * (request rate limiting) and permissions.
 *
 * @param {Object} account Object describing the Account that is making the
 *      given query. Should be an Account Object as described in the structures
 *      section of the project wiki.
 * @param {Object} query Object describing the query that the user wants to
 *      execute. Should be a Query Object as described in the structures section
 *      of the project wiki.
 * @return {Q.promise} Promise that resolves to true if the user can fulfill
 *      the given query and false otherwise.
**/
exports.canFulfillQuery = function(account, query)
{

};


/**
 * Log a user request and clean up that user's old log entries.
 *
 * Log a request executed on behalf of a user and remove old log entries that
 * executed without error.
 *
 * @param {Object} account Object with account information for the user that
 *      executed the given request. See the Account Object structure in the
 *      structures section of the project wiki.
 * @param {Object} query The query executed. See the Query Object structure in
 *      the structures section of the project wiki.
 * @param {String} error Optional parameter. If provided, the error encountered
 *      while fulfilling this user's request (executing the provided query for
 *      the provided user).
**/ 
exports.updateAccountLog = function(account, query, error)
{
    
};
