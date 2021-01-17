import React from 'react';
import { SearchInput } from './components/input';

export interface SearchBoxProps {
    
}
 
const SearchBox: React.FC<SearchBoxProps> = () =>
    <SearchInput placeholder='Søg' margin={true} />
 
export default SearchBox;