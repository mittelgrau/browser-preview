var that=this;function __skpm_run(e,t){that.context=t;var n=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("sketch")},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=l.settingForKey("browser-preview-browser")||"Safari";c.getSelectedDocument().selectedPage;if(0!=e.selection.length)if(e.selection.length>=1){var n=e.selection.firstObject();if(n&&n.isKindOfClass(MSArtboardGroup)){e.document.showMessage('Creating preview for "'+String(n.name())+'" in '+String(t));var i=(0,o.default)(n,{scales:"2",formats:"png",output:"/tmp",overwriting:!0});r.runCommand("/usr/bin/afplay",["/System/Library/Sounds/Glass.aiff"]),r.runCommand("/usr/bin/open",["-a",t,i])}}else;else e.document.showMessage("⚠️ Please select an artboard.")};var i,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),a=n(3),o=(i=a)&&i.__esModule?i:{default:i};var l=n(5),c=n(0)},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.runCommand=function(e,t){var n=NSTask.alloc().init();return n.setLaunchPath_(e),n.arguments=t,n.launch(),n.waitUntilExit(),0==n.terminationStatus()}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(4);t.default=function(e,t){i.export(e,t);var n=t.output+"/"+e.name()+"@"+t.scales+"x."+t.formats,a=String(t.output)+"/"+String(e.name())+".html",o="#ffffff";if(1===e.hasBackgroundColor()){var l=e.backgroundColor();o="rgba("+255*l.red()+","+255*l.green()+","+255*l.blue()+","+String(l.alpha())+")"}var c="<!DOCTYPE html>\n  <html>\n    <head>\n      <title>"+String(e.name())+'</title>\n      <style type="text/css">\n        html, body{\n          margin: 0;\n          background: '+o+";\n        }\n        .flex{\n          width: 100vw;\n          display: flex;\n          justify-content: center;\n        }\n        img{\n          position: relative;\n          width: "+String(e.bounds().size.width)+"px;\n          height: "+String(e.bounds().size.height)+'px;\n        }\n      </style>\n    </head>\n    <body>\n      <div class="flex">\n        <img src="'+n+'" alt="'+String(e.name())+'" /\n      </div>\n    </body>\n  </html>';return r.writeFileSync(a,c),a}},function(e,t){e.exports.constants={F_OK:0,R_OK:4,W_OK:2,X_OK:1},e.exports.accessSync=function(t,n){n|=0;var i=NSFileManager.defaultManager();switch(n){case 0:return e.exports.existsSync(t);case 1:return Boolean(i.isExecutableFileAtPath(t));case 2:return Boolean(i.isWritableFileAtPath(t));case 3:return Boolean(i.isExecutableFileAtPath(t)&&i.isWritableFileAtPath(t));case 4:return Boolean(i.isReadableFileAtPath(t));case 5:return Boolean(i.isReadableFileAtPath(t)&&i.isExecutableFileAtPath(t));case 6:return Boolean(i.isReadableFileAtPath(t)&&i.isWritableFileAtPath(t));case 7:return Boolean(i.isReadableFileAtPath(t)&&i.isWritableFileAtPath(t)&&i.isExecutableFileAtPath(t))}},e.exports.appendFileSync=function(t,n,i){if(e.exports.existsSync(t)){var r=NSFileHandle.fileHandleForWritingAtPath(t);r.seekToEndOfFile(),r.writeData(n.dataUsingEncoding(NSUTF8StringEncoding))}else n.writeToFile_atomically(t,!0)},e.exports.chmodSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFilePosixPermissions:t},e,n),null!==n.value())throw new Error(n.value())},e.exports.copyFileSync=function(e,t,n){var i=MOPointer.alloc().init();if(NSFileManager.defaultManager().copyItemAtPath_toPath_error(e,t,i),null!==i.value())throw new Error(i.value())},e.exports.existsSync=function(e){var t=NSFileManager.defaultManager();return Boolean(t.fileExistsAtPath(e))},e.exports.linkSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().linkItemAtPath_toPath_error(e,t,n),null!==n.value())throw new Error(n.value())},e.exports.mkdirSync=function(e,t){t=t||511;var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(e,!1,{NSFilePosixPermissions:t},n),null!==n.value())throw new Error(n.value())},e.exports.mkdtempSync=function(t){var n=t+function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}();return e.exports.mkdirSync(n),n},e.exports.readdirSync=function(e){for(var t=NSFileManager.defaultManager().subpathsAtPath(e),n=[],i=0;i<t.length;i++)n.push(t[i]);return n},e.exports.readFileSync=function(e,t){var n=t&&t.encoding?t.encoding:t||"buffer",i=(MOPointer.alloc().init(),NSFileManager.defaultManager().contentsAtPath(e));switch(n){case"utf8":return String(NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding));case"ascii":return String(NSString.alloc().initWithData_encoding(i,NSASCIIStringEncoding));case"utf16le":case"ucs2":return String(NSString.alloc().initWithData_encoding(i,NSUTF16LittleEndianStringEncoding));case"base64":var r=NSData.alloc().initWithBase64EncodedData_options(i,0);return String(NSString.alloc().initWithData_encoding(r,NSUTF8StringEncoding));case"latin1":case"binary":return String(NSString.alloc().initWithData_encoding(i,NSISOLatin1StringEncoding));case"hex":default:return i}},e.exports.readlinkSync=function(e){var t=MOPointer.alloc().init(),n=NSFileManager.defaultManager().destinationOfSymbolicLinkAtPath_error(e,t);if(null!==t.value())throw new Error(t.value());return n},e.exports.realpathSync=function(e){return NSString.stringByResolvingSymlinksInPath(e)},e.exports.renameSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().moveItemAtPath_toPath_error(e,t,n),null!==n.value())throw new Error(n.value())},e.exports.rmdirSync=function(e){var t=MOPointer.alloc().init();if(NSFileManager.defaultManager().removeItemAtPath_error(e,t),null!==t.value())throw new Error(t.value())},e.exports.statSync=function(e){var t=MOPointer.alloc().init(),n=NSFileManager.defaultManager().attributesOfItemAtPath_error(e,t);if(null!==t.value())throw new Error(t.value());return{dev:String(n.NSFileDeviceIdentifier),mode:n.NSFileType|n.NSFilePosixPermissions,nlink:Number(n.NSFileReferenceCount),uid:String(n.NSFileOwnerAccountID),gid:String(n.NSFileGroupOwnerAccountID),size:Number(n.NSFileSize),atimeMs:1e3*Number(n.NSFileModificationDate.timeIntervalSince1970()),mtimeMs:1e3*Number(n.NSFileModificationDate.timeIntervalSince1970()),ctimeMs:1e3*Number(n.NSFileModificationDate.timeIntervalSince1970()),birthtimeMs:1e3*Number(n.NSFileCreationDate.timeIntervalSince1970()),atime:new Date(1e3*Number(n.NSFileModificationDate.timeIntervalSince1970())+.5),mtime:new Date(1e3*Number(n.NSFileModificationDate.timeIntervalSince1970())+.5),ctime:new Date(1e3*Number(n.NSFileModificationDate.timeIntervalSince1970())+.5),birthtime:new Date(1e3*Number(n.NSFileCreationDate.timeIntervalSince1970())+.5),isBlockDevice:function(){return n.NSFileType===NSFileTypeBlockSpecial},isCharacterDevice:function(){return n.NSFileType===NSFileTypeCharacterSpecial},isDirectory:function(){return n.NSFileType===NSFileTypeDirectory},isFIFO:function(){return!1},isFile:function(){return n.NSFileType===NSFileTypeRegular},isSocket:function(){return n.NSFileType===NSFileTypeSocket},isSymbolicLink:function(){return n.NSFileType===NSFileTypeSymbolicLink}}},e.exports.symlinkSync=function(e,t){var n=MOPointer.alloc().init();NSFileManager.defaultManager().createSymbolicLinkAtPath_withDestinationPath_error(t,e,n);if(null!==n.value())throw new Error(n.value())},e.exports.truncateSync=function(e,t){var n=NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);n.truncateFileAtOffset(t||0),n.closeFile()},e.exports.unlinkSync=function(e){var t=MOPointer.alloc().init();NSFileManager.defaultManager().removeItemAtPath_error(e,t);if(null!==t.value())throw new Error(t.value())},e.exports.utimesSync=function(e,t,n){var i=MOPointer.alloc().init();NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFileModificationDate:t},e,i);if(null!==i.value())throw new Error(i.value())},e.exports.writeFileSync=function(e,t,n){var i=n&&n.encoding?n.encoding:n||"utf8";if(t&&t.mocha&&"NSData"===t.mocha().class())t.writeToFile_atomically(e,!0);else{var r=MOPointer.alloc().init(),a=NSString.stringWithString(t);switch(i){case"utf8":return void a.writeToFile_atomically_encoding_error(e,!0,NSUTF8StringEncoding,r);case"ascii":return void a.writeToFile_atomically_encoding_error(e,!0,NSASCIIStringEncoding);case"utf16le":case"ucs2":return void a.writeToFile_atomically_encoding_error(e,!0,NSUTF16LittleEndianStringEncoding);case"base64":return void a.dataUsingEncoding(NSUTF8StringEncoding).base64EncodedStringWithOptions(0).writeToFile_atomically(e,!0);case"latin1":case"binary":return void a.writeToFile_atomically_encoding_error(e,!0,NSISOLatin1StringEncoding);case"hex":default:return void a.writeToFile_atomically_encoding_error(e,!0,NSUTF8StringEncoding,r)}}}},function(e,t){e.exports=require("sketch/settings")}]);"default"===e&&"function"==typeof n?n(t):n[e](t)}that.onRun=__skpm_run.bind(this,"default");