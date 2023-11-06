import React from "react";
import WelcomeUserSpan from "../atoms/spans/WelcomeUserSpan";
import UserSettingsList from "../atoms/lists/UserSettingsList";


type UserPanelPageTemplateProps = {
    name: string;
}

const UserPanelPageTemplate = ({name}: UserPanelPageTemplateProps) => {

    return (
        <main>
            <div>
                <WelcomeUserSpan name={name} />
                <UserSettingsList />
            </div>
        </main>
    );
}

export default UserPanelPageTemplate;