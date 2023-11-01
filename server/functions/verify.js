let verifyPhone = (telephone) => {
    let phoneRegex = /^1?\s?\(\d{3}\)\s?[ -]?\d{3}[ -]\d{4}$|^\d{10}$|^\d{11}$|^1?^\s?\d{3}[ .-]\d{3}[ .-]\d{4}$|^1[. -]\d{3}[. -]\d{3}[. -]\d{4}$/
    if(phoneRegex.test(telephone)){
        return true
    }
    return false
}

let verifyEmail = (email) => {
    let emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/
    if(emailRegex.test(email)){
        return true
    }
    return false
}

let verifyPassword = (password) => {
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+-=])(.{6,25})$/
    if(passwordRegex.test(password)){
        return true
    }
    return false
}

let verifyYear = (hired) => {
    let hiredRegex = /^\d{4}$/
    if(hiredRegex.test(hired)){
        return true
    }
    return false
}

module.exports = {
    verifyPhone: (telephone)=>{
        if(verifyPhone(telephone)){
            return true
        } else {
            return false
        }

    },
    verifyEmail: (email)=>{
        if(verifyEmail(email)){
            return true
        } else {
            return false
        }

    },
    verify: (telephone, email)=>{
        if(verifyPhone(telephone) && verifyEmail(email)){
            return true
        } else {
            return false
        }
    }, 
    verifyPassword: (password)=> {
        if(verifyPassword(password)){
            return true
        } else {
            return false
        }

    },
    verifyYear: (hired)=> {
        if(verifyYear(hired)){
            return true
        } else {
            return false
        }
    }
}