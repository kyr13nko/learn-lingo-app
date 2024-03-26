import Select from "react-select";

import { getAllValues } from "../../helpers/getAllValues";

import { SelectWrapper, customStyles } from "./Filter.styled";

const Filter = ({ teachers }) => {
  const levels = getAllValues(teachers, "levels");
  const languages = getAllValues(teachers, "languages");
  const prices = getAllValues(teachers, "price_per_hour");

  return (
    <SelectWrapper>
      <Select
        isClearable
        placeholder={"Languages..."}
        options={languages.map((level) => ({ value: level, label: level }))}
        styles={customStyles}
      />
      <Select
        isClearable
        placeholder={"Levels..."}
        options={levels.map((level) => ({ value: level, label: level }))}
        styles={customStyles}
      />
      <Select
        isClearable
        placeholder={"Prices per hour... "}
        options={prices.map((level) => ({ value: level, label: `${level} $` }))}
        styles={customStyles}
      />
    </SelectWrapper>
  );
};

export default Filter;
