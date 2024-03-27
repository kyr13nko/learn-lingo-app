import Select from "react-select";

import { getAllValues } from "../../helpers/getAllValues";

import { Label, SelectWrapper, customStyles } from "./Filter.styled";

const Filter = ({ teachers }) => {
  const levels = getAllValues(teachers, "levels");
  const languages = getAllValues(teachers, "languages");
  const prices = getAllValues(teachers, "price_per_hour");

  const handleLanguageChange = (option) => {
    console.log("option", option);
  };

  const handleLevelChange = (option) => {
    console.log("option", option);
  };

  const handlePriceChange = (option) => {
    console.log("option", option);
  };

  return (
    <SelectWrapper>
      <div>
        <Label>Languages</Label>
        <Select
          onChange={handleLanguageChange}
          isClearable
          options={languages.map((level) => ({ value: level, label: level }))}
          styles={customStyles(240)}
        />
      </div>
      <div>
        <Label>Level of knowledge</Label>
        <Select
          onChange={handleLevelChange}
          isClearable
          options={levels.map((level) => ({ value: level, label: level }))}
          styles={customStyles(270)}
        />
      </div>
      <div>
        <Label>Price</Label>
        <Select
          onChange={handlePriceChange}
          isClearable
          options={prices.map((level) => ({ value: level, label: `${level} $` }))}
          styles={customStyles(140)}
        />
      </div>
    </SelectWrapper>
  );
};

export default Filter;
