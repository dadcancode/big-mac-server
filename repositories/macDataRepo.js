const getMacData = async () => {
    return fetch('mac-data.txt')
        .then(resp => resp.text())
        .then(text => {
            return text
        })
}

module.exports = getMacData;