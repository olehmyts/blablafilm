import { Switch } from "antd";
import { t } from "i18next";
import { Theme } from "../../interfaces/Theme";
import { useTheme } from "../../store/theme.context";
import React from "react";

export function SwitchTheme() {
  const applicationTheme = useTheme();

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", applicationTheme.theme);
  }, [applicationTheme.theme]);

  const onChangeTheme = (checked: boolean) => {
    const theme = checked ? Theme.light : Theme.dark;
    applicationTheme.toggleTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <Switch
      checkedChildren={t("Light")}
      unCheckedChildren={t("Dark")}
      onChange={onChangeTheme}
      defaultChecked={applicationTheme.theme === Theme.light ? true : false}
    />
  );
}
