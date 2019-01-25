var addallitems = [
    {
        name:'any name',
        Description:'any color',
        Quantity:"0123",
        Price:"0123",
        Catagory:'any you want'
    }
  
]
var item = document.getElementById('addallitems');
var data = '';

//fetch
for (let index = 0; index < addallitems.length; index++) {

    data += '<tr>';
    data += '<td>' + addallitems[index].name + '</td>';
    data += '<td>' + addallitems[index].Description + '</td>';
    data += '<td>' + addallitems[index].Quantity + '</td>';
    data += '<td>' + addallitems[index].Price + '</td>';
    data += '<td>' + addallitems[index].Catagory + '</td>';
    data += `<td><button onclick="editHandler('${addallitems[index].name}')">Edit</button></td>`;
    data += `<td><button onclick="deleteHandler('${addallitems[index].Description}')">Delete</button></td>`;
    data += '</tr>';
}

item.innerHTML = data;

//add
function addItem(){
   var newname=document.getElementById('name').value;
   var newdes=document.getElementById("des").value;
   var newqua=document.getElementById('qua').value;
   var newpri=document.getElementById('pri').value;
   var newcate=document.getElementById('cate').value;
    var newitems={
        name:newname,
        Description:newdes,
        Quantity:newqua,
        Price:newpri,
       Catagory:newcate
    }

        addallitems.push(newitems);

        data += '<tr>';
        data += '<td>' + newname + '</td>';
        data += '<td>' + newdes + '</td>';
        data += '<td>' + newqua + '</td>';
        data += '<td>' + newpri + '</td>';
        data += '<td>' + newcate + '</td>';
        data += `<td><button onclick="editHandler('${newname}')">Edit</button></td>`;
        data += `<td><button onclick="deleteHandler('${newdes}')">Delete</button></td>`;
        data += '</tr>';

        item.innerHTML = data;
    }
    

// delete
function deleteHandler(anyname) {

    var updateitems = addallitems.filter((item) => item.name !== anyname )
    
    addallitems = updateitems;
    data = '';
  
    for (let index = 0; index < addallitems.length; index++) {
    
        data += '<tr>';
        data += '<td>' + addallitems[index].name + '</td>';
        data += '<td>' + addallitems[index].Description + '</td>';
        data += '<td>' + addallitems[index].Quantity + '</td>';
        data += '<td>' + addallitems[index].Price + '</td>';
        data += '<td>' + addallitems[index].Catagory + '</td>';
        data += `<td><button onclick="editHandler('${addallitems[index].name}')">Edit</button></td>`;
        data += `<td><button onclick="deleteHandler('${addallitems[index].name}')">Delete</button></td>`;
        data += '</tr>';
    }
    
    item.innerHTML = data;
    
  } 
   


  function editHandler(itemname) {
    console.log(itemname);
    
    document.getElementById('spoiler').style.display = 'block';

    var getitem = addallitems.filter((addallitems) => addallitems.name === itemname )
    console.log(getitem);
    
    document.getElementById('edit-name').value = getitem[0].name;
    document.getElementById('edit-des').value = getitem[0].Description;
    document.getElementById('edit-qua').value = getitem[0].Quantity;
    document.getElementById('edit-pri').value = getitem[0].Price;
    document.getElementById('edit-cate').value = getitem[0].Catagory;
    
    
    var updateitems = addallitems.filter((addallitems) => addallitems.name !== itemname )

    addallitems = updateitems;

 
}  


function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}


function saveEdit() {


    var newname=document.getElementById('edit-name').value;
   var newdes=document.getElementById("edit-des").value;
   var newqua=document.getElementById('edit-qua').value;
   var newpri=document.getElementById('edit-pri').value;
   var newcate=document.getElementById('edit-cate').value;
    var newitems={
        name:newname,
        Description:newdes,
        Quantity:newqua,
        Price:newpri,
       Catagory:newcate
    }

        addallitems.push(newitems);
        data="";

        for (let index = 0; index < addallitems.length; index++) {
    
            data += '<tr>';
            data += '<td>' + addallitems[index].name + '</td>';
            data += '<td>' + addallitems[index].Description + '</td>';
            data += '<td>' + addallitems[index].Quantity + '</td>';
            data += '<td>' + addallitems[index].Price + '</td>';
            data += '<td>' + addallitems[index].Catagory + '</td>';
            data += `<td><button onclick="editHandler('${addallitems[index].name}')">Edit</button></td>`;
            data += `<td><button onclick="deleteHandler('${addallitems[index].name}')">Delete</button></td>`;
            data += '</tr>';
        }

        item.innerHTML = data;
    }





    
  

    

