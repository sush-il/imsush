import cv from "../../public/SushilCV.pdf";
const ShowCV = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={cv}
        style={{ width: "100%", height: "100%" }}
        title='PDF Viewer'>
        This browser does not support PDFs. Please download the PDF to view it:
        <a href={cv}>Download PDF</a>.
      </iframe>
    </div>
  );
};

export default ShowCV;
