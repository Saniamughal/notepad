const addList=document.getElementById("add-notepad");

const dialogContainer=document.querySelector(".dialog-container");
let isNotepadOpen=false, notepadCounter=0,isNotepadSaved=false;
const savedNotepads=[];

class Notepad{
 constructor(){
    this.createNotepad()
 }


createNotepad(){
  this.notepad=document.createElement('div');
  this.notepad.classList.add('model');
  this.notepad.id=`notepad-${notepadCounter++}`;
  // this.notepad.style.marginLeft='auto';
  this.notepad.style.height='80vh';
  

  this.notepadContent=document.createElement('div');
  this.notepadContent.classList.add('notepad-content');

  this.closeBtn=document.createElement('img');
  this.closeBtn.classList.add('close-dialog');
  this.closeBtn.src="./images/close-icon.png";
  this.closeBtn.id='close-notepad';
  this.closeBtn.onclick = this.notepadClose;

  this.saveBtn=document.createElement('img');
  this.saveBtn.classList.add('save-btn');
  this.saveBtn.src='./images//save-icon.png';
  this.saveBtn.id='notepadSave-btn';
  this.saveBtn.onclick = this.notepadSave;

  this.title=document.createElement('div');
  this.title.classList.add('notepad-title');
  this.title.contentEditable='true';
  this.title.textContent='Title...';
  this.title.id='notepad-title';
 
  this.title.addEventListener('keydown',this.checkMaxLength);

 

  this.toDoList=document.createElement('div');
  this.toDoList.classList.add('todo-list');
  this.toDoList.contentEditable='true';
  this.toDoList.textContent='to-do-list';
  this.toDoList.id='notepad-text';

  this.notepadContent.appendChild(this.closeBtn);
  this.notepadContent.appendChild(this.saveBtn);
  this.notepadContent.appendChild(this.title);
  this.notepadContent.appendChild(this.toDoList);
  this.notepad.appendChild(this.notepadContent);

  return this.notepad;

}
checkMaxLength=()=>{
   const text=this.title.textContent;
   const words=text.split(/\s+/);
  
   if(words.length > 10 )
   {
    alert(truncateText);
    const truncateText=words.slice(0,10).join("");
    this.title.textContent=truncateText;
  
   }
  }

displayNotepad=()=>{
  if(!isNotepadOpen){
    isNotepadOpen = true;
    dialogContainer.appendChild(this.notepad);
  }
  
  
  this.notepad.addEventListener('dblclick',this.editNotepad)
 }

editNotepad=()=>
  {
    if(!isNotepadOpen){
      isNotepadOpen=true;
    const clickedDialog = savedNotepads.find((dialog) => dialog.id === this.notepad.id);
     if (clickedDialog) {
      this.closeBtn.style.display='block';
      this.saveBtn.style.display='block';
      this.notepad.style.height = '80vh';
      this.toDoList.style.display='block';
      this.toDoList.contentEditable='true';
      this.title.contentEditable = 'true';
      this.notepad.style.position = 'fixed';
      this.notepad.style.top = '56%';
      this.notepad.style.left ='50%';
      this.notepad.style.transform= 'translate(-50% , -50%)';
       this.notepad.appendChild(clickedDialog);
} }
  
  }
notepadClose=()=>{
  isNotepadOpen = false;
this.notepad.style.display ='none';
}

notepadSave=()=>{
        isNotepadOpen=false;
        this.title.contentEditable='false';
        this.toDoList.style.display='none';
        this.closeBtn.style.display='none';
        this.saveBtn.style.display='none';
        this.notepad.style.height='30px';
       this.notepad.style.position= 'static';
       this.notepad.style.top= 'auto';
       this.notepad.style.marginLeft= '0';
       this.notepad.style.transform= 'none';
       this.notepad.style.border='none';
       savedNotepads.push(this.notepad);
}
}
addList.addEventListener('click',function(){
 const newNotepad=new Notepad();
 newNotepad.displayNotepad();
});

addList.addEventListener('click',function(){
 const newNotepad=new Notepad();
 newNotepad.displayNotepad();
})






//window.addEventListener('click', windowEvents)
    
