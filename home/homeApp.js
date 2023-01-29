



let userIdLogged = + sessionStorage.getItem("id");
console.log(userIdLogged);

(async () => {
    let user = await getStudentById(userIdLogged);
    console.log(user);

    let modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = createModalBody(user);

    let modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML = createModalFooter();


    let modal = document.querySelector(".modal");
    modal.addEventListener("click", (e) => {
        let obj = e.target;
        if(obj.classList.contains("btn-update-profile")){
            modalBody.innerHTML = createUpdateModalBody(user);
            modalFooter.innerHTML = createUpdateModalFooter();
        }
        else if(obj.classList.contains("btn-close-profile") || obj.classList.contains("btn-close") || obj.classList.contains("btn-save-profile")){
            modalBody.innerHTML = createModalBody(user);
            modalFooter.innerHTML = createModalFooter();
        }
    })
})();








