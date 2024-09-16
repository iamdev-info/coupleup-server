"use strict";

import User from "./../models/User";

export const getAll = async () => {
  try {
    const result = await User.fetchAll();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getByID = async (userID: string) => {
  try {
    const result = await User.fetchByID(userID);
    return result;
  } catch (error) {
    throw error;
  }
};

export const modifyByID = async (userID: string, modifications: any) => {
  try {
    const result = await User.modifyByID(userID, modifications);
    return result;
  } catch (error) {
    throw error;
  }
};

export const create = async (userBody) => {
  try {
    const { name, email, password } = userBody;
    const newUser = {
      name,
      email,
      password,
    };

    const result = await User.insertOne(newUser);
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteByID = async (userID) => {
  try {
    const result = await User.deleteByID(userID);
    return result;
  } catch (error) {
    throw error;
  }
};

export const userService = {
  getAll,
  getByID,
  modifyByID,
  create,
  deleteByID
}