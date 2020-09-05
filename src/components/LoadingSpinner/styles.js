import CircularProgress from '@material-ui/core/CircularProgress';
import Styled from 'styled-components';

export const Wrap = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  .MuiCircularProgress-colorPrimary {
    color: #1e3c72;
  }
`

export const Spinner = Styled(CircularProgress)`
  
`