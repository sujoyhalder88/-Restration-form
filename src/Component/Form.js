import React, { useState } from "react";

const Form = () => {
    const [text, setText] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        password: "",
    });
    const [submit, setSubmit] = useState(false);
    const [valid, setValid] = useState(false);
    const handleFullNameChange = (event) => {
        setText({ ...text, fullname: event.target.value });
    };

    const handlePhoneNumberChange = (event) => {
        setText({ ...text, phonenumber: event.target.value });
    };
    const handleEmailChange = (event) => {
        setText({ ...text, email: event.target.value });
    };
    const handlePasswordChange = (event) => {
        setText({ ...text, password: event.target.value });
    };

    const handleSubmit = (event) => {
        if (text.fullname && text.phonenumber && text.email && text.password) {
            setValid(true);
        }
        event.preventDefault();
        setSubmit(true);
    };
    return (
        <>
            <div className="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                {submit && valid ? (
                    <div className="success">
                        Success! Thanks For submit Your Form
                    </div>
                ) : null}
                <div className="container">
                    <label htmlFor="fullname">Fullname</label>
                    {submit && !text.fullname ? (
                        <span>Please Enter your valid Fullname</span>
                    ) : null}

                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Enter here... "
                        value={text.fullname}
                        onChange={handleFullNameChange}
                    />
                    <label htmlFor="phonenumber">PhoneNumber</label>
                    {submit && !text.phonenumber ? (
                        <span>Please Enter your valid PhoneNumber</span>
                    ) : null}

                    <input
                        type="number"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Enter here..."
                        value={text.phonenumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <label htmlFor="email"> Email</label>
                    {submit && !text.email ? (
                        <span>Please Enter your valid Email</span>
                    ) : null}

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter here..."
                        value={text.email}
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="password">Password</label>
                    {submit && !text.password ? (
                        <span>Please Enter your valid Password</span>
                    ) : null}

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter here..."
                        value={text.password}
                        onChange={handlePasswordChange}
                    />
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export default Form;
