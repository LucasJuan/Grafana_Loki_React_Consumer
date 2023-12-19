import React, { useState } from "react";
import PasswordStrength from "./PasswordStrength";

const PasswordChecker = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClearPassword = () => {
        setPassword("");
    };

    return (
        <div className="layout-column align-items-center justify-content-center py-40 mt-100">
            <div className="card w-50 px-75 py-30">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Enter Your Password</h2>
                    <div className="layout-column mb-10">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter Password"
                            data-testid="passwordInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <div className="py-10" data-testid="buttonDiv">
                    <button onClick={handleShowPassword}>{showPassword ? "Hide Password" : "Show Password"}</button>
                    <button onClick={handleClearPassword}>Clear Password</button>
                </div>
            </div>
            <div className="w-50 py-20">
                <PasswordStrength password={password} />
            </div>
        </div>
    );
};

export default PasswordChecker;
