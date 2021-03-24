const asyncFunctionThatMightThrowAnError = async () => {
  if (Math.random() < 0.5) return "correct-value";
  throw new Error("some error");
};

(async () => {
  const val = await asyncFunctionThatMightThrowAnError().catch(() => "default-value");
  console.log({ val });
})();
