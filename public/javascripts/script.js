document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);

let updateUser = document.getElementById('edit-user');
updateUser.addEventListener('click', ()=> {
  fetch('users/{$:id}', {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
    }})
    .then((res) => res.render('admin/users'))
    .then((data) => console.log(data));
});

let deleteUser = document.getElementById('delete-user');
deleteUser.addEventListener('click', ()=>{
  fetch('users/{$:id}', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    }})
    .then((res) => res.render('admin/users'))
    .then((data) => console.log(data));
});
