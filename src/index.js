const videoshow = require('videoshow');
const path = require('path');

const images = Array.from({length: 14}, (v, i) => path.join(__dirname, '../images', `${i + 1}.jpeg`));

const videoOptions = {
    fps: 25,
    loop: 5,    // seconds
    transition: true,
    transitionDuration: 1,  // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
};

videoshow(images, videoOptions)
    .audio(path.join(__dirname, '../songs', 'Casablanca_Caravan.mp3'))
    .save('video.mp4')
    .on('start', command => console.log(`ffmpeg process started: ${command}`))
    .on('error', (err, stdout, stderr) => {
        console.error('Error: ', err);
        console.error('ffmpeg stderr: ', stderr);
    })
    .on('end', output => console.log('Video created in: ', output));