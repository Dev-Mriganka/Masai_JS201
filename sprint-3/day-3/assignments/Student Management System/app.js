// document.querySelector("#signup").addEventListener("submit", myFunc)
// document.querySelector("#signin").addEventListener("submit", myFunc2)
let students_data_LS = JSON.parse(localStorage.getItem('students')) || [];
let admin_data_LS = JSON.parse(localStorage.getItem('admins')) || [];
let loggedIn_LS = JSON.parse(localStorage.getItem('loggedIn')) || {};
let assignments = JSON.parse(localStorage.getItem('assignment')) || [];
let lectures = JSON.parse(localStorage.getItem('lecture')) || [];
class User { 
    constructor(n) {
        this.name = n;
    }

    signup(n, e, p) {
        let isValidated = false;
        isValidated = this.#validateEmail(e) && this.#validatePassword(n,p)
        
        if (isValidated) {
            this.email = e;
            this.password = p;
            alert("User registered successfully")

            return true;
            
        } else {
            alert("Password must contain at least 1 upper case, numeric, and special character")
            return false;
        }
    }

    #validateEmail(e) {
        let check = false;
        let temp = e.split("@")
        if (temp[1] == "masai.com") {
            for (let i of admin_data_LS) {
                if (i.email == e) {
                    check = true;
                    break;
                }
            }
        } else {
            for (let i of students_data_LS) {
                if (i.email == e) {
                    check = true;
                    break;
                }
            }
        }
        

        if (check) {
            alert("Email already Exists!");
            document.querySelector("#email").value = "";
            document.querySelector("#name").value = "";
            document.querySelector("#pass").value = "";
            return false
        }else {
            return true
        }
    }

    #validatePassword(n,p) {
        if (n == p) {
            alert("Error: Password must be different from Name!");
            return false;
        }
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,16}/;
        return re.test(p);

    }

    login(e, p) {
        let temp = e.split("@")
        if (temp[1] == "masai.com") {
            for (let el of admin_data_LS) {
                if (el.email == e && el.password == p) {                    
                    alert("Admin logged in!");
                    return [el.name,el.id];
                }
            }
        } else {
            for (let el of students_data_LS) {
                if (el.email == e && el.password == p) {
                    alert("Student logged in!");
                    return [el.name, el.id];
                }
            }
        }

        alert("Email or password incorrect");
        return false;
    }
}

class Student{

    constructor(a,l) {
        this.numOfAssignments = a;
        this.numOfLectures = l;
        
    }

    assignmentSubmitted() {
        this.numOfAssignments++;
        
    }
}

class Admin extends User {

    constructor(n) {
        super(n)
    }

    removeStudent(index) {
        let name = students_data_LS[index].name
        students_data_LS.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students_data_LS))
        return name;
    }

    addAssignment(n,d,t) {
        let obj = {
            name: n,
            date: d,
            time: t,
        }
        assignments.push(obj)
        localStorage.setItem("assignment", JSON.stringify(assignments))
    }

    addLecture(n, d, t) {
        let obj = {
            name: n,
            date: d,
            time: t,
        }
        lectures.push(obj)
        localStorage.setItem("lecture", JSON.stringify(lectures))
    }

    removeAssignment(index) {
        let name = assignments[index].name
        assignments.splice(index, 1);
        localStorage.setItem("assignment", JSON.stringify(assignments))
        return name;
    }

    removeLecture(index) {
        let name = lectures[index].name
        lectures.splice(index, 1);
        localStorage.setItem("lecture", JSON.stringify(lectures))
        return name;
    }
}
