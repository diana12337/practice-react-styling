
import { propTypes } from 'react-bootstrap/esm/Image';
import styled from 'styled-components';


const StyledAlertDefault = styled.div`
           position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    ;
`

const StyledAlert = styled(StyledAlertDefault)(({theme, variant})=>theme.alert[variant])
export { StyledAlert };