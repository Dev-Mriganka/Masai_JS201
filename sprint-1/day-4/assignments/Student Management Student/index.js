document.querySelector("form").addEventListener("submit", storeData);
let data = JSON.parse(localStorage.getItem("students_data_LS")) || [];
calculate()
function storeData(event) {
    event.preventDefault();
    
    let form = document.querySelector("form");
    let name = form.name.value;
    let coding = form.course1.value;
    let dsa = form.course2.value;
    let csbt = form.course3.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new students_data(name, coding, dsa, csbt, unit, image, batch)

    data.push(s1);

    localStorage.setItem('students_data_LS', JSON.stringify(data));
    
    calculate()
    form.reset();
}

function students_data(na, co, ds, cs, un, ig, ba) { 
    this.name = na;
    this.coding = co;
    this.dsa = ds;
    this.csbt = cs;
    this.unit = un;
    this.image = ig;
    this.batch = ba;
}

function calculate() {
    let obj = {};
    data.forEach(el => {
        if (!obj[el.batch]) {
            obj[el.batch] = 1;
        } else {
            obj[el.batch]++
        }
    })
    localStorage.setItem("batch_LS", JSON.stringify(obj))
    console.log(obj);
}

