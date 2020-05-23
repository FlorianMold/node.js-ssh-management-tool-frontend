export class Logger {

    private static empty = (): void => {};

    /**
     * Logs a debug-message to the console.
     *
     * @param message message to be logged.
     * @param optionalParams optional-parameters
     */
    static debug = (message: any, ...optionalParams: any[]) =>
            process.env.REACT_APP_ENVIRONMENT !== 'production' && Logger.level(LOG_LEVEL.DEBUG) ?
                console.debug(message, optionalParams) : Logger.empty();

    /**
     * Logs a info-message to the console.
     *
     * @param message message to be logged.
     * @param optionalParams optional-parameters
     */
    static info = (message: any, ...optionalParams: any[]) =>
        process.env.REACT_APP_ENVIRONMENT !== 'production' && Logger.level(LOG_LEVEL.INFO) ?
            console.info(message, optionalParams) : Logger.empty();

    /**
     * Logs a warn-message to the console.
     *
     * @param message message to be logged.
     * @param optionalParams optional-parameters
     */
    static warn = (message: any, ...optionalParams: any[]) =>
        process.env.REACT_APP_ENVIRONMENT !== 'production' && Logger.level(LOG_LEVEL.WARN) ?
            console.warn(message, optionalParams) : Logger.empty();

    /**
     * Logs a error-message to the console.
     *
     * @param message message to be logged.
     * @param optionalParams optional-parameters
     */
    static error = (message: any, ...optionalParams: any[]) =>
        process.env.REACT_APP_ENVIRONMENT !== 'production' && Logger.level(LOG_LEVEL.ERROR) ?
            console.error(message, optionalParams) : Logger.empty();

    /**
     * Checks if the provided log-level is allowed to log to the console.
     *
     * @param logLevel log-level
     */
    private static level = (logLevel: number): boolean => {
        const appLevel = process.env.REACT_APP_LOG_LEVEL || LOG_LEVEL.ERROR;

        return +appLevel <= logLevel;
    }
}

enum LOG_LEVEL {
    DEBUG,
    INFO,
    WARN,
    ERROR,
}