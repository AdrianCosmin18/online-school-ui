
function createModalBody(person){
    let text = "";
    text += `
        <div class="accordion" id="accordionExample">

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingEmail">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmail" aria-expanded="true" aria-controls="collapseEmail">
                        Email
                    </button>
                </h2>
                <div id="collapseEmail" class="accordion-collapse collapse show" aria-labelledby="headingEmail" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>${person.email}</strong>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFirstName">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFirstName" aria-expanded="true" aria-controls="collapseFirstName">
                        First name
                    </button>
                </h2>
                <div id="collapseFirstName" class="accordion-collapse collapse show" aria-labelledby="headingFirstName" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>${person.firstName}</strong>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingLastName">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLastName" aria-expanded="true" aria-controls="collapseLastName">
                        Last name
                    </button>
                </h2>
                <div id="collapseLastName" class="accordion-collapse collapse show" aria-labelledby="headingLastName" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>${person.lastName}</strong>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingAge">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAge" aria-expanded="true" aria-controls="collapseAge">
                        Age
                    </button>
                </h2>
                <div id="collapseAge" class="accordion-collapse collapse show" aria-labelledby="headingAge" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>${person.age}</strong>
                    </div>
                </div>
            </div>

        </div>
    `;
    return text;
}

function createModalFooter(){
    let text = `
        <button type="button" class="btn btn-secondary btn-close-profile" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-update-profile">Update Profile</button>
    `;
    return text;
}

function createUpdateModalBody(person){
    let text = `
        <div class="input-group mb-3">
            <span class="input-group-text" id="input-email">Email</span>
            <input type="text" class="form-control" placeholder="${person.email}" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="input-firstname">First name</span>
            <input type="text" class="form-control" placeholder="${person.firstName}" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="input-lastname">Last name</span>
            <input type="text" class="form-control" placeholder="${person.lastName}" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="input-age">Age</span>
            <input type="text" class="form-control" placeholder="${person.age}">
            <span class="input-group-text">years</span>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="input-old-password">Old password</span>
            <input type="password" class="form-control" placeholder="*********" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="input-new-password">New password</span>
            <input type="password" class="form-control" aria-describedby="basic-addon1">
        </div>
    `;

    return text;
}

function createUpdateModalFooter(){
    let text = `
        <button type="button" class="btn btn-secondary btn-close-profile" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-save-profile">Save Changes</button>
    `;
    return text;
}