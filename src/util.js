export function _regPhone(data) {
    let reg = /^(13|15|17|18|19|14)[0-9]{9}$/;
    return reg.test(data);
}
export function _regNull(data) {
    if (data == "") return true;
    let regu = "^[ ]+$";
    let re = new RegExp(regu);
    return re.test(data);
}