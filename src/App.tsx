import SettingsPanel from "components/settings-panel/SettingsPanel";
import SettingsToggle from "components/settings-panel/SettingsToggle";
import useToggleStyle from "hooks/useToggleStyle";
import { useAppContext } from "providers/AppProvider";
import { useSettingsPanelContext } from "providers/SettingsPanelProvider";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import "assets/main.scss";
import ChatProvider from "providers/ChatProvider";
import { conversationsSupportChat } from "data/chat";

const App = () => {
  const { isStylesheetLoaded } = useToggleStyle();
  const { pathname } = useLocation();

  const {
    settingsPanelConfig: { showSettingPanelButton },
    setSettingsPanelConfig,
  } = useSettingsPanelContext();

  const {
    config: { theme, isRTL },
  } = useAppContext();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setSettingsPanelConfig({
      openSettingPanel: false,
    });
  }, [isRTL]);

  const showToggle = pathname !== '/register';

  return (
    <>
      {!isStylesheetLoaded ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: theme === "dark" ? "#000" : "#fff",
          }}
        />
      ) : (
        <>
          <ChatProvider conversations={conversationsSupportChat}>
            {/* <SupportChat /> */}
          </ChatProvider>
          <Outlet />
          {showToggle && showSettingPanelButton && (
            <>
              <SettingsToggle />
              <SettingsPanel />
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;
