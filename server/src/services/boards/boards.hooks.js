const { authenticate,  } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks')

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ setField({
      from: 'params.user._id',
      as: 'params.query.ownerID'
    }) ],
    get: [],
    create: [ setField({
      from: 'params.user._id',
      as: 'params.query.ownerID'
    }) ],
    update: [ setField({
      from: 'params.user._id',
      as: 'params.query.ownerID'
    }) ],
    patch: [ setField({
      from: 'params.user._id',
      as: 'params.query.ownerID'
    }) ],
    remove: [ setField({
      from: 'params.user._id',
      as: 'params.query.ownerID'
    }) ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
