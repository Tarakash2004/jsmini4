function myfunc()
{
    let ret = document.getElementById("b1").value;
    // console.log(ret)
    
    let retw = String(document.getElementById("values").value);
    let retwm = "";

    let nm = retw.length;
    let ls = "";
    let rs = "";
    let n = '';
    let text10 = 0;
    for(let i = 0 ; i < nm ; i++ )
    {
        if(isNaN(retw[i]))
        {
            n = i;
        }

    }
        
        for(let j = 0 ; j < n ; j++)
        {
            ls += retw[j];
        }
        for(let k = n+1 ; k < nm ; k++)
        {
            rs += retw[k];
        }
        switch(retw[n])
        {
            case '+':
                text10 = Number(ls) + Number(rs);
                break;
            case '-':
                text10 = Number(ls) - Number(rs);
                break;
            case '/':
                text10 = Number(ls) / Number(rs);
                break;
            case '%':
                text10 = Number(ls) % Number(rs);
                break;
            case '*':
                text10 = Number(ls) * Number(rs);
                break;
            
        }
       
    
document.getElementById("sen1").innerHTML = "your value is" + " " + "<br>" +text10;
}