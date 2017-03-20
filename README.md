# Pocket Casts Electron
Electron version of Pocket Casts with Play/Pause button support and TouchBar Support

![](https://raw.githubusercontent.com/securingsincity/pocket-casts-electron/master/images/screenshot.png)

![](https://raw.githubusercontent.com/securingsincity/pocket-casts-electron/master/images/touchbar.png)

# Installing and building
Development: 
```
git clone https://github.com/securingsincity/pocket-casts-electron
cd pocket-casts-electron
npm install 
npm install -g electron@beta
electron . 
```
Building and Using: 
```
git clone https://github.com/securingsincity/pocket-casts-electron
cd pocket-casts-electron
npm install 
npm install -g electron@beta
npm install electron-packager -g
electron-packager . PocketCasts --icon="redicon.png.icns"
open PocketCasts-darwin-x64/PocketCasts.app/
```

--- 

Inspired by https://github.com/joselitojunior1/electron-pocket-casts
