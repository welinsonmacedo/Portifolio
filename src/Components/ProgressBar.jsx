import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';

const StyledLabel = styled.span`
  text-align: left;
  color: #fffb00;
  font-weight: 700;
  font-size: 15px;
  margin: 1rem;

  @media (max-width: 768px) {
    font-weight: 500;
  font-size: 9px;
  }
`;

function ProgressBarComponent({ value, label }) {
  return (
    <ProgressBar
      now={value}
      variant="success"
      style={{ padding: '1px', height: '30px' }} // Adiciona padding em toda a barra de progresso
      label={<StyledLabel>{`${label} `}</StyledLabel>}
    />
  );
}

ProgressBarComponent.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProgressBarComponent;
