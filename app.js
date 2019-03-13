const EXPRESS = require('express');
const bodyparser = require('body-parser');
const app = EXPRESS();
const uploadRoute = require('./routes/UploadRoutes'); 
const CORS = require('./utils/middlewares/cors');
// var multer = require('multer');
const path = require('path');
app.use(EXPRESS.static('public'));
app.use(bodyparser.urlencoded({ extended:false}));
app.use(bodyparser.json());
app.use(CORS);
app.use('/',uploadRoute);
// var storage = multer.diskStorage({
//   destination: function(req,file,cb){
//       console.log('in destination...');
//       cb(null,__dirname+'/uploads/');
//   },
//   filename: function(req,file,cb){
//       console.log('File = ',file);
//       console.log('in filename...');
//       cb(null,file.originalname);
//   }
// });
// var upload = multer({fileFilter:function(req,file,cb){
//     console.log('File is ',file);
//     if(path.extname(file.originalname) != '.xls' || path.extname(file.originalname) != '.pdf'){
//         return cb(new Error('Only XLS or PDF file are allowed!!'),false);
//     }
//     else{
//         return cb(null,true);
//     }
// },storage: storage,limits:{filesize : 1024*1024*10}});
// var uploading = upload.single('imageupload');
// // var cpUpload = upload.fields([{ name: 'ipupdf', maxCount: 1 }, { name: 'idxls', maxCount: 1 }]);
// APP.post('/uploads',(req,res,next)=>{
//     console.log('something is good!!!');
//    uploading(req,res,(err)=>{
//        console.log('Inside Uploading...');
//        if(err){
//            console.log('Inside error...');
//            res.send('Error Happens...');
//         //    res.write('Error Happed!!!');
//        }
//        else{
//            res.send('File Uploaded...');
//        }

//    })  
// });
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, __dirname + '/uploads/'); // null represent error
//     },
//     filename: function (req, file, cb) {
//         console.log("File ", file);
//         cb(null, file.originalname);
//     }
// })

// var upload = multer({
//     fileFilter: function (req, file, cb) {
//         console.log("File is ", file);
//         if (path.extname(file.originalname) !== '.pdf') {

//             return cb(new Error('Only PDF are allowed'), false);
//         } 
//         // else if(path.extname(file.originalname) !== '.xls'){
//         //     return cb(new Error('Only XLS are allowed'), false);
//         // }
//         else {
//             return cb(null, true);
//         }
//     },
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 2
//     }
// }); //2 MB


// var uploading = upload.single('ipupdf');
// app.post('/uploads', (req, res, next) => {
    // uploading(req, res, (err) => {
    //     console.log("Inside Uploading..... ");
    //     if (err) {
    //         console.log("Inside If Condition....");
    //         res.send("Error Happens ");

    //     } else {
    //         console.log('done..');
    //         // res.download('./uploads/WCFIRST.pdf');
    //         // res.send("File Uploaded Done....");
    //     }
    // })

// });
// var uploading2 = upload.single('imageupload2');
// app.post('/uploads2', (req, res, next) => {
//     uploading2(req, res, (err) => {
//         console.log("Inside Uploading..... ");
//         if (err) {
//             console.log("Inside If Condition....");
//             res.send("Error Happens ");

//         } else {
//             res.download('./uploads/WCFIRST.pdf');
//             // res.send("File Uploaded Done....");
//         }
//     })

// });
app.listen(process.env.PORT || 1234, () => {
    console.log('Server start...');
});