import appicon from "../../../assets/appicon/appicon_smd.jpg";
import { ViewOnAppStore, ViewOnYouTube } from "@/app/components/view_on";
import AppPage from "../app_page";
import SupportFooter from "@/app/support_footer";

const SMD = () => {
    return (
        <AppPage 
            appicon={appicon}
            title="Sum My Day (Coming Soon)"
            description={
                <>
                    Sum My Day is a productivity app that helps users track their daily activities and goals.
                </>
            }
            footer={<SupportFooter googleFormLink="https://forms.gle/Di2fjB88UAJmM8Lz6"/>}
        >
            <ViewOnYouTube href="https://www.youtube.com/watch?v=n9yjQ2X8vSA&list=PLLnIlSPA1oaIYgeV6zEJ2sg_M9pn8Kmr1" />
            <ViewOnAppStore href="" text="Coming Soon" />
        </AppPage>
    );
};

export default SMD;
