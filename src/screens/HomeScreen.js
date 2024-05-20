import Typography from "@mui/material/Typography";
import {useApplication} from '../providers/ApplicationProvider';
import {useTheme} from "@mui/material";
import {observer} from 'mobx-react';

function HomeScreen() {
    const application = useApplication();
    const theme = useTheme();

    return (
        <section>
            <Typography color={theme.text.primary} variant="h5" fontWeight={'800'}>
                👋 Buenos días {application.user.fullName()}!
            </Typography>
            <Typography color={theme.text.primary} variant="h6">
                Esta es una aplicación ejemplo utilizando React y Mobx.
            </Typography>
        </section>
    );
}

export default observer(HomeScreen);