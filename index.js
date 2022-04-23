import { Server } from 'http';
const s = Server((req,res) => {
  if (req.url==='/login'){
    res.write('holms_2000\n');
  }
  else if (req.url.indexOf('/deg')!=-1){
    let str = req.url;
    let strl = str.split('/');
    res.write(Math.pow(strl[2],strl[3])+'\n');
  }
  else
  {
  res.write('Ok\n');
  }
  res.end();
});
s.listen(4321);  // route agnostic
