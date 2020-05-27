export default function fetchCaptchaToken () {
  return new Promise(resolve => {
    grecaptcha.ready(() => {
      grecaptcha.execute(process.env.GRIDSOME_RECAPTCHA_KEY, { action: 'submit' }).then(token => {
        resolve(token)
      })
    })
  })
}
