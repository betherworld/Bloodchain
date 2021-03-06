'use strict'

const { Keccak } = require('sha3');
const converter = require('hex2dec');
const stringify = require('json-stable-stringify')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Drive = use('Drive')

class Transaction extends Model {
  static get updatedAtColumn () {
    return null
  }

  lab () {
    return this.belongsTo('App/Models/Lab')
  }

  sample () {
    return this.belongsTo('App/Models/Sample')
  }

  async calculateTransactionHash () {
    await this.loadMany(['lab', 'sample'])

    let fileHashString = '';
    if (this.file_path) {
      const fileHash = new Keccak(256)
      fileHash.update(await Drive.get(this.file_path))
      fileHashString = fileHash.digest('hex')
    }

    const transactionHash = new Keccak(256)
    transactionHash.update(stringify(this.toJSON()) + fileHashString)
    return converter.hexToDec('0x' + transactionHash.digest('hex'))
  }
}

module.exports = Transaction
