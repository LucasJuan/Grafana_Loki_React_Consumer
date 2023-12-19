import React, { useState, useEffect } from "react";



const PasswordStrength = ({ password }) => {
    const [styles, setStyles] = useState({
        backgroundColor: "",
        textColor: "",
    });

    const getPasswordStrength = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[$#&_]/.test(password);
        const isLengthValid = password.length >= 8;

        const characteristicsMatched = [hasUppercase, hasLowercase, hasNumber, hasSpecialChar, isLengthValid].filter(Boolean).length;

        if (characteristicsMatched === 5) {
            return "Strong";
        } else if (characteristicsMatched >= 3) {
            return "Moderate";
        } else {
            return "Weak";
        }
    };

    useEffect(() => {
        const strength = getPasswordStrength(password);

        let backgroundColor, textColor;
        debugger
        switch (strength) {
            case "Weak":
                backgroundColor = "red";
                textColor = "white";
                break;
            case "Moderate":
                backgroundColor = "orange";
                textColor = "white";
                break;
            case "Strong":
                backgroundColor = "green";
                textColor = "white";
                break;
            default:
                break;
        }

        setStyles({
            backgroundColor,
            textColor,
        });
    }, [password]);

    const strength = getPasswordStrength(password);

    return (
        <div
            className="px-5 py-5"
            style={{
                backgroundColor: styles.backgroundColor,
            }}
            data-testid="passwordStrengthDiv"
        >
            <h4
                style={{
                    color: styles.textColor,
                    textAlign: "center",
                }}
            >
                {strength} Password
            </h4>
        </div>
    );
};

export default PasswordStrength;