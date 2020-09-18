enum LOG_LEVEL {
    DEBUG,
    INFO,
    WARN,
    ERROR,
}

/**
 * Logs a debug-message to the console.
 *
 * @param message message to be logged.
 * @param optionalParams optional-parameters
 */
export const debug = (message: any, ...optionalParams: any[]) =>
    process.env.REACT_APP_ENVIRONMENT !== 'production' && level(LOG_LEVEL.DEBUG) ?
        console.debug(message, optionalParams) : empty();

/**
 * Logs a info-message to the console.
 *
 * @param message message to be logged.
 * @param optionalParams optional-parameters
 */
export const info = (message: any, ...optionalParams: any[]) =>
    process.env.REACT_APP_ENVIRONMENT !== 'production' && level(LOG_LEVEL.INFO) ?
        console.info(message, optionalParams) : empty();

/**
 * Logs a warn-message to the console.
 *
 * @param message message to be logged.
 * @param optionalParams optional-parameters
 */
export const warn = (message: any, ...optionalParams: any[]) =>
    process.env.REACT_APP_ENVIRONMENT !== 'production' && level(LOG_LEVEL.WARN) ?
        console.warn(message, optionalParams) : empty();

/**
 * Logs a error-message to the console.
 *
 * @param message message to be logged.
 * @param optionalParams optional-parameters
 */
export const error = (message: any, ...optionalParams: any[]) =>
    process.env.REACT_APP_ENVIRONMENT !== 'production' && level(LOG_LEVEL.ERROR) ?
        console.error(message, optionalParams) : empty();

/**
 * Checks if the provided log-level is allowed to log to the console.
 *
 * @param logLevel log-level
 */
const level = (logLevel: number): boolean => {
    const appLevel = process.env.REACT_APP_LOG_LEVEL || LOG_LEVEL.ERROR;
    return +appLevel <= logLevel;
}

const empty = (): void => {
};