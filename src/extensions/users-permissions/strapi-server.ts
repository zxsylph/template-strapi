const utils = require('@strapi/utils')
const { getService } = require('../users-permissions/utils')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const {
  validateCallbackBody
} = require('../users-permissions/controllers/validation/auth')

const { setMaxListeners } = require('process')
const { sanitize } = utils
const { ApplicationError, ValidationError } = utils.errors
const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state
  const userSchema = strapi.getModel('plugin::users-permissions.user')
  return sanitize.contentAPI.output(user, userSchema, { auth })
}

module.exports = (plugin) => {
  return plugin
}
