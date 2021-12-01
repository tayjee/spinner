let spinnerArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;
for (const cycle of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(`\r${cycle}   `);
  }, delay += 200);
}