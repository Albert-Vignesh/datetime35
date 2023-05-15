const newDate = require('newDate');

const currentDate = newDate();

// GET http://localhost:4000/
app.get('/files', (req, res) => {
    res.send({foldername: 'MyFolder'})
});

const fileName = `$(req.body.foldername)/${currentDate()}_${currentDate.getTime()}.txt`

newDate.readFile(fileName, currentDate, (err, data) => {
    if(err){
        return res.send({message: 'Error while creating file'})
    }
    res.send({message: 'File created successfully'})
})

//app.post('/files', (req, res) => {
  //  res.send({foldername: 'MyFolder'})
//})

//const fileName = `$(req.body.foldername)/${currentDate()}_${currentDate.getTime()}.txt`

//newDate.writeFile(fileName, currentDate, (err, data) => {
  //  if(err){
    //    return res.send({message: 'Error while creating file'})
    //}
    //res.send({message: 'File created successfully'})
//})

app.listen(4000, () => {
    console.log('App is runnin on port 4000');
})