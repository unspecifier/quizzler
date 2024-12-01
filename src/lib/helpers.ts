export function shuffle<T = unknown>(array: T[]): T[] {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  // Return the shuffled array, for convenience
  return array;
}

export function get_elapsed_time(date: Date): string {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diff = now.getTime() - date.getTime();

  // Ensure the difference is not negative
  if (diff < 0) {
    throw new Error("The provided date is in the future.");
  }

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Format as HH:mm:ss
  const formattedTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  return formattedTime;
}
