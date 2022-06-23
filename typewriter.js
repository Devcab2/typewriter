const sentence = "Hello there from lighthouse labs\n";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 150;
}
