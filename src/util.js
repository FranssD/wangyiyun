export function _regPhone(data) {
    let reg = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
    return reg.test(data);
}
export function _regNull(data) {
    if (data == "") return true;
    let regu = "^[ ]+$";
    let re = new RegExp(regu);
    return re.test(data);
}