import fs from 'fs'
import path from 'path'

const reqHistoryPath = path.join(process.cwd(), 'logs/requestHistory.txt')
const reqCookiesPath = path.join(process.cwd(), 'logs/requestCookies.txt')

type RequestInfo = {
  reqNo: number
  method: string
  url: string
  ip: string
} 

export function init() {
  try {
    fs.writeFileSync(reqHistoryPath, '-------Request History-------\n')
    fs.writeFileSync(reqCookiesPath, '-------Request Cookies-------\n')
  } catch (err) {
    console.error(err)
  }
}

export function logRequestInfo({ reqNo, method, url, ip }: RequestInfo) {
  const time = new Date(Date.now()).toLocaleString()

  const reqInfo = `Request No: ${reqNo}\n Time: ${time}\n Method: ${method}\n URL: ${url}\n IP: ${ip}\n---------------\n\n`

  fs.appendFileSync(reqHistoryPath, reqInfo)
}

export function logRequestCookies(reqNo: number, cookies: string) {
  const time = new Date(Date.now()).toLocaleString()

  const reqCookies = `Request No: ${reqNo}\n Time: ${time}\n Cookies: ${JSON.stringify(cookies)
    .split(';')
    .join('\n')}\n---------------\n\n`

  fs.appendFileSync(reqCookiesPath, reqCookies)
}