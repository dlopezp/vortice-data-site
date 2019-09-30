import Amplify from 'aws-amplify'

Amplify.configure({
  Auth: {
    identityPoolId: process.env.AWS_IDENTITY_POOL_ID,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID,
    mandatorySignIn: false
  }
})

window.Auth = Amplify.Auth

export default ({ Vue }) => {}
