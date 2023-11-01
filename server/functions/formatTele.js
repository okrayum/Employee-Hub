const formatTelephone = (contacts) => {
    let newArr = []
    for (let i = 0; i < contacts.length; i++) {
        let newObj = {}
        let telephone = contacts[i].telephone.toString()
        if (telephone.length == 10) {
            let first = telephone.slice(0, 3)
            let second = telephone.slice(3, 6)
            let third = telephone.slice(6, 10)
            let teleStr = `${first}-${second}-${third}`
            let newContact = Object.assign(newObj, contacts[i]._doc)
            delete newContact.telephone
            newContact.telephone = teleStr
            newArr.push(newContact)
        } else if (telephone.length == 11) {
            let first = telephone.slice(0, 1)
            let second = telephone.slice(1, 4)
            let third = telephone.slice(4, 7)
            let fourth = telephone.slice(7, 11)
            let teleStr = `${first}-${second}-${third}-${fourth}`
            let newContact = Object.assign(newObj, contacts[i]._doc)
            delete newContact.telephone
            newContact.telephone = teleStr
            newArr.push(newContact)
        }
    }
    return newArr
}

module.exports = formatTelephone