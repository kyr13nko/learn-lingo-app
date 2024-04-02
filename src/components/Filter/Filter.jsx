import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { resetFilter, updateFilter } from "../../store/filter/filterSlice";
import { selectFilter } from "../../store/filter/filterSelectors";

import { getAllValues } from "../../helpers/getAllValues";

import { Label, SelectWrapper, customStyles } from "./Filter.styled";

const Filter = ({ teachers }) => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const levels = getAllValues(teachers, "levels");
  const languages = getAllValues(teachers, "languages");
  const prices = getAllValues(teachers, "price_per_hour");

  const handleFilterChange = (field) => (option) => {
    const value = option ? option.value : "";

    const newFilter = { ...filter, [field]: value };
    dispatch(updateFilter(newFilter));

    if (value === "") dispatch(resetFilter());
  };

  return (
    <SelectWrapper>
      <div>
        <Label>Languages</Label>
        <Select
          onChange={handleFilterChange("language")}
          isClearable
          options={languages.map((level) => ({ value: level, label: level }))}
          styles={customStyles(240)}
        />
      </div>
      <div>
        <Label>Level of knowledge</Label>
        <Select
          onChange={handleFilterChange("level")}
          isClearable
          options={levels.map((level) => ({ value: level, label: level }))}
          styles={customStyles(270)}
        />
      </div>
      <div>
        <Label>Price</Label>
        <Select
          onChange={handleFilterChange("price")}
          isClearable
          options={prices.map((level) => ({ value: level, label: `${level} $` }))}
          styles={customStyles(140)}
        />
      </div>
    </SelectWrapper>
  );
};

export default Filter;
