"use strict";

import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import StatusCodes, { getReasonPhrase } from "http-status-codes";

/**
 * Validation handler middleware, must be placed after all validation is done
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
const validationErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        code: StatusCodes.BAD_REQUEST,
        message: getReasonPhrase(StatusCodes.BAD_REQUEST),
        data: errors.array(),
      },
    });
  }
  return next();
};

export default validationErrorHandler;
