const settingDetails = document.getElementById('settingDetails');

const settings = {
    darkMode: true,
    notification: false,
    language: "English",
    fontSize: 16
};


for (let key in settings) {
    if(settings[key] === true) {
        settings[key] = 'Enabled'
    }
    if(settings[key] === false) {
        settings[key] = 'Disabled';
    }

    settingDetails.innerHTML += `<p>${key}: ${settings[key]}</p>`
}