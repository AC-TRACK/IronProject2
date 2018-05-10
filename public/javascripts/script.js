document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);

// let updateUser = document.getElementById('edit-user');
// updateUser.addEventListener('click', ()=> {
//   fetch('users/{$:id}', {
//     method: 'patch',
//     headers: {
//       'Content-Type': 'application/json',
//     }})
//     .then((res) => res.redirect('/users'))
//     .then((data) => console.log(data));
// });

function delete (id){
  fetch(`/users/${id}/delete`)
  .then(res=> res.redirect('/users'))
  .then(data=> console.log(data));
}

function reload(){
  delete(`${id}`);
  location.reload('/users');
}
  


//  document.getElementById('delete-user').addEventListener('click', ()=>{
//   fetch('/users/:id/delete')
//     method: 'delete',
//      headers: {
//      'Content-Type': 'application/json',
//      }})
//    .then((res) => res.redirect('/users'))
//    .then((data) => console.log(data));
// //  });
