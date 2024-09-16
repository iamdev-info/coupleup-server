"use strict";

import { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import { userService } from "../services/users";
/**
 * Fetches all users and return them as a JSON
 *
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userService.getAll();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetches an User based on its ID, and returns it as a JSON
 *
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
export const getByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.params;
    const result = userService.getByID(userID);
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Updates an User based on its ID, and returns the updated user as a JSON
 *
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
export const modifyByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userID } = req.params;
  const modifications = req.body;
  try {
    const result = await userService.modifyByID(userID, modifications);
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Creates a new User, and returns it as a JSON
 *
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userBody = req.body;
    const result = await userService.create(userBody);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Deletes a User based on its ID, and returns the deleted user as a JSON
 *
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Response}
 */
export const deleteByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.params;
    const result = await userService.deleteByID(userID);
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};
