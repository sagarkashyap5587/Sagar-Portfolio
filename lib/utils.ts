export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Sagar.pdf";
  link.download = "Sagar.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
