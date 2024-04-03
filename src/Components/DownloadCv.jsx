import styled from "styled-components";


const Button = styled.button`
background-color: transparent;
border: #ffcc33 2px solid;
border-radius: 20px;
padding: 10px;
font-weight: 600;
color:#ffffff;
display: flex;
gap: 10px;
align-items: center;
cursor: pointer;
&:hover{
    border: #5bee5c solid;
}
`
const DownloadCV = () => {

  const handleDownload = () => {

    const cvUrl = 'cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'WelinsonCv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload}>
      Download-Cv
      <img src="download.png" alt="Icon-Download" width='25px' />
    </Button>
  );
};

export default DownloadCV;
