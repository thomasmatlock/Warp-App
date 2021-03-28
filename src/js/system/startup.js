const logging = true;
const fileControllerReq = require('./fileController');
const fileController = new fileControllerReq();
const path = require('path');
const fs = require('fs');
const urls = require('./testURLS');
class startup {
    constructor() {
        this.devMode = true;
        this.testingYoutubeURLS = true; // true will use youtube URLS, false will use misc non youtube URLS
        this.dev = {
            devTools: !this.devMode ? false : true, // defaults to false, change 2nd option true for devTools
            backendOnly: false, // hides window
            getDownloadItemInfo: false,
            downloadFile: false,
            downloadSmallestFile: true,
            autoClickPaste: true,
            useRandomYoutubeURL: this.testingYoutubeURLS ? true : false, // uses YT URLS if testingYoutubeURLS is true
            useRandomMiscURL: !this.testingYoutubeURLS ? true : false, // uses misc URLS if testingYoutubeURLS is false
            URLSyoutube: urls,
            URLSmisc: [
                'https://www.facebook.com/hmtheus/videos/3230852170358533',
                'https://www.instagram.com/p/CFmU6REA5dl/',
                'https://soundcloud.com/themonday-morning-podcast/mmpc-11-16-20',
                'https://www.twitch.tv/videos/805708310',
                'https://twitter.com/LouDobbs/status/1328469195550576645',
                'https://vimeo.com/210599507',
                'https://www.tiktok.com/@foodies/video/6895167017570127109',
            ],
        };
        this.env = {
            nav_A_active: !this.devMode ? 'audio' : 'audio', //  2nd option to audio, video, or warpstagram, defaults to audio
            // hasFFmpeg: this.checkFFmpeg(),
            // this.loadAudioSlide = false; // set to true to load the audio portion of the content slide
            // this.loadVideoSlide = false; // set to true to load the video portion of the content slide
            // this.loadWarpstagramSlide = false; // set to true to load the warpstagram portion of the content slide
        };
    }

    isDevMode = () => {
        if (!this.devMode) {
            this.devTools = false;
            this.backendOnly = false;
            this.downloadFile = true;
            this.downloadSmallestFile = false;
            this.autoClickPaste = false;
            this.useRandomMiscURL = false;
            this.useRandomYoutubeURL = false;
            this.env.nav_A_active = 'audio';
        }
    };

    isOnline = () => {
        // https://stackoverflow.com/questions/15270902/check-for-internet-connectivity-in-nodejs
        if (!this.devMode) {
            require('dns').resolve('www.google.com', function(err) {
                if (err) {
                    console.log('App is OFFLINE');
                } else {
                    console.log('App is online');
                }
            });
        }
    };

    updateActiveTab = (avType) => {
        // console.log(`Updating dev mode active tab`);
        this.env.nav_A_active = avType;
        // console.log(this.env.nav_A_active);
    };
    serverConnected = () => {};
    isLatestVersion = () => {};
    isUpgradedUser = () => {};
    acceptedEULA = () => {};
    checkFFmpeg = () => {
        // Windows check
        var driveLetterObj = path.parse(fileController.dirUser); // saves obj containing root, etc from C:\\Users\\Tommy\\'
        var driveLetter = driveLetterObj.root; // saves main drive as string
        var ffmpegPath = path.join(driveLetter, '\\', fileController.ffmpeg); // joins C:\ and ffmpeg
        // check if windows ffmpeg directory exists
        try {
            if (fs.existsSync(ffmpegPath)) {
                // console.log('ffmpeg exists');
                this.hasFFmpeg = true;
            } else if (!fs.existsSync(ffmpegPath)) {
                console.log('ffmpeg doesnt exist');
                this.hasFFmpeg = false;
            }
        } catch (err) {
            console.error(err);
        }
    };

    readLocalFiles = () => {};
    updateFilesState = () => {};
    updateFilesUI = () => {};
    init = () => {
        this.isDevMode();
        this.isOnline();
        // this.checkFFmpeg();
    };
}

module.exports = startup;