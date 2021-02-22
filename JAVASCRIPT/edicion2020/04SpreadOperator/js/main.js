const nombre1=['Maria','Julia','Evelyn','lucia'];
const nombre2=['Julia','Evelyn','lucia','Matias','Luis'];
const nameAll=[...nombre1,...nombre2];
const noRepeat=[...new Set(nameAll)];
 console.log(nameAll)
 console.log(noRepeat)


