import "@/components/css/ProjectSection.css";

function ProjectSection() {
    const projects = [
        {
            id: 1,
            image: '',
            school: 'โรงเรียนบ้านน้ำใส',
            province: 'จังหวัดเชียงใหม่',
            description: 'สนับสนุนอุปกรณ์การเรียนสำหรับเด็กในพื้นที่ห่างไกล',
            goal: 50000,
            raised: 35000
        },
        {
            id: 2,
            image: '',
            school: 'โรงเรียนดอยสูง',
            province: 'จังหวัดแม่ฮ่องสอน',
            description: 'ปรับปรุงห้องสมุดโรงเรียน',
            goal: 80000,
            raised: 40000
        },
        {
            id: 3,
            image: '',
            school: 'โรงเรียนปลายฟ้า',
            province: 'จังหวัดน่าน',
            description: 'สร้างสนามเด็กเล่นใหม่',
            goal: 60000,
            raised: 15000
        }
    ];
    const summarize = {
        totalAmount: 496051515,
        totalDonor: 6051515,
        totalRequest: 51515
    };

    function formatNumber(num: number): string {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + " ล้าน";
        if (num >= 1_000) return (num / 1_000).toFixed(2) + " พัน";
        return num.toString();
    }

    function formatWithCommas(totalDonor: number): import("react").ReactNode {
        return totalDonor.toLocaleString();
    }

    return (
        <section className="project-section">
            <h2 className="section-title">โครงการที่น่าสนใจ</h2>
            <p className="title-1">ร่วมสนับสนุนโครงการที่กำลังระดมทุนอยู่ในขณะนี้</p>
            <div className="project-cards">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="card-image">
                            <img
                                src={project.image}
                                alt={project.school}
                                width="400"
                                height="270"
                            />
                        </div>
                        <div className="card-content">
                            <h3>{project.school}</h3>
                            <p className="province">{project.province}</p>
                            <p className="description">{project.description}</p>
                            <div className="progress-info">
                                <div className="funding-row">
                                    <span>เป้าหมาย: {project.goal.toLocaleString()} บาท</span>
                                    <span>ยอดบริจาค: {project.raised.toLocaleString()} บาท</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${(project.raised / project.goal) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                            <button className="donate-button">บริจาค</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="more-button">ดูเพิ่มเติม</button>

            <section className="how-it-works">
                <h1>วิธีการใช้งานแพลตฟอร์ม</h1>
                <p>ไม่ว่าคุณจะเป็นผู้บริจาคหรือคุณครู ก็สามารถใช้งานแพลตฟอร์มของเราได้อย่างง่ายดาย</p>
                <div className="box-how-to">
                    <div>
                        <h4>สำหรับผู้บริจาค</h4>
                        <ol>
                            <li>ค้นหาโครงการที่สนใจ</li>
                            <li>เลือกจำนวนเงินที่ต้องการบริจาค</li>
                            <li>ทำการชำระเงินผ่านช่องทางที่สะดวก</li>
                            <li>ติดตามความคืบหน้าของโครงการ</li>
                        </ol>
                        <button>เริ่มบริจาค</button>
                    </div>
                    <div>
                        <h4>สำหรับคุณครู</h4>
                        <ol>
                            <li>ค้นหาโครงการที่สนใจ</li>
                            <li>สร้างคำขอรับบริจาคพร้อมรายละเอียด</li>
                            <li>แชร์โครงการไปยังผู้สนับสนุน</li>
                            <li>อัพเดทความคืบหน้าและผลลัพธ์</li>
                        </ol>
                        <button>สร้างคำขอรับบริจาค</button>
                    </div>
                </div>
            </section>
            <section className="result-section">
                <h1 className="section-title">ผลลัพธ์ที่เกิดขึ้น</h1>
                <p className="section-description">ดูผลลัพธ์ที่เกิดขึ้นจากการบริจาคของคุณ</p>
                <div className="result-items">
                    <div className="result-item">
                        <h3 className="result-heading">จำนวนเงินบริจาคทั้งหมด</h3>
                        <p className="result-value">{formatNumber(summarize.totalAmount)} บาท</p>
                    </div>
                    <div className="result-item">
                        <h3 className="result-heading">จำนวนผู้บริจาคทั้งหมด</h3>
                        <p className="result-value">{formatWithCommas(summarize.totalDonor)} คน</p>
                    </div>
                    <div className="result-item">
                        <h3 className="result-heading">จำนวนคำขอรับบริจาคทั้งหมด</h3>
                        <p className="result-value">{formatWithCommas(summarize.totalRequest)} คำขอรับบริจาค</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ProjectSection
