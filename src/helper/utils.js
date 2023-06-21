export function formatNumber(number) {
  // Convert the number to a string
  const numberString = number.toString();
  
  // Split the number into whole and decimal parts (if any)
  const parts = numberString.split('.');
  
  // Format the whole part with commas
  const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  // Combine the whole part with the decimal part (if any)
  const formattedNumber = parts.length > 1 ? `${wholePart}.${parts[1]}` : wholePart;
  
  return formattedNumber;
}