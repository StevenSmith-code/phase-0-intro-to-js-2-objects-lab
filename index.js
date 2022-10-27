// Write your solution in this file!
const employee = {
    name: "Steven",
    streetAdress: "123 Elm Street"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) =>{
    const newObj = {...employee}
    return{
        ...newObj,
        [key]: value
    }
}

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) =>{
    obj[key] = value
    return obj
    
}

const deleteFromEmployeeByKey = (obj, key, value) =>{
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}
const destructivelyDeleteFromEmployeeByKey = (obj, key, value) => {
    delete obj[key]
    return obj
}