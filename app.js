// instantiate GitHub
const github = new GitHub();
// instantiate UI
const ui = new UI();
// search input 
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) =>{
  // get input text
  const userText = e.target.value;
  if(userText !== '' ){
   // console.log(userText);
   github.getUser(userText)
   .then(data  =>{
     if(data.profile.message === 'Not Found'){
       // show alert
       ui.showAlert('User not found', 'alert alert-danger');

     }else{
       // show profile
       console.log(data);
       ui.showProfile(data.profile);
       ui.showRepos(data.repos);
     }
    
   })
  }else{
    // clear profile
    ui.clearProfile();
  }

});