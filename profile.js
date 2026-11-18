// === JavaScript (ES6) - profile.js ===
const studentProfile = {
  studentId: "66010001",
  name: "สมชาย ใจดี",
  faculty: "คณะวิทยาการจัดการ",
  major: "เทคโนโลยีดิจิทัลเพื่อธุรกิจ",
  year: 2,
  displayInfo() {
    return `[${this.studentId}] ${this.name} - ${this.major} (ปี ${this.year})`;
  }
};

console.log("=== ข้อมูลนักศึกษา ===");
console.log(studentProfile.displayInfo());