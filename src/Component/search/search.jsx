import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import { CityApiUrl, CityApiOptions } from "../../API";

const Search = ({ OnSearchChange }) => {

    const [search, setSearch] = useState(null);

    const ChangeHandle = (searchData) => {
        setSearch(searchData);
        OnSearchChange(searchData);
    }

    const loadOptions = (inputVal) => {
        return fetch(`${CityApiUrl}/cities?minPopulation=1000&namePrefix=${inputVal}&`,
            CityApiOptions
        )
            // fetch (`${CityApiUrl}/cities?minPopulation=0&countryIds=VN&namePrefix=${inputVal}&`, 
            // CityApiOptions
            // )
            .then(res => res.json())
            .then(res => {
                return {
                    options: res.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.err(err));
    }

    return (
        <AsyncPaginate
            placeholder="Nhập tên thành phố"
            debounceTimeout={600}
            value={search}
            onChange={ChangeHandle}
            loadOptions={loadOptions}
        />

    )
};

export default Search;