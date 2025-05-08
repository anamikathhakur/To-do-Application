const letEmployee = document.getElementById('addemployee');
const form = document.querySelector('form');
// popup screen
const popup = document.querySelector('.popup');
const cancel = document.querySelector('.cancel');
const save = document.querySelector('.save');
// end

// table button
const Edit = document.getElementById('edit');
const Delete = document.getElementById('delete');
// end

// input data
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('email');
const date = document.getElementById('date');

let FirstName;
let LastName;
let Email;
let dateValue;

let user_arr = [];
let isUpdate = false;
edit_index = -1;

// end


// popup screen show & off
letEmployee.addEventListener('click', () => {
    popup.style.display = 'block';
})

cancel.addEventListener('click', () => {
    popup.style.display = 'none';
    firstName.value = '';
    lastName.value = '';
    emailAddress.value = "";
    date.value = '';
})

// popup screen show & off end


// handle prevent default

form.addEventListener('click', (e) => {
    e.preventDefault();
})

// handle prevent default end


// take input from user
save.addEventListener('click', () => {


    if (firstName.value === '' || lastName.value === '' || emailAddress === '' || date.value === '') {
        swal("OOPs!", "PLEASE ENTER All The DETAILS FIRST! ", "error");
        // popup.style.display = 'none';
        return;

    }
    if (isUpdate) {
        user_arr[edit_index] = {
            FirstName: firstName.value,
            LastName: lastName.value,
            Email: emailAddress.value,
            dateValue: date.value,
        }

        isUpdate = false;
        edit_index = -1;
        save.innerHTML = ' Save';
      
    } else{ 
        
        let user_object = {
           FirstName: firstName.value,
           LastName: lastName.value,
           Email: emailAddress.value,
           dateValue: date.value,
       }
       user_arr.push(user_object)
       
       console.log(user_arr);
    }

displayUserData();
firstName.value = '';
lastName.value = '';
emailAddress.value = "";
date.value = '';
popup.style.display = 'none';

})

// take input from user end



// for display user data
function displayUserData() {
    let statement = '';

    user_arr.forEach((val, index) => {

        statement += ` <tr>

                <td>${index + 1}</td>
                <td>${val.FirstName}</td>
                <td>${val.LastName}</td>
                <td >${val.Email}</td>
                <td>${val.dateValue}</td>
                <td id="last">
                    <button id="edit" onclick ="editdata(${index},'${val.FirstName}','${val.LastName}','${val.Email}','${val.dateValue}') ">Edit</button>
                    <button id="delete" onclick ="deletedata(${index})">Delete</button>
                </td>
               
            </tr>`
    })
    document.querySelector('tbody').innerHTML = statement;

}

// for display user data end

// delete data
function deletedata(index) {
    user_arr.splice(index, 1);
    displayUserData();
}
// end

// edit data

function editdata(index,fname,lname,eml,dt) {
   
    letEmployee.click();

    edit_index = index ;
    isUpdate = true;

    firstName.value = fname;
    lastName.value = lname;
    emailAddress.value = eml;
    date.value = dt;

    popup.style.display = 'block';
    save.innerHTML = 'Edit Save';


}
// edit data end