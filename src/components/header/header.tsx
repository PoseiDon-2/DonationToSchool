import "@/components/css/header.css";

function header() {
    return (
        <header className="donation-section">
            <div className="donation-left">
                <h2>สนับสนุนการศึกษาไทย ร่วมบริจาคกับเรา</h2>
                <p>แพลตฟอร์มที่เชื่อมโยงผู้บริจาคกับคุณครูที่ต้องการการสนับสนุน เพื่อพัฒนาการศึกษาของเด็กไทย</p>
                <div className="donation-buttons">
                    <button className="search-request">ค้นหาคำขอรับบริจาค</button>
                    <button className="create-request">สร้างคำขอรับบริจาค</button>
                </div>
            </div>
            <div className="donation-right">
                <p className="htext-1">ค้นหาโครงการที่ต้องการบริจาค</p>
                <p className="htext-2">ค้นหาตามชื่อโครงการ โรงเรียน หรือจังหวัด</p>
                <div className="search-container">
                    <input
                        type="text"
                        className="donation-search"
                        placeholder="ค้นหาโครงการ..."
                    />
                    <button className="search-button">ค้นหา</button>
                </div>
            </div>
        </header>
    )
}

export default header
