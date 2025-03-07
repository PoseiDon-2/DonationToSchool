import "@/components/css/footer.css";

function footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-info">
                    <p>แพลตฟอร์มบริจาคที่เชื่อมโยงผู้บริจาคและผู้รับบริจาคเพื่อสนับสนุนโครงการที่เป็นประโยชน์</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/about-us">เกี่ยวกับเรา</a></li>
                        <li><a href="/faq">คำถามที่พบบ่อย</a></li>
                        <li><a href="/privacy-policy">นโยบายความเป็นส่วนตัว</a></li>
                        <li><a href="/terms">ข้อกำหนดและเงื่อนไข</a></li>
                        <li><a href="/contact">ติดต่อเรา</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" className="social-icon">Facebook</a>
                    <a href="https://twitter.com" className="social-icon">Twitter</a>
                    <a href="https://instagram.com" className="social-icon">Instagram</a>
                </div>
                <div className="footer-contact">
                    <p>ติดต่อเรา: info@donateplatform.com</p>
                    <p>โทร: +66 123 456 789</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 แพลตฟอร์มบริจาค - ทุกสิทธิ์สงวน</p>
                </div>
            </footer>

        </div>
    )
}

export default footer
