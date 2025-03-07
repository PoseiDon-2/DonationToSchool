import "@/components/css/nav.css";
import Link from "next/link";

function nav() {
    return (
        <nav className="navbar">
            <Link href="/dashboard">
                <div className="logo">Donation Platform</div>
            </Link>
            <ul className="menu">
                <li><a href="#">คำขอรับบริจาค</a></li>
                <li><a href="#">วิธีใช้งาน</a></li>
                <li><a href="#">ติดต่อเรา</a></li>
            </ul>
            <div className="auth-buttons">
                <button className="login">ล็อกอิน</button>
                <button className="register">ลงทะเบียน</button>
            </div>
        </nav>
    )
}

export default nav
