/**
 * Global error-handling middleware
 *
 * Replaces the default express global error handler by providing a json
 * response instead of the default HTML response.
 *
 * <https://expressjs.com/en/guide/error-handling.html>
 *
 * > You define error-handling middleware last, after other `app.use()` and
 * > routes calls
 *
 * <https://github.com/expressjs/generator/issues/78#issuecomment-103152636>
 *
 * > In Express, an error middlware is differentiated from a normal middleware
 * > by the function taking 4 arguments rather than 3 arguments.
 * > I.e. `function (req, res, next)` vs `function (err, req, res, next)`.
 *
 * To prevent ESLint to raise an error for unused `next` var, `no-unused-vars`
 * rule is configured with `argsIgnorePattern: 'next'` setting.
 */

export const globalErrorHandler = () => {
  return (err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
      code: err.code || 'INTERNAL_SERVER_ERROR',
      message: err.message || 'internal server error'
    });
  };
};
