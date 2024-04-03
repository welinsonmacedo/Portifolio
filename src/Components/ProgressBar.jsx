import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComponent({ value, label }) {
        return<ProgressBar
        now={value}
        variant="success"
        style={{ padding: '1px' , height:'30px' }} // Adiciona padding em toda a barra de progresso
        label={<span
            style={{
                textAlign:'left',
                color: '#fffb00',
                fontWeight: 700,
                fontSize: '15px',
                margin: '1rem'
            }}
        >{`${label} ${value}%`}</span>}
      />
}
ProgressBarComponent.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};
export default ProgressBarComponent;
