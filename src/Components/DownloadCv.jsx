import styled from "styled-components";


const Button = styled.button`
background-color: #ffffff;
border: #6e52af 2px solid;
border-radius: 20px;
padding: 10px;
font-weight: 600;
color:#000000;
display: flex;
gap: 10px;
align-items: center;
margin-bottom: 1rem;
cursor: pointer;
&:hover{
    border: #040804 solid;
    background-color: #d4ebde;
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
