import Koa, { Context, Next } from 'koa'

import * as logger from './logger'

let reqNo = 1

const app = new Koa()

logger.init()

app.use(handler)

app.listen(3000)

function handler(ctx: Context) {
  const path = ctx.path

  switch (path) {
    case '/': {
      ctx.body =
        '<h1>This is the root page! Available routes are /save-request-info and /save-request-cookies.</h1>'
      break
    }

    case '/save-request-info': {
      const { method, url, ip } = ctx

      const reqInfo = {
        reqNo: reqNo++,
        method,
        url,
        ip,
      }

      try {
        logger.logRequestInfo(reqInfo)
      } catch (err) {
        console.error(err)
        ctx.status = 500
        ctx.body = 'Error saving request info!'
        return
      }

      ctx.body = 'Request info saved successfully!'
      break
    }

    case '/save-request-cookies': {
      const { header } = ctx
      const cookies = header.cookie

      try {
        logger.logRequestCookies(reqNo, cookies || '')
      } catch (err) {
        console.error(err)
        ctx.status = 500
        ctx.body = 'Error saving request cookies!'
        return
      }

      ctx.body = 'Request cookies saved successfully!'
      break
    }

    default: {
      ctx.status = 404
      ctx.body = 'Not found!'
    }
  }
}
