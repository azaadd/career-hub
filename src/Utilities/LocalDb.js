// use local storage to manage jobs data
const addToDb = id => {
    localStorage.setItem(id, 1);
}

export {addToDb}