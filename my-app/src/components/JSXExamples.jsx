import React from "react";

function JSXExamples(){
    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'สมชาย';
    const age = 25;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'กันตพงษ์',
        lastName: 'มณีคุ้ม',
        age: 22,
        hobbies: ['เดิน','วิ่ง','กิน']
    };

    const formatName = (user) => {
        return '${user.firstName} ${user.lastName}';
    };

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>JSX Example</h1>

            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
            </section>
        </div>

    )
}