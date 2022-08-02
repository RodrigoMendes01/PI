/*** Require's ***/
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../public/images/imgprodutos")
    callback(null, folder )
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
})

const upload = multer({storage});

module.exports = upload 