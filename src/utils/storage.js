import chrome from './chrome';

async function getSyncStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value);
            })
        }
        catch (error) {
            reject(error);
        }
    });
}

async function setSyncStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.set(key, function (value) {
                resolve(value);
            })
        }
        catch (error) {
            reject(error);
        }
    });
}

export {
    getSyncStorageValue,
    setSyncStorageValue
};