import { response } from 'express';
import * as httpStatus from 'http-status';

export const Ok = (res: response, data: any) => {
  return res.status(httpStatus.OK).send(data)
}

export const NotFound = (res: response, data: any = { message: 'Not found' }) => {
  return res.status(httpStatus.NOT_FOUND).send(data)
}

export const BadRequest = (res: response, data: any = { message: 'Bad Request' }) => {
  return res.status(httpStatus.BAD_REQUEST).send(data)
}