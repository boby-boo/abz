
export const validationRegex = {
    name: /^.{2,60}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
    // eslint-disable-next-line no-useless-escape
    phone: /^[\+]{0,1}380[0-9]{9}$/,
    type: /^image\/(jpeg|jpg)$/,
    size: 5 * 1024 * 1024,
    width: 70,
    height: 70,
}

export const errorMsgs = {
    name: 'Employee name should contain 2-60 characters.',
    email: 'Employee email, must be a valid email according to RFC2822.',
    phone: 'Number should start with code of Ukraine +380',
    empty: 'Please upload a photo',
    type: 'The photo format must be jpeg/jpg.',
    size: 'The photo size must not be greater than 5 Mb.',
    width: 'The photo width must be 70px.',
    height: 'The photo height must be 70px.',
}