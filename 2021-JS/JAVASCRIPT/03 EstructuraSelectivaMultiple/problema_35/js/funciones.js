const fCalcular= async ()=>{
    try {        
        const url='base/info.text'
        const encapsuleRes=await fetch(url);
        const response=await encapsuleRes.json();
        fYear(response);
        
    } catch (error) {
        console.log(error)
    }
}
function fYear(datas) {

    let day;
    let ml;
    for (const ele of datas) {
        let year=ele.year
            year=parseInt(year)
        let month=ele.month
            month=parseInt(month)
      
        
        switch (month) {
            case 1:
                day=31;
                ml='enero';
                break;
            case 2:
                if (year%4==0 && (year%100 != 0 || year%400 ==0)) {
                    day=29;
                }else day= 28;
                ml='febrero'
                break;
            case 3:
                day=31;
                ml='marzo';
                break;
            case 4:
                day=30;
                ml='abril';
                break;
            case 5:
                day=31;
                ml='mayo';
                break;
            case 6:
                day=30;
                ml='junio';
                break;
            case 7:
                day=31;
                ml='julio';
                break;
            case 8:
                day=31;
                ml='agosto';
                break;
            case 9:
                day=30;
                ml='septiembre';
                break;
            case 10:
                day=31;
                ml='octubre';
                break;
            case 11:
                day=30;
                ml='noviembre';
                break;
            case 11:
                day=31;
                ml='diciembre';
                break;
        
        }
        console.log(`Mes: ${ml}   tiene dia: ${day}`)
    }

}



export default fCalcular;