import 'dotenv/config';


export default ({config}) => {
  const appConfig = ({
    ...config,
    version: process.env.VERSION,
    //override anything you want
    "expo": {
      "android": {
        "package": "com.bhavit_grover_6220.ChatApp"
      },
      "extra": {
        "eas": {
          "projectId": "6f77bda4-1a0c-498c-afdf-a4a324078194"
        }
      },
      "owner": "bhavit_grover_6220",
      "name": "ChatApp",
      "slug": "ChatApp",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
        }
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
    extraKeys: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
  }});
  return appConfig;
}
