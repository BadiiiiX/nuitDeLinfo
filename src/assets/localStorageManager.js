export const hasElementToLocalStorage = (elementName) => {
    return !!localStorage.getItem(elementName);
}

export const addElementToLocalStorage = (elmKey, elmValue) => {
    localStorage.setItem(elmKey, elmValue)
}

export const removeElementToLocalStorage = (elmKey) => {
    localStorage.removeItem(elmKey);
}

export const showFirstTimeElement = (elementId) => {
    const localStorageElm = `showed-${elementId}`;
    if (hasElementToLocalStorage(localStorageElm)) return false;
    addElementToLocalStorage(localStorageElm, 1);

    return true;
}
