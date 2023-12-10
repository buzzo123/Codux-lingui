import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,

    environmentProps: {
        canvasHeight: 578,
        canvasWidth: 832
    }
});
