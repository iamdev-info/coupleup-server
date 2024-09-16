"use strict";

import validationErrorHandler from "./validationErrorHandler";

/**
 * Merges the validator chain and the validation error handler based on the identifier
 *
 * @param {string} identifier
 */
export const get = (identifier: string) => [
  validationErrorHandler,
];
