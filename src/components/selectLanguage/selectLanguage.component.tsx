import { Select } from "antd";
import useAppLanguage from "../../hooks/useAppLanguage";
import { useLanguage } from "../../store/changeLanguage.context";
import i18next from "i18next";

export function SelectLanguage() {
  const { language, setLanguage } = useLanguage();
  const { languages } = useAppLanguage();

  function handleChange(lang: string) {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    i18next.changeLanguage(lang);
  }

  return (
    <Select
      style={{ width: 120, textAlign: "left" }}
      options={languages.map((item) => ({
        label: item.english_name,
        value: item.iso_639_1,
      }))}
      onChange={handleChange}
      defaultValue={language}
    />
  );
}
