function UserActivity(lastActive) {
  // Calculate the time difference of two dates
  const Difference_In_Time = new Date() - new Date(lastActive);
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const Difference_In_Hours = Difference_In_Time / (1000 * 3600);
  const Difference_In_Minutes = Difference_In_Time / (1000 * 60);
  const Difference_In_Seconds = Difference_In_Time / 1000;

  if (Difference_In_Days > 1) {
    return `${Math.floor(Difference_In_Days)} days ago`;
  }
  if (Difference_In_Hours > 1) {
    return `${Math.floor(Difference_In_Hours)} hours ago`;
  }
  if (Difference_In_Minutes > 1) {
    return `${Math.floor(Difference_In_Minutes)} minutes ago`;
  }
  if (Difference_In_Seconds > 1) {
    return "Just now";
  }
}

export { UserActivity };
