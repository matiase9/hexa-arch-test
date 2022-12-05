import { request, response } from 'express';
import { Ok, BadRequest } from '../../../../helpers/http'
import { isEmptyObject } from '../../../../utils';
import { saveSitters } from '../application/saveSitters.app';
import { mapSitters } from '../application/mapSitters.app';
import { getSitterMemory } from './sitters.memory';

export default class SittersController {

  constructor() {
    this.findAll = this.findAll.bind(this);
    this.save = this.save.bind(this);
  }

  public async findAll(req: request, res: response) {
    const memory = getSitterMemory()
    let data = await memory.readMemo()
    data = await mapSitters(data);
    return Ok(res, data)
  }

  public async save(req: request, res: response) {
    const body = req.body
    if (isEmptyObject(body)) {
      return BadRequest(res)
    }

    const response = await saveSitters(body)
    return Ok(res, response)
  }

  public async remove(req: request, res: response) {
    const memory = getSitterMemory()
    await memory.clearMemo()
    return Ok(res, {})
  }
}