console.log("Welcome to Magic Notes");
showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
    // let notesObj;
    let addTxt=document.getElementById('addTxt');
    // i am trying to retireve the notes that is stored in loacal storage
//  if the notes key is NULL then we are creating a new array to store the notes in it 
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    } 
    // if the notes is not null then we are just storing it in our array after parsing into a object format
    else
    {
        // console.log(notes);
        notesObj=JSON.parse(notes);
    }
    //  after it we are pushing the notes in the array
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt="" ;
    console.log(notes);
    showNotes();

});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    } 
    // if the notes is not null then we are just storing it in our array after parsing into a object format
    else
    {
        // console.log(notes);
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElem=document.getElementById("notes");
    if(notesObj.length!=0)
    {
        notesElem.innerHTML=html;
    }
    else
    notesElem.innerHTML='Nothing to show right now, Use Add Note functionality to add a Note.';
}
//  addingdelete note functionality 
function deleteNote(index)
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    } 
    // if the notes is not null then we are just storing it in our array after parsing into a object format
    else
    {
        // console.log(notes);
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
//  adding search functionaity
let search=document.getElementById("searchTxt");
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase();
    let notesCard=document.getElementsByClassName('noteCard');
    Array.from(notesCard).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal))
        element.style.display="block";
         else
         element.style.display="none";


    })

})
