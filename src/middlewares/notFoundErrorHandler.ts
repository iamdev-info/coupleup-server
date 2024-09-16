"use strict";

import { NextFunction, Request, Response } from "express";
import StatusCodes, { getReasonPhrase } from "http-status-codes";

/**
 * Error response middleware for 404 not found
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  return res.status(StatusCodes.NOT_FOUND).json({
    error: {
      code: StatusCodes.NOT_FOUND,
      message: getReasonPhrase(StatusCodes.NOT_FOUND),
    },
  });
};

export default notFoundErrorHandler;
