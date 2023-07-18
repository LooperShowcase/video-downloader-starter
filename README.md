## Project Setup

1. Clone this repository.

2. Install the required packages by running the following commands in your terminal:
   ```shell
   npm install express
   npm install youtube-dl-exec
   ```

## Update `index.html` File

3. Open the `index.html` file and add the following code inside the `<body>` tag:
   ```html
   <input type="text" id="videoUrl" placeholder="Enter YouTube Video URL">
   <button onclick="downloadVideo()">Download</button>
   ```

## Update `server.js` File

4. To get video information using the `youtubedl` library, Add this code to `server.js` inside the `/download` endpoint:
   ```javascript
   const video_data = await youtubedl(videoUrl, { dumpSingleJson: true, noWarnings: true });
   const filePath = video_data.title + ".mp4";
   ```

5. Add this code that downloads the video to the same endpoint.


   ```javascript
   const output = await youtubedl(videoUrl, {
      output: filePath,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: [
         'referer:youtube.com',
         'user-agent:googlebot'
      ]
   });
      ```

6. Finally, add the response to complete the download process.

   ```javascript

   if (output) {
      const fileStream = fs.createReadStream(filePath);
      res.setHeader('Content-Disposition', `attachment; filename="${filePath}"`);
      res.setHeader('Content-Type', 'video/mp4');
      fileStream.pipe(res);
      setTimeout(()=>{
         fs.unlinkSync(filePath)
      }, 300) 
   }
   ```

## Running the Server

To start the server, open your terminal and run the following command:
   ```shell
   node server.js
   ```
