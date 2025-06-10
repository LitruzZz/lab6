class Derzhava {
    id = null;
    nazva = null;
    stolitsya = null;
    ploshcha = null;
    naselennya = null;
    vydupravlinnya = null;

    constructor(dataObj) {
        this.id = dataObj.id;
        this.nazva = dataObj.nazva;
        this.stolitsya = dataObj.stolitsya;
        this.ploshcha = dataObj.ploshcha;
        this.naselennya = dataObj.naselennya;
        this.vydupravlinnya = dataObj.vydupravlinnya;
    }

    displayAsTableRow() {
        return `<tr>
                    <td>${this.nazva}</td>
                    <td>${this.stolitsya}</td>
                    <td>${this.ploshcha}</td>
                    <td>${this.naselennya}</td>
                    <td>${this.vydupravlinnya}</td>
                    <td>
                        <button data-id="${this.id}" class="edit-derzhava btn btn-warning">Редагувати</button>
                        <button data-id="${this.id}" class="delete-derzhava btn btn-danger">Видалити</button>
                    </td>
                </tr>`;
    }

    edit(dataObj) {
        this.nazva = dataObj.nazva;
        this.stolitsya = dataObj.stolitsya;
        this.ploshcha = dataObj.ploshcha;
        this.naselennya = dataObj.naselennya;
        this.vydupravlinnya = dataObj.vydupravlinnya;
    }
}

class Naselennya {
    id = null;
    kilkist = null;
    misto = null;
    rik = null;

    constructor(dataObj) {
        this.id = dataObj.id;
        this.kilkist = dataObj.kilkist;
        this.misto = dataObj.misto;
        this.rik = dataObj.rik;
    }

    displayAsTableRow() {
        return `<tr>
                    <td>${this.kilkist}</td>
                    <td>${this.misto}</td>
                    <td>${this.rik}</td>
                    <td>
                        <button data-id="${this.id}" class="edit-naselennya btn btn-warning">Редагувати</button>
                        <button data-id="${this.id}" class="delete-naselennya btn btn-danger">Видалити</button>
                    </td>
                </tr>`;
    }

    edit(dataObj) {
        this.kilkist = dataObj.kilkist;
        this.misto = dataObj.misto;
        this.rik = dataObj.rik;
    }
}

class Natsionalnist {
    id = null;
    nazva = null;
    kilkist = null;
    mova = null;
    relihiya = null;

    constructor(dataObj) {
        this.id = dataObj.id;
        this.nazva = dataObj.nazva;
        this.kilkist = dataObj.kilkist;
        this.mova = dataObj.mova;
        this.relihiya = dataObj.relihya || dataObj.relihiya;
    }

    displayAsTableRow() {
        return `<tr>
                    <td>${this.nazva}</td>
                    <td>${this.kilkist}</td>
                    <td>${this.mova}</td>
                    <td>${this.relihiya}</td>
                    <td>
                        <button data-id="${this.id}" class="edit-natsionalnist btn btn-warning">Редагувати</button>
                        <button data-id="${this.id}" class="delete-natsionalnist btn btn-danger">Видалити</button>
                    </td>
                </tr>`;
    }

    edit(dataObj) {
        this.nazva = dataObj.nazva;
        this.kilkist = dataObj.kilkist;
        this.mova = dataObj.mova;
        this.relihiya = dataObj.relihya || dataObj.relihiya;
    }
}

class BaseList {
    constructor() {
        this.id = 1;
        this.list = [];
    }

    edit(dataObj) {
        for (let i = 0; i < this.list.length; i++) {
            if (parseInt(dataObj.id) === this.list[i].id) {
                this.list[i].edit(dataObj);
                break;
            }
        }
    }

    delete(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (parseInt(id) === this.list[i].id) {
                this.list.splice(i, 1);
                break;
            }
        }
    }

    displayTableRows() {
        let content = '';
        for (let i = 0; i < this.list.length; i++) {
            content += this.list[i].displayAsTableRow();
        }
        return content;
    }

    getById(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (parseInt(id) === this.list[i].id) {
                return this.list[i];
            }
        }
        return null;
    }
}

class DerzhavaList extends BaseList {
    add(dataObj) {
        dataObj.id = this.id++;
        let derzhava = new Derzhava(dataObj);
        this.list.push(derzhava);
    }
}

class NaselennyaList extends BaseList {
    add(dataObj) {
        dataObj.id = this.id++;
        let naselennya = new Naselennya(dataObj);
        this.list.push(naselennya);
    }
}

class NatsionalnistList extends BaseList {
    add(dataObj) {
        dataObj.id = this.id++;
        let natsionalnist = new Natsionalnist(dataObj);
        this.list.push(natsionalnist);
    }
}

let derzhavy = new DerzhavaList();
derzhavy.add({
    nazva: "Україна",
    stolitsya: "Київ",
    ploshcha: 603628,
    naselennya: 41000000,
    vydupravlinnya: "Парламентсько-президентська республіка"
});
derzhavy.add({
    nazva: "Франція",
    stolitsya: "Париж",
    ploshcha: 551695,
    naselennya: 67000000,
    vydupravlinnya: "Президентська республіка"
});
derzhavy.add({
    nazva: "Японія",
    stolitsya: "Токіо",
    ploshcha: 377975,
    naselennya: 126000000,
    vydupravlinnya: "Конституційна монархія"
});

let naselennya = new NaselennyaList();
naselennya.add({
    kilkist: 2800000,
    misto: "Київ",
    rik: 2024
});
naselennya.add({
    kilkist: 2148000,
    misto: "Париж",
    rik: 2023
});
naselennya.add({
    kilkist: 13960000,
    misto: "Токіо",
    rik: 2024
});

let natsionalnosti = new NatsionalnistList();
natsionalnosti.add({
    nazva: "Українці",
    kilkist: 37000000,
    mova: "Українська",
    relihya: "Православ'я"
});
natsionalnosti.add({
    nazva: "Французи",
    kilkist: 65000000,
    mova: "Французька",
    relihya: "Католицизм"
});
natsionalnosti.add({
    nazva: "Японці",
    kilkist: 125000000,
    mova: "Японська",
    relihya: "Синтоїзм"
});

function displayDerzhavy() {
    const derzhavaTab = document.getElementById('derzhavaTableBody');
    derzhavaTab.innerHTML = derzhavy.displayTableRows();
}

function displayNaselennya() {
    const naselennyaTab = document.getElementById('naselennyaTableBody');
    naselennyaTab.innerHTML = naselennya.displayTableRows();
}

function displayNatsionalnosti() {
    const natsionalnistTab = document.getElementById('natsionalnistTableBody');
    natsionalnistTab.innerHTML = natsionalnosti.displayTableRows();
}

function displayAllData() {
    displayDerzhavy();
    displayNaselennya();
    displayNatsionalnosti();
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-derzhava')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        derzhavy.delete(elementId);
        displayDerzhavy();
    } else if (e.target.classList.contains('delete-naselennya')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        naselennya.delete(elementId);
        displayNaselennya();
    } else if (e.target.classList.contains('delete-natsionalnist')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        natsionalnosti.delete(elementId);
        displayNatsionalnosti();
    } 
    
    else if (e.target.classList.contains('edit-derzhava')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        let derzhava = derzhavy.getById(elementId);
        document.getElementById('derzhavaIdInput').value = derzhava.id;
        document.getElementById('derzhavaNameInput').value = derzhava.nazva;
        document.getElementById('derzhavaCapitalInput').value = derzhava.stolitsya;
        document.getElementById('derzhavaAreaInput').value = derzhava.ploshcha;
        document.getElementById('derzhavaPopulationInput').value = derzhava.naselennya;
        document.getElementById('derzhavaGovernmentInput').value = derzhava.vydupravlinnya;
        $('#derzhavaModal').modal('show');
    } else if (e.target.classList.contains('edit-naselennya')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        let element = naselennya.getById(elementId);
        document.getElementById('naselennyaIdInput').value = element.id;
        document.getElementById('naselennyaQuantityInput').value = element.kilkist;
        document.getElementById('naselennyaCityInput').value = element.misto;
        document.getElementById('naselennyaYearInput').value = element.rik;
        $('#naselennyaModal').modal('show');
    } else if (e.target.classList.contains('edit-natsionalnist')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        let element = natsionalnosti.getById(elementId);
        document.getElementById('natsionalnistIdInput').value = element.id;
        document.getElementById('natsionalnistNameInput').value = element.nazva;
        document.getElementById('natsionalnistQuantityInput').value = element.kilkist;
        document.getElementById('natsionalnistLanguageInput').value = element.mova;
        document.getElementById('natsionalnistReligionInput').value = element.relihiya;
        $('#natsionalnistModal').modal('show');
    }
});

document.addEventListener('submit', function(e) {
    if (e.target.id === "derzhavaForm") {
        e.preventDefault();
        let id = document.getElementById('derzhavaIdInput').value;
        let nazva = document.getElementById('derzhavaNameInput').value;
        let stolitsya = document.getElementById('derzhavaCapitalInput').value;
        let ploshcha = parseInt(document.getElementById('derzhavaAreaInput').value);
        let naselennya = parseInt(document.getElementById('derzhavaPopulationInput').value);
        let vydupravlinnya = document.getElementById('derzhavaGovernmentInput').value;
        
        let data = {
            id: id,
            nazva: nazva,
            stolitsya: stolitsya,
            ploshcha: ploshcha,
            naselennya: naselennya,
            vydupravlinnya: vydupravlinnya
        };
        
        if (id === "") {
            derzhavy.add(data);
        } else {
            derzhavy.edit(data);
        }
        
        displayDerzhavy();
        document.getElementById('derzhavaIdInput').value = "";
        document.getElementById('derzhavaForm').reset();
        $('#derzhavaModal').modal('hide');
    } 
    
    else if (e.target.id === "naselennyaForm") {
        e.preventDefault();
        let id = document.getElementById('naselennyaIdInput').value;
        let kilkist = parseInt(document.getElementById('naselennyaQuantityInput').value);
        let misto = document.getElementById('naselennyaCityInput').value;
        let rik = parseInt(document.getElementById('naselennyaYearInput').value);
        
        let data = {
            id: id,
            kilkist: kilkist,
            misto: misto,
            rik: rik
        };
        
        if (id === "") {
            naselennya.add(data);
        } else {
            naselennya.edit(data);
        }
        
        displayNaselennya();
        document.getElementById('naselennyaIdInput').value = "";
        document.getElementById('naselennyaForm').reset();
        $('#naselennyaModal').modal('hide');
    } 
    
    else if (e.target.id === "natsionalnistForm") {
        e.preventDefault();
        let id = document.getElementById('natsionalnistIdInput').value;
        let nazva = document.getElementById('natsionalnistNameInput').value;
        let kilkist = parseInt(document.getElementById('natsionalnistQuantityInput').value);
        let mova = document.getElementById('natsionalnistLanguageInput').value;
        let relihya = document.getElementById('natsionalnistReligionInput').value;
        
        let data = {
            id: id,
            nazva: nazva,
            kilkist: kilkist,
            mova: mova,
            relihya: relihya
        };
        
        if (id === "") {
            natsionalnosti.add(data);
        } else {
            natsionalnosti.edit(data);
        }
        
        displayNatsionalnosti();
        document.getElementById('natsionalnistIdInput').value = "";
        document.getElementById('natsionalnistForm').reset();
        $('#natsionalnistModal').modal('hide');
    }
});

window.onload = function() {
    displayAllData();
};

function fetchDerzhavyFromAPI() {
    fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/derzhavy')
        .then(response => response.json())
        .then(data => {
            derzhavy.list = data.map(obj => new Derzhava(obj));
            derzhavy.id = data.reduce((max, curr) => Math.max(max, +curr.id), 0) + 1;
            displayDerzhavy();
        });
}
function saveDerzhavaToAPI(data) {
    if (!data.id) {
        fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/derzhavy', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(() => fetchDerzhavyFromAPI());
    } else {
        fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/derzhavy/' + data.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(() => fetchDerzhavyFromAPI());
    }
}
function deleteDerzhavaFromAPI(id) {
    fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/derzhavy/' + id, {
        method: "DELETE"
    })
    .then(() => fetchDerzhavyFromAPI());
}

function fetchNatsionalnostiFromAPI() {
    fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/natsionalnosti')
        .then(response => response.json())
        .then(data => {
            natsionalnosti.list = data.map(obj => new Natsionalnist(obj));
            natsionalnosti.id = data.reduce((max, curr) => Math.max(max, +curr.id), 0) + 1;
            displayNatsionalnosti();
        });
}
function saveNatsionalnistToAPI(data) {
    if (!data.id) {
        fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/natsionalnosti', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(() => fetchNatsionalnostiFromAPI());
    } else {
        fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/natsionalnosti/' + data.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(() => fetchNatsionalnostiFromAPI());
    }
}
function deleteNatsionalnistFromAPI(id) {
    fetch('https://6845c2e9fc51878754dc2bf3.mockapi.io/api/v1/natsionalnosti/' + id, {
        method: "DELETE"
    })
    .then(() => fetchNatsionalnostiFromAPI());
}

window.onload = function() {
    fetchDerzhavyFromAPI();
    fetchNatsionalnostiFromAPI();
    displayNaselennya(); 
};

document.addEventListener('submit', function(e) {
    if (e.target.id === "derzhavaForm") {
        e.preventDefault();
        let id = document.getElementById('derzhavaIdInput').value;
        let nazva = document.getElementById('derzhavaNameInput').value;
        let stolitsya = document.getElementById('derzhavaCapitalInput').value;
        let ploshcha = parseInt(document.getElementById('derzhavaAreaInput').value);
        let nasel = parseInt(document.getElementById('derzhavaPopulationInput').value);
        let vydupravlinnya = document.getElementById('derzhavaGovernmentInput').value;
        let data = {id: id, nazva, stolitsya, ploshcha, naselennya: nasel, vydupravlinnya};
        saveDerzhavaToAPI(data);
        document.getElementById('derzhavaIdInput').value = "";
        document.getElementById('derzhavaForm').reset();
        $('#derzhavaModal').modal('hide');
    }
    else if (e.target.id === "natsionalnistForm") {
        e.preventDefault();
        let id = document.getElementById('natsionalnistIdInput').value;
        let nazva = document.getElementById('natsionalnistNameInput').value;
        let kilkist = parseInt(document.getElementById('natsionalnistQuantityInput').value);
        let mova = document.getElementById('natsionalnistLanguageInput').value;
        let relihya = document.getElementById('natsionalnistReligionInput').value;
        let data = {id, nazva, kilkist, mova, relihya};
        saveNatsionalnistToAPI(data);
        document.getElementById('natsionalnistIdInput').value = "";
        document.getElementById('natsionalnistForm').reset();
        $('#natsionalnistModal').modal('hide');
    }
    else if (e.target.id === "naselennyaForm") {
        e.preventDefault();
        let id = document.getElementById('naselennyaIdInput').value;
        let kilkist = parseInt(document.getElementById('naselennyaQuantityInput').value);
        let misto = document.getElementById('naselennyaCityInput').value;
        let rik = parseInt(document.getElementById('naselennyaYearInput').value);
        let data = {id, kilkist, misto, rik};
        if (id === "") {
            naselennya.add(data);
        } else {
            naselennya.edit(data);
        }
        displayNaselennya();
        document.getElementById('naselennyaIdInput').value = "";
        document.getElementById('naselennyaForm').reset();
        $('#naselennyaModal').modal('hide');
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-derzhava')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        deleteDerzhavaFromAPI(elementId);
    } else if (e.target.classList.contains('delete-natsionalnist')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        deleteNatsionalnistFromAPI(elementId);
    }
    else if (e.target.classList.contains('delete-naselennya')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        naselennya.delete(elementId);
        displayNaselennya();
    }
});
