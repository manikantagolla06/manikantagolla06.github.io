const daySelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  opt.text = i;
  daySelect.appendChild(opt);
}

const monthSelect = document.getElementById("month");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
months.forEach((month, index) => {
  const opt = document.createElement("option");
  opt.value = index + 1;
  opt.text = month;
  monthSelect.appendChild(opt);
});

const yearSelect = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1905; y--) {
  const opt = document.createElement("option");
  opt.value = y;
  opt.text = y;
  yearSelect.appendChild(opt);
}