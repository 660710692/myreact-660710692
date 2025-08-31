import React from 'react';
import profilePic from './me.jpg';
// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={profilePic}
        //"https://via.placeholder.com/50"
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #00b135ff',
            objectFit: 'cover'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px 0' }}>
        กันตพงษ์ มณีคุ้ม
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักศึกษาเทคโนโลยีสารสนเทศที่รักการเขียนโค้ดและสร้างสรรค์สิ่งใหม่ๆ
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;