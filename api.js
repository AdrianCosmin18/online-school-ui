
function api(path, method = "GET", body = null){

    const url = "http://localhost:8080/is-online-school-app/" + path;

    const options = {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        mode:"cors",
    };
    if(body !== null){
        options.body = JSON.stringify(body);
    }
    return fetch(url, options);
}

async function login(email, password){
    try{
        let data = await api("students/get-student-by-authentication?email=" + email +"&password=" + password);
        if(data.status === 200){
            data = await data.json();
            window.location.replace("/home/index.html");
            sessionStorage.setItem("id", data.id);
            console.log(sessionStorage.getItem("id"));
            return data;
        }
        else{
            await data.json();
            alert("Email or password incorrect!");
            return data.statusText;
        }
    }catch (e){
        return e.message;
    }
}

async function getStudentById(id){
    try{
        let data = await api("students/get-student-by-id/" + `${id}`);
        if(data.status === 200){
            data = await data.json();
            // console.log(data);
            return data;
        }else{
            await data.json();
            throw Error(data.message);
        }
    }catch(e){
        throw new Error(response.statusText);
    }
}