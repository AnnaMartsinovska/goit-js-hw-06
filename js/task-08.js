const refs = {
    form: document.querySelector('.login-form'),
};

const onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (!email.value.trim() || !password.value.trim()) { return alert('Enter email and password') }
    
    const userData = {
        email: email.value,
        password: password.value,
    }

    console.log(userData);
    
    e.currentTarget.reset();
};

refs.form.addEventListener('submit', onSubmit);

