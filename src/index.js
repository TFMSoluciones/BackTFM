import app from './app';
import './database';
import colors from 'colors';

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(colors.rainbow('server running on port ' + PORT));
});
