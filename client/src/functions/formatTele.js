const formatTelephone = (telephone) => {
    // console.log(telephone)
    // let newArr = []
    // for (let i = 0; i < contacts.length; i++) {
        // let newObj = {}
        let stringTelephone = telephone.toString()
        // let telephone = contacts[i].telephone.toString()
        if (stringTelephone.length === 10) {
            let first = stringTelephone.slice(0, 3)
            let second = stringTelephone.slice(3, 6)
            let third = stringTelephone.slice(6, 10)
            let teleStr = `${first}-${second}-${third}`
            // let newContact = Object.assign(newObj, contacts[i]._doc)
            // delete newContact.telephone
            telephone = teleStr
            // newArr.push(newContact)
        } else if (stringTelephone.length === 11) {
            let first = stringTelephone.slice(0, 1)
            let second = stringTelephone.slice(1, 4)
            let third = stringTelephone.slice(4, 7)
            let fourth = stringTelephone.slice(7, 11)
            let teleStr = `${first}-${second}-${third}-${fourth}`
            // let newContact = Object.assign(newObj, contacts[i]._doc)
            // delete newContact.telephone
            telephone = teleStr
            // newArr.push(newContact)
        }
    // }
    return telephone
}

module.exports = formatTelephone