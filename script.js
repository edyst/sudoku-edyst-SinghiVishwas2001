var isEasy=true
        var isMedium=false
        var isHard=false


//Boards for sudoku 
var easy=[
    ['',6,'',3,'','',8,'',4],[5,3,7,'',9,'','','',''],['',4,'','','',6,3,'',7],
    ['',9,'','',5,1,2,3,8],['','','','','','','','',''],[7,1,3,6,2,'','',4,''],
    [3,'',6,4,'','','',1,''],['','','','',6,'',5,2,3],[1,'',2,'','',9,'',8,'']
]
var hard=[
['','','',8,'','',4,2,''],[5,'','',6,7,'','','',''],['','','','','',9,'','',5],
    [7,4,'',1,'','','','',''],['','',9,'',3,'',7,'',''],['','','','','',7,'',4,8],
    [8,'','',4,'','','','',''],['','','','',9,8,'','',3],['',9,5,'','',3,'','','']
]

var medium=[
['','','',5,4,'','','',8],[6,'','','','',2,3,'',''],['','',7,'','',3,'',9,''],
    ['',3,1,'',5,'','',2,''],['','','','','','','','',''],['',4,'','',3,'',7,1,''],
    ['',9,'',7,'','',2,'',''],['','',8,6,'','','','',5],[1,'','','',2,4,'','','']
]
//end of boards for sudoku
var grid=[]


//Code for setting the easy board for sudoku
function easySetter(){

    isHard=false
    isMedium=false
    isEasy=true
    //converting into array
    var easyy=JSON.parse(window.localStorage.getItem('easy'))
  
   
   
    var tds=document.querySelectorAll('td')
    var trs=document.querySelectorAll('tr')
   
    for(var i=0;i<81;i++)
    tds[i].style.background='none'
    for(var i=0;i<9;i++)
    trs[i].style.background='none'
   
    var c=1
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
        var idofcell='cell-'+c
    
        //document.getElementById(idofcell).style.background="none";
      
        if(easy[i][j]!==''){
        document.getElementById(idofcell).disabled=true
        document.getElementById(idofcell).style.background="rgb(235,235,228)";
    }
    else{
      
        document.getElementById(idofcell).disabled=false
        document.getElementById(idofcell).style.background="none";
    }
 
      
        document.getElementById(idofcell).value=easy[i][j]
        if(easyy!==null)
        document.getElementById(idofcell).value=easyy[i][j]
        c++
    }
    }
    }


 //End of setting of easy board


//Code for setting medium board for sudoku

function mediumSetter(){
    isEasy=false
    isMedium=true
    isHard=false
    //converting into array
    var mediumm=JSON.parse(window.localStorage.getItem('medium'))
    var tds=document.querySelectorAll('td')
    var trs=document.querySelectorAll('tr')
   
    for(var i=0;i<81;i++)
    tds[i].style.background='none'
    for(var i=0;i<9;i++)
    trs[i].style.background='none'
var c=1
for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
    var idofcell='cell-'+c;

 
   
    if(medium[i][j]!==''){

    document.getElementById(idofcell).disabled=true
    document.getElementById(idofcell).style.background="rgb(235,235,228)";

   
}

else{
    document.getElementById(idofcell).disabled=false
    document.getElementById(idofcell).style.background="none";
}
    document.getElementById(idofcell).value=medium[i][j]
    if(mediumm!==null)
    document.getElementById(idofcell).value=mediumm[i][j]
    c++
}
}
}
//End of setting of medium board


//Code for setting hard board for sudoku

function hardSetter(){

    isEasy=false
    isMedium=false
    isHard=true
    //converting into array
    var hardd=JSON.parse(window.localStorage.getItem('hard'))

    var tds=document.querySelectorAll('td')
    var trs=document.querySelectorAll('tr')
   
    for(var i=0;i<81;i++)
    tds[i].style.background='none'
    for(var i=0;i<9;i++)
    trs[i].style.background='none'
var c=1
for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
    var idofcell='cell-'+c
   
  
  
    if(hard[i][j]!==''){
    document.getElementById(idofcell).disabled=true
    document.getElementById(idofcell).style.background="rgb(235,235,228)";
 
}
else{
    document.getElementById(idofcell).disabled=false
    document.getElementById(idofcell).style.background="none";
  
    
}
    document.getElementById(idofcell).value=hard[i][j]
    if(hardd!==null)
    document.getElementById(idofcell).value=hardd[i][j]
    c++
}
}
}
//End of setting of hard board



//validate game function

function validateGame(){
     finalArray=[];
    var i,j;
    var a=1;
    for(i=0;i<9;i++)
    {    var array=[];
        for(j=0;j<9;j++)
        {
            idofcell="cell-"+a;
            array.push(document.getElementById(idofcell).value);
            a++;

        }
        finalArray.push(array);
      
    }
    console.log(finalArray);
    var sumofrow=rowSum();
    var sumofcol=colSum();
    var sumofbox=boxSum();
    var dupofrow=rowDuplicate();
    var dupofcol=colDuplicate();
    var dupofbox=boxDuplicate();
    if(sumofrow&&sumofcol&&sumofbox&&dupofrow&&dupofcol&&dupofbox)
    {
//Removing the answers after the solving of game
        if(isEasy)
        window.localStorage.removeItem('easy')
        if(isMedium)
        window.localStorage.removeItem('medium')
        if(isHard)
        window.localStorage.removeItem('hard')
        alert('Success!!!!')
        easySetter()
    }
    else
    alert('Try Again!!!!!')

}
//end of validate function

//checking duplicates in row
function rowDuplicate(){
    var r=0
    for(var i=0;i<9;i++){
        var set=new Set(finalArray[i])
        if(set.size!==9)
        r++
    }
    if(r===0)
    return true
    else
    return false
}
//end of code of row duplicates

//checking column duplicates
function colDuplicate(){
    var c=0
    for(var i=0;i<9;i++){
        var set=new Set()
        for(var j=0;j<9;j++){
            set.add(finalArray[j][i])
        }
        if(set.size!==9)
        c++
    }
    if(c===0)
    return true
    else
    return false
}
//end of checking of column duplicates

//checking duplicates in box
function boxDuplicate(){
    var row,col,e,f;
    row=0;
    col=0;
    e=0;
    f=0;
    for(var i=0;i<9;i++){
        var set=new Set()
        e++
        for(var j=row;j<row+3;j++){
            for(var k=col;k<col+3;k++){
                set.add(finalArray[j][k])
            }
        }
        col+=3
        if(e%3===0){
        row+=3
        col=0
    }
    if(set.size!==9)
    f++
   
    }
    if(f===0)
    return true
    else
    return false
 
}
//end of duplicates in box

//finding the sum of columns
function colSum(){
   
    var s=0,c=0
    for(var i=0;i<9;i++){
        s=0
        for(var j=0;j<9;j++){
        s+=Number(finalArray[j][i])
        }
      
        if(s===45)
        c++
    }
    if(c===9)
    return true
    else
    return false
 
}
//end of sum of columns code

//finding rows sum
function rowSum(){

    var s=0,r=0
    for(var i=0;i<9;i++){
        s=0
        for(var j=0;j<9;j++){
        s+=Number(finalArray[i][j])
        }
       console.log(s);
        if(s===45)
        r++
    }
    if(r===9)
    return true
    else
    return false
   
}
//end of finding rows sum

//finding the box sum
function boxSum()
{
    var sum;
    var row,col,e,f;
    row=0;
    col=0;
    e=0;
    f=0;
    var i,j,k;
    for(i=0;i<9;i++) //loop for boxes
    {
        sum=0;
        e++;
        for(j=row;j<row+3;j++)  //loop for the rows
        {
            for(k=col;k<col+3;k++) //loop for the columns
            {
                sum=sum+Number(finalArray[k][j]); //finding the sum 
            }
        }
        col=col+3;
        if(e%3===0)
        {
            row=row+3;
            col=0;
        }
        if(sum===45)  //checking the sum of particular box
        {
            f++;
        }
    }
    if(f===9)     //checking that the sum of all the boxes is 45 or not
    return true;
    else 
    return false;
}

//end of finding the box sum


//code of getting the numbers between 0-9 only(including 9) and for some keypress functions
function isNumber(event,e)
{
//     var codeofkey=eventent.keyCode;
//     if(codeofkey>48 && codeofkey<=57)
//     {
//         return true;
//     }
// return false;

updatetheGrid()

var coldup=checkDuplicate(event.key,e)

if(event.which>48 && event.which<=57 && coldup){
   
    e.value=event.key
    highlight(event.key,e.id)
    return true}
else
return false
}
//function for checking the duplicates 
function checkDuplicate(key,iv){
    var cellno=iv.id.slice(5,iv.id.length+1)
    var row=Math.floor(cellno/9)+1
    var col=cellno%9
    if(col===0){
    row--
        col=9
    }
    for(var i=0;i<9;i++){
        if(grid[row-1][i]===key)
        return false
    }
    for(var i=0;i<9;i++){
        if(grid[i][col-1]===key)
        return false
    }
    console.log(col+' '+row)
    var Rowstart=(row-1)-(row-1)%3
    var Colstart=(col-1)-(col-1)%3
    for(var i=Rowstart;i<Rowstart+3;i++){
        for(var j=Colstart;j<Colstart+3;j++)
        if(grid[i][j]===key)
        return false
    }
    return true
}




//updating the grid
function updatetheGrid(){
    grid=[]
    var c=1;
    var i,j;
    for( i=0;i<9;i++){
        var arr=[]
        for( j=0;j<9;j++){
            id='cell-'+c
            arr.push(document.getElementById(id).value)
            c++
        }
        grid.push(arr)
    }
    //Storing in the localstorage
    if(isEasy){
        window.localStorage.setItem('easy',JSON.stringify(grid))
      
    }
    if(isMedium){
        window.localStorage.setItem('medium',JSON.stringify(grid))
    }
    if(isHard){
        window.localStorage.setItem('hard',JSON.stringify(grid))
    }
    console.log(window.localStorage)
    console.log('grid')
}

var temporary,arrayinput=[]


//function for highlighting the cells 
function highlight(val,id){
    var l=arrayinput.length;
    if(temporary===id){
    for(var i=0;i<l;i++){
        document.getElementById(arrayinput[i]).style.background='none'
    }
}
    else
    temporary=id
    arrayinput=[]
    var input=document.querySelectorAll('td>input')
    for(var i=0;i<81;i++){
        if(input[i].value===(val)){
        input[i].style.background='#74b0fc'
        arrayinput.push(input[i].id)
    }
    }

}



//function to change the background
function changeBg(iv){
   
    var cellno=iv.id.slice(5,iv.id.length+1)
    var row=Math.floor(cellno/9)+1
    var col=cellno%9
    if(col===0){
    row--
        col=9
    }
    var k=col
    var tds=document.querySelectorAll('input')
    

    for(var i=0;i<81;i++){
   
    tds[i].style.background='none'
    if(tds[i].disabled!==true){
    tds[i].style.background='none'
    
}
    else
    tds[i].style.background='rgb(235,235,228)'
}
    

    var inp=document.querySelectorAll('tr:nth-child('+row+')>td>input')
    for(var i=0;i<9;i++){
        document.getElementById('cell-'+k).style.background='rgb(226,231,237)'
        inp[i].style.background='rgb(226,231,237)'
        k+=9
    }
    var Rowstart=(row-1)-(row-1)%3+1
    var Colstart=(col-1)-(col-1)%3+1
    var c=Colstart+(Rowstart-1)*9
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            console.log(c)
            document.getElementById('cell-'+c).style.background='rgb(226,231,237)'
            c++
        }
        c+=6
    }
}

 //function to reset the game
function resetgame()
{
    if(isEasy){
    window.localStorage.removeItem('easy')
    easySetter()
    }
    if(isMedium){
    window.localStorage.removeItem('medium')
    mediumSetter()
    }
    if(isHard){
    window.localStorage.removeItem('hard')
    hardSetter()
    }

}