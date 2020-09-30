const getMacData = async () => {
    return fetch('mac-data.txt')
        .then(resp => resp.text())
        .then(text => console.log(text))
}

module.exports = getMacData;