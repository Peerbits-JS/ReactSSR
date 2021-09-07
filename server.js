const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
const metaData = require('./Meta/MetaData');
const cors = require("cors");


app.use(cors());

app.get(['/api/OnePost', '/api/OnePost/:current'], async (request, response) => {
  // const url = request.url.replace("/api", "");
  const params = request.query.title;
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace("<title>React App</title>", `<title>${params || 'AAA'}</title>`);
    // console.log("DATA", data);
    response.send({title:params});
  });
});

app.get(['/OnePost', '/OnePost/:current'], async (request, response) => {
  const slug = request.url.replace("/OnePost/", "");
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace("<title>React App</title>", `<title>${slug || 'AAA'}</title>`);
    // console.log("DATA", data);
    response.send(data);
  });
});

app.get(['/api','/api/:current'],async (request, response)=> {
    const url = request.url.replace("/api", "");    
    console.log("DATA", url);
    const meta = await getDefaultMetaData(url);
    response.send(meta);
  });

app.get(['/', '/:current'], async (request, response) => {
  // console.log('Home page visited!', request.url);
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8',async function (err,data) {
      const meta = await getDefaultMetaData(request.url);

      if (err) {
        return console.log(err);
      }
      if (meta?.title) {
        data = data.replace("<title>React App</title>", `<title>${meta?.title || 'Demo App'}</title>`);
      }
      let placeData = "";
      if (meta?.description) {
        placeData += `<meta name="description" content="${meta.description}" data-react-helmet="true"/>`
      }

      if (meta?.ogDescription) {
        placeData += `<meta property="og:Description" content="${meta.ogDescription}" data-react-helmet="true" />`
      }
      
      if (meta?.keywords) {
      placeData += `<meta keywords="keywords" content="${meta.keywords}" data-react-helmet="true"/>`
      }
      data.replace('<meta name="replacable" content="none"/>', placeData);
      response.send(data);
  });
});

async function getDefaultMetaData(pageURL) {
  try {
      // console.log("PageUERL", pageURL);
      if (metaData.metaData.hasOwnProperty(pageURL))
          return metaData.metaData[pageURL];
      else
          return metaData.metaData["default"];
  } catch (error) {
    console.log("getDefaultMetaData Error",error);
  }
}

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));